<script setup lang="ts">
import { defineProps, ref } from 'vue';
import { Rarity } from 'stores/I_StarAtlasNFT';

const props = defineProps(['rarity']);

const text = ref(props.rarity.slice(0, 1)[0]);
</script>

<template>
  <q-badge
    v-if="rarity == 'uncommon'"
    floating
    color="red"
    class="text-uppercase"
    >{{ text }}</q-badge
  >
  <q-badge
    v-else-if="rarity == 'common'"
    floating
    color="grey"
    class="text-uppercase"
    >{{ text }}</q-badge
  >
  <q-badge
    v-else-if="rarity == 'rare'"
    floating
    color="blue"
    class="text-uppercase"
    >{{ text }}</q-badge
  >
  <q-badge
    v-else-if="rarity == 'anomaly'"
    floating
    color="teal"
    class="text-uppercase"
    >{{ text }}</q-badge
  >

  <q-badge
    v-else-if="rarity == 'epic'"
    floating
    color="green"
    class="text-uppercase"
    >{{ text }}</q-badge
  >
  <q-badge
    v-else-if="rarity == 'legendary'"
    floating
    color="orange"
    class="text-uppercase"
    >{{ text }}</q-badge
  >
</template>

<style scoped></style>
