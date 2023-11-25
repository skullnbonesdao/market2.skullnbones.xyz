<script setup lang="ts">
import { computed } from 'vue';
import { ref } from 'vue';
import { OrderSide } from '@staratlas/factory';

const pagination = ref({
  rowsPerPage: 0,
});

const props = defineProps(['orders']);

const columns = [
  {
    name: 'side',
    required: true,
    label: 'Side',
    align: 'left',
    field: (row) => row.side,
    sortable: true,
  },
  {
    name: 'size',
    required: true,
    label: 'Size',
    align: 'right',
    field: (row) => row.size,
    sortable: true,
  },
  {
    name: 'price',
    required: true,
    label: 'Price',
    align: 'right',
    field: (row) => row.price,
    sortable: true,
  },
];
</script>

<template>
  <q-separator />

  <q-table
    flat
    :pagination="pagination"
    :rows-per-page-options="[0]"
    title="Orders"
    :rows="props.orders"
    :columns="columns"
    row-key="name"
    hide-bottom
  />
</template>
