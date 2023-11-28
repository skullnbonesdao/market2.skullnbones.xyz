<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps(['percentage', 'currency']);
</script>

<template>
  <div class="row">
    <div class="col">{{ percentage == 0 ? '-' : percentage }}</div>
  </div>
</template>

<style scoped></style>
