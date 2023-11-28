<script setup lang="ts">
import { useGlobalFactoryStore } from 'stores/globalFactoryStore';
import { useGlobalUserStore } from 'stores/globalUserStore';
import { PublicKey } from '@solana/web3.js';
import { ref, watch } from 'vue';
import { Order } from '@staratlas/factory';
import MarketOrderFillOption from 'components/market/MarketOrderFillOption.vue';
import { CURRENCIES } from 'stores/const';

const props = defineProps({
  height: {
    default: '100px',
  },
});

const pagination = ref({
  rowsPerPage: 0,
});

const buy_orders = ref<Order[]>([]);
const sell_orders = ref<Order[]>([]);
const selected_order = ref();

const columns = [
  {
    name: 'size',
    label: 'Size',
    align: 'left',
    field: 'orderQtyRemaining',
    sortable: true,
  },

  {
    name: 'price',
    align: 'right',
    label: 'Price',
    field: (row) => row.uiPrice,
    sortable: true,
  },
];

get_orderbook_data();
function get_orderbook_data() {
  buy_orders.value = [];
  selected_order.value = [];

  buy_orders.value = useGlobalFactoryStore()
    .order_book_service.getBuyOrdersByCurrencyAndItem(
      useGlobalUserStore().selected_nft.mint_pair,
      useGlobalUserStore().selected_nft.mint_asset
    )
    .sort((a, b) => {
      return b.uiPrice - a.uiPrice;
    });

  sell_orders.value = useGlobalFactoryStore()
    .order_book_service.getSellOrdersByCurrencyAndItem(
      useGlobalUserStore().selected_nft.mint_pair,
      useGlobalUserStore().selected_nft.mint_asset
    )
    .sort((a, b) => {
      return a.uiPrice - b.uiPrice;
    });
}

watch(
  () => useGlobalUserStore().selected_nft,
  () => {
    get_orderbook_data();
  }
);
</script>

<template>
  <MarketOrderFillOption
    v-if="selected_order?.length"
    :order="selected_order[0]"
  />

  <div class="row items-center q-px-sm bg-primary">
    <div class="text-overline">BUY</div>
    <div class="text-center col text-subtitle2">
      {{ (sell_orders[0].uiPrice - buy_orders[0].uiPrice).toFixed(4) }}
    </div>
    <div class="text-overline">SELL</div>
  </div>

  <div class="row">
    <q-table
      :style="'height : ' + height"
      flat
      class="buy col my-sticky-dynamic"
      dense
      square
      :pagination="pagination"
      :rows-per-page-options="[0]"
      :rows="buy_orders"
      :columns="columns"
      row-key="id"
      hide-bottom
      selection="single"
      v-model:selected="selected_order"
      virtual-scroll
      :virtual-scroll-item-size="48"
      :virtual-scroll-sticky-size-start="48"
    >
    </q-table>

    <q-separator vertical />

    <q-table
      flat
      :style="'height : ' + height"
      dense
      square
      class="sell col my-sticky-dynamic"
      :pagination="pagination"
      :rows-per-page-options="[0]"
      :rows="sell_orders"
      :columns="columns"
      row-key="id"
      hide-bottom
      selection="single"
      v-model:selected="selected_order"
      virtual-scroll
      :virtual-scroll-item-size="48"
      :virtual-scroll-sticky-size-start="48"
    >
    </q-table>
  </div>
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
