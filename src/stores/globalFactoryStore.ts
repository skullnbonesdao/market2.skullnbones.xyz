import { defineStore } from 'pinia';
import { Connection, PublicKey } from '@solana/web3.js';
import { GmOrderbookService } from '@staratlas/factory';
import { useGlobalStore } from 'stores/globalStore';

export const GM_PROGRAM_ID = new PublicKey(
  'traderDnaR5w6Tcoi3NFm53i48FTDNbGjBSZwWXDRrg'
);
export const useGlobalFactoryStore = defineStore('factoryStore', {
  state: () => ({
    is_loading: false,
    order_book_service: new GmOrderbookService(
      useGlobalStore().connection as Connection,
      new PublicKey(GM_PROGRAM_ID)
    ),
  }),

  getters: {},
  actions: {
    async init() {
      this.is_loading = true;

      await this.order_book_service.loadInitialOrders();

      // setInterval(async function () {
      //   console.log("update orderbooks");
      //   //        await useStaratlasGmStore().order_book_service.initialize();
      //   await useFactoryStore().order_book_service.loadInitialOrders();
      // }, 10000);

      this.is_loading = false;
    },
  },
});
