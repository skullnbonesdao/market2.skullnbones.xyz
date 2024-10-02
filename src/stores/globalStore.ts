import { defineStore } from 'pinia';
import { Connection, PublicKey } from '@solana/web3.js';
import { useLocalStorage } from '@vueuse/core';

import { APIClient } from 'src/api/gen';
import { I_Token, I_TokenList } from 'stores/interfaces/I_TokenList';
import axios from 'axios';


export const FEE_WALLET = new PublicKey(import.meta.env.VITE_FEE_WALLET);
export const SERVICE_FEE = 100000;

export const useGlobalStore = defineStore('globalstore', {
  state: () => ({
    is_done: false,


    settings: useLocalStorage('settings', {
      enable_grid_orders: false,
      always_show_drawer: false,
      enable_tv_chart: true,
    }),
    token_list: [] as I_Token[],

    api_client: new APIClient({
      BASE: import.meta.env.VITE_SMB_API,
    }),
    update_site_counter: 0,
  }),

  getters: {},
  actions: {

    async load_token_list() {
      axios
        .get(
          'https://cdn.jsdelivr.net/gh/solflare-wallet/token-list@latest/solana-tokenlist.json'
        )
        .then((response) => {
          const data: I_TokenList = response.data;
          this.token_list = data.tokens;
        });
    },
  },
});
