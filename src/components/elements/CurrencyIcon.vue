<script setup lang="ts">
import { PropType } from 'vue';
import { E_Currency, I_Currency } from 'stores/const';

const props = defineProps({
  currency: {
    type: Object as PropType<I_Currency>,
  },
  size: {
    default: 'xs',
  },
});
</script>

<template>
  <q-avatar :size="size">
    <img
      class="border-1"
      :style="
        props.currency?.type != E_Currency.ATLAS
          ? 'border-color: transparent'
          : ' '
      "
      :src="props.currency?.img_path"
      alt="asset_image"
    />
  </q-avatar>
</template>

<style scoped>
img {
  object-fit: fill;
  max-width: 100%;
  max-height: 100%;
  width: 100%;
  height: 100%;
}
</style>
