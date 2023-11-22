<script setup lang="ts">
import { PropType, ref } from 'vue';
import { Trade } from 'src/api/gen/models/Trade';
import PairIcon from 'components/elements/PairIcon.vue';
import { CURRENCIES } from 'stores/const';
import { format_address } from '../../stores/format_address';
import { useGlobalFactoryStore } from 'stores/globalFactoryStore';
import PirceElement from 'components/elements/PirceElement.vue';
import AssetElement from 'components/elements/AssetElement.vue';

const pagination = ref({
  rowsPerPage: 0,
});

const props = defineProps({
  data: {
    type: [] as PropType<Trade[]>,
  },
});

const columns = ref([
  {
    name: 'info',
    label: 'Info',
    align: 'left',
    sortable: true,
  },
  {
    name: 'accounts',
    label: 'Accounts',
    align: 'left',
    field: 'accounts',
    sortable: true,
  },
  {
    name: 'side',
    label: 'Side',
    align: 'left',
    field: 'side',
    sortable: true,
    style: 'width: 50px',
  },
  {
    name: 'fee',
    align: 'right',
    label: 'Fee',
    style: 'width: 100px',
    field: (row: any) => row.fee?.toFixed(2) ?? 0.0,
    sortable: true,
  },
  {
    name: 'size',
    align: 'center',
    label: 'Size',
    field: 'size',
    sortable: true,
  },
  {
    name: 'volume',
    align: 'center',
    label: 'Volume',

    field: 'volume',
    sortable: true,
  },
  {
    name: 'price',
    align: 'center',
    label: 'Price',
    field: (row: any) => row.price.toFixed(2),
    sortable: true,
  },
]);
</script>

<template>
  <q-table
    flat
    :rows="props.data"
    :columns="columns"
    :pagination="pagination"
    :rows-per-page-options="[0]"
    row-key="name"
  >
    <template v-slot:body="props">
      <q-tr :props="props" class="">
        <q-td key="info" :props="props">
          <div class="row q-gutter-sm items-center">
            <PairIcon
              :currency="CURRENCIES.find((c) => c.mint === props.row.currency)"
              :asset_image_url="'sa_files/webp/' + props.row.asset + '.webp'"
            />
            <div class="col">
              <div>{{ props.row.timestamp }}</div>
              <div>{{ format_address(props.row.signature, 10) }}</div>
            </div>
            <q-btn
              size="sm"
              icon="link"
              :href="'https://solscan.io/tx/' + props.row.signature"
              target="_blank"
            ></q-btn>
          </div>
        </q-td>

        <q-td key="accounts" :props="props">
          <div class="row q-gutter-x-sm">
            <div>
              <div>Buyer:</div>
              <div>Seller:</div>
            </div>
            <div>
              <div>{{ props.row.buyer ?? 0 }}</div>
              <div>{{ props.row.seller ?? 0 }}</div>
            </div>
          </div>
        </q-td>

        <q-td key="side" :props="props">
          <q-badge :class="props.row.side == 'BUY' ? 'buy' : 'sell'">
            {{ props.row.side }}
          </q-badge>
        </q-td>

        <q-td class="text-overline" key="fee" :props="props"> </q-td>
        <q-td class="text-overline" key="size" :props="props">
          <AssetElement :mint="props.row.asset" :value="props.row.size" />
        </q-td>

        <q-td class="text-overline" key="volume" :props="props">
          <PirceElement
            :label="CURRENCIES.find((c) => c.mint == props.row.currency)?.name"
            :value="props.row.volume"
          />
        </q-td>
        <q-td class="text-overline" key="price" :props="props">
          <PirceElement
            :label="CURRENCIES.find((c) => c.mint == props.row.currency)?.name"
            :value="props.row.price"
          />
        </q-td>
      </q-tr>
    </template>
  </q-table>
</template>

<style scoped></style>
