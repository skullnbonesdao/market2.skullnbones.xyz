<script setup lang="ts">
import { ref } from 'vue';
import { useGlobalFactoryStore } from '../../stores/globalFactoryStore';
import MarketOrderbookTable from 'components/market/MarketOrderbookTable.vue';
import MarketTradesHistory from 'components/market/MarketTradesHistory.vue';
import { useGlobalUserStore } from 'stores/globalUserStore';
import { dom } from 'quasar';
import height = dom.height;
import { WalletMultiButton } from 'solana-wallets-vue';
import { useGlobalStaratlasAPIStore } from 'stores/gloablStaratlasAPIStore';

const tab = ref('book');

defineProps(['container_height']);
</script>

<template>
  <q-card class="q-mt-none" flat square>
    <q-tabs v-model="tab">
      <q-tab name="book" label="Book">
        <q-tooltip transition-show="scale" transition-hide="scale">
          Show pair order-book
        </q-tooltip>
      </q-tab>
      <q-separator vertical />
      <!--    <q-tab name="depth" label="Depth" />-->
      <!--    <q-separator vertical />-->
      <q-tab name="history" label="History">
        <q-tooltip transition-show="scale" transition-hide="scale">
          Show pair history
        </q-tooltip>
      </q-tab>
    </q-tabs>
    <q-separator />
    <q-tab-panels
      v-model="tab"
      animated
      class="text-bold"
      :style="'height: ' + container_height"
    >
      <q-tab-panel name="book" class="q-pa-none">
        <q-spinner-cube
          v-if="useGlobalFactoryStore().is_loading"
          class="full-width q-ma-md"
          size="xl"
          color="secondary"
        />

        <MarketOrderbookTable :height="container_height" v-else />
      </q-tab-panel>

      <!--    <q-tab-panel name="depth">-->
      <!--      <div class="text-h6">Alarms</div>-->
      <!--      Lorem ipsum dolor sit amet consectetur adipisicing elit.-->
      <!--    </q-tab-panel>-->

      <q-tab-panel name="history" class="q-pa-none">
        <MarketTradesHistory
          :height="container_height"
          :mint_currency="
            useGlobalStaratlasAPIStore().nfts.find(
              (n) => n.symbol == useGlobalUserStore().selected_symbol
            )?.mint_pair
          "
          :mint_asset="
            useGlobalStaratlasAPIStore().nfts.find(
              (n) => n.symbol == useGlobalUserStore().selected_symbol
            )?.mint_asset
          "
        />
      </q-tab-panel>
    </q-tab-panels>
  </q-card>
</template>

<style lang="sass">
.my-sticky-dynamic
  /* height or max-height is important */

  .q-table__top,
  .q-table__bottom,
  thead tr:first-child th /* bg color is important for th; just specify one */
    background-color: $primary

  thead tr th
    position: sticky
    z-index: 1
  /* this will be the loading indicator */
  thead tr:last-child th
    /* height of all previous header rows */
    top: 48px
  thead tr:first-child th
    top: 0

  /* prevent scrolling behind sticky top row on focus */
  tbody
    /* height of all previous header rows */
    scroll-margin-top: 48px
</style>
