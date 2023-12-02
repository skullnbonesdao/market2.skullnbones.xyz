<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';
import { useGlobalStaratlasAPIStore } from 'stores/gloablStaratlasAPIStore';
import { CURRENCIES, E_Currency } from 'stores/const';
import { Attributes, ItemType } from 'stores/I_StarAtlasNFT';
import { useGlobalFactoryStore } from 'stores/globalFactoryStore';
import PirceElement from 'components/elements/PirceElement.vue';
import RarityBadge from 'components/elements/RarityBadge.vue';
import MarketTrendElement from 'components/elements/MarketTrendElement.vue';
import { useGlobalStore } from 'stores/globalStore';
import { useGlobalUserStore } from 'stores/globalUserStore';

const pagination = ref({
  rowsPerPage: 0,
});

const filter = ref();
const is_loading = ref(true);
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
    field: (row: never) => row.market.atlas,
  },

  {
    name: 'market_usdc',
    required: true,
    label: 'Market [USDC]',
    align: 'center',
    sortable: true,
    style: 'width: 100px',
    field: (row: never) => row.market.usdc,
  },

  {
    name: 'buy_orders_atlas',
    required: true,
    label: 'BUY [ATLAS]',
    align: 'right',
    sortable: true,
    style: 'width: 100px',
    field: (row: never) => row.orderbok.buy.atlas,
  },
  {
    name: 'buy_orders_usdc',
    required: true,
    label: 'BUY [USDC]',
    align: 'right',
    sortable: true,
    style: 'width: 100px',
    field: (row: never) => row.orderbok.buy.usdc,
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
    field: (row: never) => row.orderbok.sell.atlas,
  },
  {
    name: 'sell_orders_usdc',
    required: true,
    label: 'SELL [USDC]',
    align: 'left',
    sortable: true,
    style: 'width: 100px',
    field: (row: never) => row.orderbok.sell.usdc,
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
  await prepare_data();
});

watch(
  () => itemType_selected.value,
  async () => {
    await prepare_data();
  }
);

async function prepare_data() {
  is_loading.value = true;
  data.value = [];

  const prices_usdc = await useGlobalStore().api_client.trades.getPrices(
    CURRENCIES.find((c) => c.type == E_Currency.USDC)?.mint ?? 'none'
  );
  const prices_atlas = await useGlobalStore().api_client.trades.getPrices(
    CURRENCIES.find((c) => c.type == E_Currency.ATLAS)?.mint ?? 'none'
  );

  for (const d of useGlobalStaratlasAPIStore().raw.filter(
    (r) => r.attributes.itemType == itemType_selected.value
  )) {
    data.value.push({
      name: d.name.toString(),
      mint: d.mint.toString(),
      attributes: d.attributes,
      symbol: d.symbol,
      url: 'sa_files/webp/' + d.mint.toString() + '.webp',
      market: {
        atlas:
          prices_atlas.find((p) => p.asset == d.mint.toString())?.price ??
          undefined,
        usdc:
          prices_usdc.find((p) => p.asset == d.mint.toString())?.price ??
          undefined,
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

    data.value.sort(
      (a, b) => (a.orderbok.buy.usdc ?? 0) - (b.orderbok.buy.usdc ?? 0)
    );
  }
  is_loading.value = false;
}
function calc_spread(buy: number, sell: number) {
  return buy - sell < 0 ? ((buy - sell) / sell).toFixed(2) + '%' : 0;
}
// we generate lots of rows here
</script>

<template>
  <q-page class="row q-pa-sm justify-center">
    <div>
      <q-tabs align="justify" v-model="itemType_selected">
        <q-tab
          :name="itemType"
          :label="itemType"
          :key="itemType"
          v-for="itemType in useGlobalStaratlasAPIStore().get_itemTypes"
        />
      </q-tabs>

      <div v-if="is_loading" class="row">
        <q-space />
        <q-spinner-cube class="row" color="primary" size="3rem" />
        <q-space />
      </div>

      <q-table
        v-else
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

            <q-td key="market_usdc" :props="props" class="">
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
              <PirceElement
                label="USDC"
                :value="props.row.orderbok.buy?.usdc"
              />
            </q-td>

            <q-td key="spread" class="market" :props="props">
              <q-btn class="text-caption" color="primary">
                <div class="col">
                  <MarketTrendElement
                    :currency="
                      CURRENCIES.find((c) => c.type == E_Currency.ATLAS)
                    "
                    :percentage="
                      calc_spread(
                        props.row.orderbok.buy?.atlas,
                        props.row.orderbok.sell?.atlas
                      )
                    "
                  />
                  <q-separator />
                  <MarketTrendElement
                    :currency="
                      CURRENCIES.find((c) => c.type == E_Currency.USDC)
                    "
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
  </q-page>
</template>
