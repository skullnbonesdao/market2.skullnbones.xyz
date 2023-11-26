import { defineStore } from 'pinia';
import {
  AccountInfo,
  Connection,
  ParsedAccountData,
  PublicKey,
} from '@solana/web3.js';
import { useLocalStorage } from '@vueuse/core';
import { I_MarketAsset, I_StarAtlasNFT } from 'stores/I_StarAtlasNFT';
import { useGlobalStore } from 'stores/globalStore';
import { I_AccountParsedInfo } from 'stores/interfaces/I_AccountParsedInfo';
import { I_Token } from 'stores/interfaces/I_TokenList';
import { useWallet } from 'solana-wallets-vue';
import { TOKEN_PROGRAM_ID } from '@solana/spl-token';
import axios from 'axios';
import { I_AccountNFT } from 'stores/interfaces/I_AccountNFT';
import { useGlobalStaratlasAPIStore } from 'stores/gloablStaratlasAPIStore';

export interface I_TokenMap {
  pubkey: string;
  meta: I_Token;
  info: I_AccountParsedInfo;
  account: AccountInfo<ParsedAccountData>;
}

export interface I_TokenMapSA {
  pubkey: string;
  meta: I_Token;
  info: I_AccountParsedInfo;
  account: AccountInfo<ParsedAccountData>;
  staratlas: I_StarAtlasNFT;
}

export interface I_NFTMap {
  pubkey: string;
  meta: I_AccountNFT;
  data: any;
  info: I_AccountParsedInfo;
  account: AccountInfo<ParsedAccountData>;
}

export const useGlobalUserStore = defineStore('globalUserStore', {
  state: () => ({
    selected_nft: {} as I_MarketAsset,
    token_accounts: [],
    nft_accounts: [],
    nft_in_wallet: [] as I_AccountNFT[],
    token_map: [] as I_TokenMap[],
    nft_map: [] as I_NFTMap[],
    is_loading: false,
  }),

  getters: {
    get_account_map(state) {
      return state.token_accounts.map((account) => {
        const info = account.account.data.parsed.info as I_AccountParsedInfo;

        return {
          pubkey: account.pubkey.toString(),
          info: info,
          account: account,
          meta: useGlobalStore().token_list.find(
            (token) => token.address === info.mint
          ),
        } as I_TokenMap;
      });
    },

    get_account_map_staratlas(state) {
      return state.token_accounts
        .filter((a) =>
          useGlobalStaratlasAPIStore().raw.some(
            (d) => d.mint == a.account.data.parsed.info.mint
          )
        )

        .map((account) => {
          const info = account.account.data.parsed.info as I_AccountParsedInfo;
          return {
            pubkey: account.pubkey.toString(),
            info: info,
            account: account,
            meta: useGlobalStore().token_list.find(
              (token) => token.address === info.mint
            ),
            staratlas: useGlobalStaratlasAPIStore().raw.find(
              (t) => t.mint == info.mint
            ),
          } as I_TokenMapSA;
        });
    },
  },
  actions: {
    async update_accounts(wallet: PublicKey | undefined = undefined) {
      this.is_loading = true;
      this.token_accounts = [];

      if (useWallet().publicKey.value || wallet) {
        this.token_accounts = [];
        this.token_accounts = (
          await useGlobalStore().connection.getParsedTokenAccountsByOwner(
            wallet ? wallet : useWallet().publicKey.value!,
            {
              programId: TOKEN_PROGRAM_ID,
            }
          )
        ).value;
      }
      this.is_loading = false;
    },
    async update_accounts_nft(force = false) {
      if (useWallet().publicKey.value || !this.nft_map.length || force) {
        this.is_loading = true;
        this.nft_in_wallet = [];

        this.nft_map = [];
        this.nft_in_wallet = (await getParsedNftAccountsByOwner({
          publicAddress: useWallet().publicKey.value!.toString(),
          connection: useGlobalStore().connection as Connection,
        })) as I_AccountNFT[];

        for (const meta of this.nft_in_wallet) {
          const largestAccounts =
            await useGlobalStore().connection.getTokenLargestAccounts(
              new PublicKey(meta.mint)
            );
          const largestAccountInfo =
            await useGlobalStore().connection.getParsedAccountInfo(
              largestAccounts.value[0].address
            );

          const info = largestAccountInfo.value.data.parsed
            .info as I_AccountParsedInfo;

          this.nft_map.push({
            pubkey: largestAccounts.value[0].address.toString(),
            account: largestAccountInfo.value,
            info: info,
            meta: meta,
            data: await fetch_data_url(meta.data.uri),
          });
        }
      }
      this.is_loading = false;
    },
  },
});

async function fetch_data_url(url: string) {
  try {
    return await axios.get(url).then((resp) => {
      return resp.data;
    });
  } catch (err) {
    console.warn(err);
    return undefined;
  }
}
