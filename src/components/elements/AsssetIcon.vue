<script setup lang="ts">
import { PropType } from 'vue';
import { E_Currency, I_Currency } from 'stores/const';
import { I_StarAtlasNFT } from 'stores/I_StarAtlasNFT';

const props = defineProps({
  url: {
    type: String,
  },
  size: {
    default: 'xs',
  },
});
</script>

<template>
  <q-avatar :size="size">
    <img :src="props.url" alt="asset_image" />
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
