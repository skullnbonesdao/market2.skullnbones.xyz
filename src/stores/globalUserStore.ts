import { defineStore } from 'pinia';
import { AccountInfo, ParsedAccountData, PublicKey } from '@solana/web3.js';
import { I_MarketAsset, I_StarAtlasNFT } from 'stores/I_StarAtlasNFT';
import { useGlobalStore } from 'stores/globalStore';
import { I_AccountParsedInfo } from 'stores/interfaces/I_AccountParsedInfo';
import { I_Token } from 'stores/interfaces/I_TokenList';
import { useWallet } from 'solana-wallets-vue';
import { TOKEN_PROGRAM_ID } from '@solana/spl-token';
import { I_AccountNFT } from 'stores/interfaces/I_AccountNFT';
import { useGlobalStaratlasAPIStore } from 'stores/gloablStaratlasAPIStore';
import { CURRENCIES, E_Currency } from 'stores/const';

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

    switch_currency() {
      switch (this.selected_nft.currency.type) {
        case E_Currency.ATLAS:
          this.selected_nft = useGlobalStaratlasAPIStore().nfts.find(
            (a) =>
              a.mint_asset == this.selected_nft.mint_asset &&
              a.mint_pair ==
                CURRENCIES.find((c) => c.type == E_Currency.USDC)?.mint
          );
          break;
        case E_Currency.USDC:
          this.selected_nft = useGlobalStaratlasAPIStore().nfts.find(
            (a) =>
              a.mint_asset == this.selected_nft.mint_asset &&
              a.mint_pair ==
                CURRENCIES.find((c) => c.type == E_Currency.ATLAS)?.mint
          );
          break;
      }
    },
  },
});
