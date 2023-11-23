<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';
import { useGlobalStaratlasAPIStore } from 'stores/gloablStaratlasAPIStore';
import { CURRENCIES } from 'stores/const';
import CurrencyIcon from 'components/elements/CurrencyIcon.vue';
import AsssetIcon from 'components/elements/AsssetIcon.vue';
import { Order } from '@staratlas/factory';
import { ItemType } from 'stores/I_StarAtlasNFT';
import { useGlobalFactoryStore } from 'stores/globalFactoryStore';
import PirceElement from 'components/elements/PirceElement.vue';

const pagination = ref({
  rowsPerPage: 0,
});

const columns = [
  {
    name: 'name',
    required: true,
    label: 'Name',
    field: 'name',
    align: 'left',
    sortable: true,
  },
  {
    name: 'symbol',
    required: true,
    label: 'Symbol',
    field: 'symbol',
    align: 'left',
    sortable: true,
  },
  {
    name: 'market',
    required: true,
    label: 'Market',
    align: 'center',
    sortable: true,
  },

  {
    name: 'buy_orders',
    required: true,
    label: 'Buy',
    align: 'right',
    sortable: true,
  },
  {
    name: 'spread',
    required: true,
    label: 'Spread',
    align: 'center',
    sortable: true,
  },
  {
    name: 'sell_orders',
    required: true,
    label: 'Sell',
    align: 'left',
    sortable: true,
  },
];

interface TableData {
  name: string;
  url: string;
  symbol: string;
  market: TableMarketPrices;
  orderbok: TableMarketOrders;
}

interface TableMarketPrices {
  atlas: number;
  usdc: number;
}
interface TableMarketOrders {
  buy: TableMarketPrices;
  sell: TableMarketPrices;
}

const data = ref<TableData[]>([]);
const itemType_selected = ref<ItemType>(ItemType.Ship);

onMounted(async () => {
  prepare_data();
});

watch(
  () => itemType_selected.value,
  () => {
    prepare_data();
  }
);

function prepare_data() {
  data.value = [];

  useGlobalStaratlasAPIStore()
    .raw.filter((r) => r.attributes.itemType == itemType_selected.value)
    .forEach((d) => {
      data.value.push({
        name: d.name.toString(),
        mint: d.mint.toString(),
        symbol: d.symbol,
        url: 'sa_files/webp/' + d.mint.toString() + '.webp',
        market: {
          atlas: 0,
          usdc: 0,
        },
        orderbok: {
          buy: {
            atlas: useGlobalFactoryStore()
              .order_book_service.getBuyOrdersByCurrencyAndItem(
                CURRENCIES.find((c) => c.name == 'ATLAS')?.mint ?? '',
                d.mint
              )
              .sort((a, b) => a.price - b.price)
              .reverse()[0]?.uiPrice,
            usdc: useGlobalFactoryStore()
              .order_book_service.getBuyOrdersByCurrencyAndItem(
                CURRENCIES.find((c) => c.name == 'USDC')?.mint ?? '',
                d.mint
              )
              .sort((a, b) => a.price - b.price)
              .reverse()[0]?.uiPrice,
          },
          sell: {
            atlas: useGlobalFactoryStore()
              .order_book_service.getSellOrdersByCurrencyAndItem(
                CURRENCIES.find((c) => c.name == 'ATLAS')?.mint ?? '',
                d.mint
              )
              .sort((a, b) => a.price - b.price)[0]?.uiPrice,
            usdc: useGlobalFactoryStore()
              .order_book_service.getSellOrdersByCurrencyAndItem(
                CURRENCIES.find((c) => c.name == 'USDC')?.mint ?? '',
                d.mint
              )
              .sort((a, b) => a.price - b.price)[0]?.uiPrice,
          },
        },
      });
    });
}
function calc_spread(buy: number, sell: number) {
  return buy - sell < 0 ? ((buy - sell) / sell).toFixed(2) + '%' : 0;
}
// we generate lots of rows here
</script>

<template>
  {{ itemType_selected.toString() }}
  <div class="q-pa-md">
    <q-table
      flat
      bordered
      title="Treats"
      :rows="data"
      :columns="columns"
      row-key="index"
      :pagination="pagination"
      :rows-per-page-options="[0]"
    >
      <template v-slot:top>
        <q-space />
        <div v-if="$q.screen.gt.xs" class="row q-gutter-x-md">
          <q-btn
            @click="
              () => {
                itemType_selected = itemType;
              }
            "
            :color="itemType_selected == itemType ? 'accent' : 'secondary'"
            :label="itemType"
            :key="itemType"
            v-for="itemType in useGlobalStaratlasAPIStore().get_itemTypes"
          />
        </div>

        <q-space />
        <q-input filled dense>
          <template v-slot:after>
            <q-icon size="sm" name="fa-solid fa-magnifying-glass" />
          </template>
        </q-input>
      </template>

      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td key="name" :props="props" class="">
            <div class="row items-center q-gutter-x-sm">
              <q-avatar>
                <q-img
                  height="50px"
                  width="50px"
                  fetchpriority="low"
                  :src="props.row.url"
                ></q-img>
              </q-avatar>
              <div class="text-subtitle1">
                {{ props.row.name }}
              </div>
            </div>
          </q-td>

          <q-td key="symbol" :props="props">
            <div class="text-subtitle1">
              {{ props.row.symbol }}
            </div>
          </q-td>

          <q-td key="market" :props="props" class="q-gutter-y-sm">
            <PirceElement label="ATLAS" :value="props.row.market?.atlas" />
            <PirceElement label="USDC" :value="props.row.market?.usdc" />
          </q-td>

          <q-td key="buy_orders" :props="props" class="q-gutter-y-sm buy">
            <PirceElement
              class=""
              label="ATLAS"
              :value="props.row.orderbok.buy?.sell"
            />
            <PirceElement label="USDC" :value="props.row.orderbok.buy?.usdc" />
          </q-td>
          <q-td key="spread" :props="props" class="q-gutter-y-sm buy">
            <div>
              {{
                calc_spread(
                  props.row.orderbok.buy?.atlas,
                  props.row.orderbok.sell?.atlas
                )
              }}
            </div>
            <div>
              {{
                calc_spread(
                  props.row.orderbok.buy?.usdc,
                  props.row.orderbok.sell?.usdc
                )
              }}
            </div>
          </q-td>

          <q-td key="sell_orders" :props="props" class="q-gutter-y-sm sell">
            <PirceElement
              label="ATLAS"
              :value="props.row.orderbok.sell?.atlas"
            />
            <PirceElement
              label="USDC"
              :value="props.row.orderbok?.sell?.usdc"
            />
          </q-td>

          <!--        <q-td key="volume" :props="props">-->
          <!--          <div class="row items-center q-gutter-x-xs justify-end">-->
          <!--            <div>-->
          <!--              {{ props.row.volume ?? 0 }}-->
          <!--            </div>-->
          <!--            <CurrencyIcon-->
          <!--              style="width: 14px; height: 14px"-->
          <!--              :currency="CURRENCIES.find((c) => c.mint === props.row.currency)"-->
          <!--            />-->
          <!--          </div>-->
          <!--        </q-td>-->

          <q-td key="price" :props="props" class="">
            <div class="row items-center q-gutter-x-xs justify-end">
              <div>
                {{ props.row.price ?? 0 }}
              </div>
              <CurrencyIcon
                style="width: 14px; height: 14px"
                :currency="
                  CURRENCIES.find((c) => c.mint === props.row.currency)
                "
              />
            </div>
          </q-td>
        </q-tr>
      </template>
    </q-table>
  </div>
</template>

<style lang="sass">
.my-sticky-dynamic
  /* height or max-height is important */
  height: 92vh

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
