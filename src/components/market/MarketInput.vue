<script setup lang="ts">
import { ref } from 'vue';

const tab1 = ref('buy');

const input_price = ref(0);
const input_amount = ref(0);
</script>

<template>
  <q-tabs v-model="tab1" indicator-color="transparent">
    <q-tab :class="tab1 == 'buy' ? 'buy' : ''" name="buy" label="Buy" />
    <q-separator vertical />
    <q-tab :class="tab1 == 'sell' ? 'sell' : ''" name="sell" label="Sell" />
  </q-tabs>

  <q-separator />

  <div class="col q-pa-sm q-gutter-y-xs">
    <div>
      <q-input
        dense
        square
        filled
        label="Price"
        v-model="input_price"
        type="number"
      />
    </div>
    <div>
      <q-input
        dense
        square
        filled
        label="Amount"
        v-model="input_amount"
        type="number"
      />
    </div>
    <q-btn
      square
      class="full-width"
      :class="tab1 == 'buy' ? 'buy' : 'sell'"
      :label="tab1"
    />
  </div>
</template>

<style scoped></style>
