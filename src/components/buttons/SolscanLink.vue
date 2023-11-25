<script setup lang="ts">
import { defineProps } from 'vue';
import { format_address } from '../../stores/format_address';
const props = defineProps(['address']);
</script>

<template>
  <q-btn
    class="full-width"
    square
    color="primary"
    size="sm"
    icon="link"
    target="_blank"
    :href="'https://solscan.io/account/' + address"
  >
    <q-icon />
    <div>{{ format_address(address) }}</div>
  </q-btn>
</template>

<style scoped lang="sass"></style>
