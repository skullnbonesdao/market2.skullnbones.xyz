import { defineStore } from 'pinia';
import { I_MarketAsset, I_StarAtlasNFT, ItemType } from 'stores/I_StarAtlasNFT';
import axios from 'axios';
import { CURRENCIES, E_Currency } from 'stores/const';

export const STARATLASAPI_URL = 'https://galaxy.staratlas.com/nfts';

export const useGlobalStaratlasAPIStore = defineStore(
  'globalStaratlasAPIStore',
  {
    state: () => ({
      nfts: [] as I_MarketAsset[],
      raw: [] as I_StarAtlasNFT[],
    }),

    getters: {
      get_itemTypes(state): ItemType[] {
        return [...new Set(state.raw.map((d) => d.attributes.itemType))];
      },
    },
    actions: {
      async update() {
        const data = (await axios.get(STARATLASAPI_URL))
          .data as I_StarAtlasNFT[];
        this.raw = data;

        this.nfts = [];
        data.forEach((d) => {
          CURRENCIES.filter(
            (c) => c.type == E_Currency.ATLAS || c.type == E_Currency.USDC
          )
          .forEach((c) => {
            this.nfts.push({
              symbol: d.symbol + c.symbol,
              img_path: `sa_files/webp/${d.mint}.webp`,
              mint_asset: d.mint,
              mint_pair: c.mint,
              data: d,
              currency: c,
              name: `${d.name} [${c.name}]`,
            });
          });
        });
      },
    },
  }
);
