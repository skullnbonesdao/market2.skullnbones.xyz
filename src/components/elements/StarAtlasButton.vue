<script setup lang="ts">
const props = defineProps(['mint']);
</script>

<template>
  <q-btn
    square
    color="primary"
    target="_blank"
    :href="'https://play.staratlas.com/market/' + mint"
  >
    <q-avatar size="xs">
      <q-img src="currencies/ATLAS.webp" />
    </q-avatar>

    <q-tooltip>view on staratlas.com</q-tooltip>
  </q-btn>
</template>

<style scoped></style>
