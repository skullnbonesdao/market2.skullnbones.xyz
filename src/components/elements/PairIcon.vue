<template>
  <div class="row">
    <AsssetIcon
      :size="size"
      class="relative-position q-ml-md"
      :url="asset_image_url"
    >
    </AsssetIcon>
    <CurrencyIcon
      :size="size"
      class="absolute q-mr-md"
      :currency="props.currency"
    />
  </div>
</template>

<script setup lang="ts">
import CurrencyIcon from 'components/elements/CurrencyIcon.vue';
import { PropType } from 'vue';
import { E_Currency, I_Currency } from 'stores/const';
import AsssetIcon from 'components/elements/AsssetIcon.vue';

const props = defineProps({
  asset_image_url: {
    type: String,
  },
  currency: {
    type: Object as PropType<I_Currency>,
  },
  size: {
    default: 'md',
  },
});
</script>

<style scoped></style>
