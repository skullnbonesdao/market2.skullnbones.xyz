<script setup lang="ts">
import { Order } from '@staratlas/factory';
import { format_address } from '../../stores/format_address';
import { computed, ref } from 'vue';

const props = defineProps({
  order: {
    type: Order,
  },
});
const price = computed(() => {
  return props.order?.uiPrice;
});

const size = computed(() => {
  return props.order?.orderQtyRemaining;
});

const input_size = ref(size.value);
</script>

<template>
  <div class="q-pa-sm q-gutter-y-xs">
    <div class="text-overline row">
      <div class="text-subtitle2">Fill Order:</div>
      <q-space />
      <div class="text-orange">{{ format_address(order.owner) }}</div>
    </div>
    <q-input dense square filled label="Price" disable v-model="price" />
    <q-input
      dense
      square
      filled
      v-model="input_size"
      type="number"
      :label="`Amount  [available: ${size}]`"
      :rules="[(val) => val <= size || `Max remaining are: ${size}`]"
      hide-hint
    />
    <q-btn
      square
      class="full-width"
      :class="order.orderType == 'buy' ? 'buy' : 'sell'"
      label="Fill"
    />
  </div>
  <q-separator />
</template>

<style scoped></style>
