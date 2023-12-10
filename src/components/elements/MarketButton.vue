<script setup lang="ts">
import { useGlobalStore } from 'stores/globalStore';

const props = defineProps(['symbol', 'pair']);
</script>

<template>
  <q-btn square color="primary" :to="'/market/' + props.symbol">
    <q-avatar size="xs">
      <q-img :src="'currencies/' + props.pair.toUpperCase() + '.webp'" />
    </q-avatar>

    <q-tooltip>view in market</q-tooltip>
  </q-btn>
</template>

<style scoped></style>
