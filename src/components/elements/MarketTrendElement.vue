<script setup lang="ts">
const props = defineProps(['percentage', 'currency']);
</script>

<template>
  <div class="row">
    <div class="col">{{ percentage }}</div>
  </div>
</template>

<style scoped></style>
