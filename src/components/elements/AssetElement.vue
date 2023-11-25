<script setup lang="ts">
import { defineProps } from 'vue';
import CurrencyIcon from 'components/elements/CurrencyIcon.vue';
import { CURRENCIES } from 'stores/const';
import AsssetIcon from 'components/elements/AsssetIcon.vue';

const props = defineProps(['mint', 'value']);
</script>

<template>
  <q-btn color="primary" dense class="row items-center">
    <div style="width: 100px" class="col text-subtitle2 text-right">
      {{ value ?? '-' }}
    </div>
    <q-separator vertical class="q-ma-xs" />
    <AsssetIcon
      width="20px"
      height="20px"
      :url="'sa_files/webp/' + props.mint + '.webp'"
    />
  </q-btn>
</template>

<style scoped lang="sass">
.bordered
  border-width: 1px
  border-color: $grey-6
  border-style: solid
  border-radius: 10px
</style>
