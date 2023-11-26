<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';
import { useGlobalStaratlasAPIStore } from 'stores/gloablStaratlasAPIStore';
import { CURRENCIES, E_Currency } from 'stores/const';
import { Attributes, ItemType } from 'stores/I_StarAtlasNFT';
import { useGlobalFactoryStore } from 'stores/globalFactoryStore';
import PirceElement from 'components/elements/PirceElement.vue';
import RarityBadge from 'components/elements/RarityBadge.vue';
import MarketTrendElement from 'components/elements/MarketTrendElement.vue';

const pagination = ref({
  rowsPerPage: 0,
});

const filter = ref();

const columns = [
  {
    name: 'image',
    required: true,
    label: '',
    field: 'image',
    align: 'left',
    sortable: true,
    style: 'width: 50px',
  },
  {
    name: 'name',
    required: true,
    label: 'Asset',
    field: 'name',
    align: 'left',
    sortable: true,
  },

  {
    name: 'market_atlas',
    required: true,
    label: 'Market [ATLAS]',
    align: 'center',
    sortable: true,
    style: 'width: 100px',
  },

  {
    name: 'market_usdc',
    required: true,
    label: 'Market [USDC]',
    align: 'center',
    sortable: true,
    style: 'width: 100px',
  },

  {
    name: 'buy_orders_atlas',
    required: true,
    label: 'BUY [ATLAS]',
    align: 'right',
    sortable: true,
    style: 'width: 100px',
  },
  {
    name: 'buy_orders_usdc',
    required: true,
    label: 'BUY [USDC]',
    align: 'right',
    sortable: true,
    style: 'width: 100px',
  },
  {
    name: 'spread',
    required: true,
    label: 'Spread',
    align: 'center',
    sortable: true,
    style: 'width: 20px',
  },
  {
    name: 'sell_orders_atlas',
    required: true,
    label: 'Sell [ATLAS]',
    align: 'left',
    sortable: true,
    style: 'width: 100px',
  },
  {
    name: 'sell_orders_usdc',
    required: true,
    label: 'SELL [USDC]',
    align: 'left',
    sortable: true,
    style: 'width: 100px',
  },
];

interface TableData {
  name: string;
  url: string;
  symbol: string;
  rarity: Attributes;
  market: TableMarketPrices;
  orderbok: TableMarketOrders;
}

interface TableMarketPrices {
  atlas: number | undefined;
  usdc: number | undefined;
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

async function prepare_data() {
  data.value = [];

  for (const d of useGlobalStaratlasAPIStore().raw.filter(
    (r) => r.attributes.itemType == itemType_selected.value
  )) {
    console.log();

    data.value.push({
      name: d.name.toString(),
      mint: d.mint.toString(),
      attributes: d.attributes,
      symbol: d.symbol,
      url: 'sa_files/webp/' + d.mint.toString() + '.webp',
      market: {
        atlas:
          // (
          //   await useGlobalStore().api_client.trades.getTrades(
          //     CURRENCIES.find((c) => c.type == E_Currency.ATLAS)?.mint,
          //     d.mint,
          //     1
          //   )
          // )[0]?.price ?? undefined,
          0,
        usdc:
          // (
          //   await useGlobalStore().api_client.trades.getTrades(
          //     CURRENCIES.find((c) => c.type == E_Currency.USDC)?.mint,
          //     d.mint,
          //     1
          //   )
          // )[0]?.price ?? undefined,
          0,
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
  }
}
function calc_spread(buy: number, sell: number) {
  return buy - sell < 0 ? ((buy - sell) / sell).toFixed(2) + '%' : 0;
}
// we generate lots of rows here
</script>

<template>
  <div class="q-pa-md">
    <q-tabs align="justify" v-model="itemType_selected">
      <q-tab
        :name="itemType"
        :label="itemType"
        :key="itemType"
        v-for="itemType in useGlobalStaratlasAPIStore().get_itemTypes"
      />
    </q-tabs>

    <q-table
      flat
      bordered
      title="Treats"
      :rows="data"
      :columns="columns"
      row-key="index"
      :pagination="pagination"
      :rows-per-page-options="[0]"
      :filter="filter"
    >
      <template v-slot:top>
        <q-space />
        <q-input filled dense v-model="filter">
          <template v-slot:after>
            <q-icon size="sm" name="fa-solid fa-magnifying-glass" />
          </template>
        </q-input>
      </template>

      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td key="image" :props="props">
            <q-item-section side class="row">
              <q-avatar rounded size="48px">
                <q-img
                  height="50px"
                  fetchpriority="low"
                  :src="props.row.url"
                ></q-img>
                <RarityBadge :rarity="props.row.attributes.rarity" />
              </q-avatar>
            </q-item-section>
          </q-td>
          <q-td key="name" :props="props">
            <div class="text-h6">{{ props.row.symbol }}</div>
            <div class="text-subtitle2">{{ props.row.name }}</div>
          </q-td>

          <q-td key="market_atlas" :props="props" class="">
            <PirceElement label="ATLAS" :value="props.row.market?.atlas" />
          </q-td>

          <q-td key="market_usdc" :props="props" class="q-gutter-y-sm">
            <PirceElement label="USDC" :value="props.row.market?.usdc" />
          </q-td>

          <q-td key="buy_orders_atlas" :props="props" class="buy">
            <PirceElement
              class=""
              label="ATLAS"
              :value="props.row.orderbok.buy?.sell"
            />
          </q-td>

          <q-td key="buy_orders_usdc" :props="props" class="buy">
            <PirceElement label="USDC" :value="props.row.orderbok.buy?.usdc" />
          </q-td>

          <q-td key="spread" class="market" :props="props">
            <q-btn class="text-caption" color="primary">
              <div class="col">
                <MarketTrendElement
                  :currency="CURRENCIES.find((c) => c.type == E_Currency.ATLAS)"
                  :percentage="
                    calc_spread(
                      props.row.orderbok.buy?.atlas,
                      props.row.orderbok.sell?.atlas
                    )
                  "
                />
                <q-separator />
                <MarketTrendElement
                  :currency="CURRENCIES.find((c) => c.type == E_Currency.USDC)"
                  :percentage="
                    calc_spread(
                      props.row.orderbok.buy?.usdc,
                      props.row.orderbok.sell?.usdc
                    )
                  "
                />
              </div>
            </q-btn>
          </q-td>

          <q-td key="sell_orders_atlas" :props="props" class="sell">
            <PirceElement
              label="ATLAS"
              :value="props.row.orderbok.sell?.atlas"
            />
          </q-td>

          <q-td key="sell_orders_usdc" :props="props" class="sell">
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
