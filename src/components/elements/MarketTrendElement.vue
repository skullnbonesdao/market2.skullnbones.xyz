<script setup lang="ts">
import { computed } from 'vue';
import { CURRENCIES } from '../../stores/const';

const props = defineProps(['percentage', 'currency']);
</script>

<template>
  <div class="row">
    <q-tooltip transition-show="flip-right" transition-hide="flip-left">
      {{ currency.name }}
    </q-tooltip>
    <div class="col">{{ percentage == 0 ? '-' : percentage }}</div>
  </div>
</template>

<style scoped></style>
