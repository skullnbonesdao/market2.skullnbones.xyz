import { defineStore } from 'pinia';
import { Connection, PublicKey } from '@solana/web3.js';
import { useLocalStorage } from '@vueuse/core';
import { I_MarketAsset, I_StarAtlasNFT } from 'stores/I_StarAtlasNFT';

export const useGlobalUserStore = defineStore('globalUserStore', {
  state: () => ({
    selected_nft: {} as I_MarketAsset,
  }),

  getters: {},
  actions: {},
});
