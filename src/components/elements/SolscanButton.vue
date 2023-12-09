<script setup lang="ts">
const props = defineProps(['mint']);
</script>

<template>
  <q-btn
    square
    color="primary"
    target="_blank"
    :href="'https://solscan.io/token/' + mint"
  >
    <q-avatar size="xs">
      <q-img src="images/solscan.png" />
    </q-avatar>

    <q-tooltip>view on solscan.io</q-tooltip>
  </q-btn>
</template>

<style scoped></style>
