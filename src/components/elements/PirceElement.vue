<script setup lang="ts">
import { defineProps } from 'vue';
import CurrencyIcon from 'components/elements/CurrencyIcon.vue';
import { CURRENCIES } from 'stores/const';

const props = defineProps(['label', 'value']);
</script>

<template>
  <div class="row q-gutter-x-sm q-pa-xs bordered items-center">
    <div style="width: 100px" class="col text-subtitle2 text-right">
      {{ value ?? '-' }}
    </div>
    <q-separator vertical />
    <CurrencyIcon
      width="20px"
      height="20px"
      :currency="CURRENCIES.find((c) => c.symbol == label)"
    />
  </div>
</template>

<style scoped lang="sass">
.bordered
  border-width: 1px
  border-color: $grey-6
  border-style: solid
  border-radius: 10px
</style>
