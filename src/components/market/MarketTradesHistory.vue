<script setup lang="ts">
import { PropType, ref, watch } from 'vue';
import { APIClient } from 'src/api/gen';
import { API_URL, useGlobalStore } from 'stores/globalStore';
import { onMounted } from 'vue';
import { useGlobalUserStore } from 'stores/globalUserStore';
import { CURRENCIES } from 'stores/const';
import PairIcon from 'components/elements/PairIcon.vue';
import { useQuasar } from 'quasar';
import AsssetIcon from 'components/elements/AsssetIcon.vue';
import CurrencyIcon from 'components/elements/CurrencyIcon.vue';

const pagination = ref({
  rowsPerPage: 0,
});

const props = defineProps(['mint_asset', 'mint_currency', 'height']);

const columns = ref([
  {
    name: 'side',
    label: 'Side',
    align: 'left',
    field: 'side',
    sortable: true,
  },
  {
    name: 'info',
    align: 'left',
    field: 'info',
    sortable: true,
    style: 'width: 50px',
  },
  // {
  //   name: 'fee',
  //   align: 'right',
  //   label: 'Fee',
  //   field: (row: any) => row.fee?.toFixed(2) ?? 0.0,
  //   sortable: true,
  // },
  {
    name: 'size',
    align: 'right',
    label: 'Size',
    field: 'volume',
    sortable: true,
  },
  // {
  //   name: 'volume',
  //   align: 'right',
  //   label: 'Volume',
  //   field: 'volume',
  //   sortable: true,
  // },
  {
    name: 'price',
    align: 'right',
    label: 'Price',
    field: (row: any) => row.price.toFixed(2),
    sortable: true,
  },
]);

const data = ref();

onMounted(async () => {
  data.value = await useGlobalStore().api_client.trades.getTrades(
    props.mint_currency,
    props.mint_asset,
    50
  );
});

watch(
  () => useGlobalUserStore().selected_nft,
  async () => {
    data.value = await useGlobalStore().api_client.trades.getTrades(
      props.mint_currency,
      props.mint_asset,
      50
    );
  }
);
</script>

<template>
  <q-table
    :style="'height : ' + height"
    :rows="data"
    dense
    square
    flat
    virtual-scroll
    :columns="columns"
    :pagination="pagination"
    :rows-per-page-options="[0]"
    :virtual-scroll-sticky-size-start="48"
    row-key="name"
    hide-bottom
  >
    <template v-slot:body="props">
      <q-tr :props="props" :class="props.row.side == 'BUY' ? 'buy' : 'sell'">
        <q-td key="side" :props="props">
          <q-badge :class="props.row.side == 'BUY' ? 'buy' : 'sell'">
            {{ props.row.side }}
          </q-badge>
        </q-td>

        <q-td key="info" :props="props">
          <q-btn
            flat
            size="sm"
            icon="link"
            :href="'https://solscan.io/tx/' + props.row.signature"
            target="_blank"
          ></q-btn>
        </q-td>

        <!--        <q-td key="fee" :props="props">-->
        <!--          {{ props.row.fee ?? 0 }}-->
        <!--        </q-td>-->
        <q-td key="size" :props="props">
          <div class="row items-center q-gutter-x-xs justify-end">
            <div>
              {{ props.row.size ?? 0 }}
            </div>
            <AsssetIcon
              style="width: 10px; height: 10px"
              :url="'sa_files/webp/' + props.row.asset + '.webp'"
            >
            </AsssetIcon>
          </div>
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
              :currency="CURRENCIES.find((c) => c.mint === props.row.currency)"
            />
          </div>
        </q-td>
      </q-tr>
    </template>
  </q-table>
</template>
