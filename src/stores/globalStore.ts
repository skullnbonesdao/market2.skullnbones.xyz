import { defineStore } from 'pinia';
import { Connection, PublicKey } from '@solana/web3.js';
import { useLocalStorage } from '@vueuse/core';
import { useQuasar } from 'quasar';
import { APIClient } from 'src/api/gen';
import { I_Token, I_TokenList } from 'stores/interfaces/I_TokenList';
import axios from 'axios';

export const RPC_NETWORKS = [
  {
    name: 'alchemy1',
    url: import.meta.env.VITE_RPC_ALCHEMY_1,
  },
  {
    name: 'alchemy2',
    url: import.meta.env.VITE_RPC_ALCHEMY_2,
  },
  {
    name: 'alchemy3',
    url: import.meta.env.VITE_RPC_ALCHEMY_3,
  },
];

export const FEE_WALLET = new PublicKey(import.meta.env.VITE_FEE_WALLET);
export const SERVICE_FEE = 100000;

export const useGlobalStore = defineStore('globalstore', {
  state: () => ({
    is_done: false,

    rpc_selected: useLocalStorage('rpc_selected', RPC_NETWORKS[0]),
    settings: useLocalStorage('settings', {
      enable_grid_orders: false,
      always_show_drawer: false,
      enable_tv_chart: true,
    }),
    token_list: [] as I_Token[],
    connection: {} as Connection,
    api_client: new APIClient({
      BASE: import.meta.env.VITE_SMB_API,
    }),
    update_site_counter: 0,
  }),

  getters: {},
  actions: {
    update_connection() {
      console.log('RPC is set to: ' + this.rpc_selected.url);

      this.connection = new Connection(this.rpc_selected.url, {
        commitment: 'confirmed',
      });
    },
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
