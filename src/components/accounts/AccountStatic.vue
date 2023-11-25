<script setup lang="ts">
import { ref, watch } from 'vue';
import * as factory from '@staratlas/factory';
import { PublicKey } from '@solana/web3.js';
import { useWallet } from 'solana-wallets-vue';
import { biAward } from '@quasar/extras/bootstrap-icons';

const props = defineProps(['count', 'function_name', 'data']);
</script>

<template>
  <q-card class="row q-pa-md">
    <div class="col text-h6">{{ function_name }}:</div>
    <div class="text-overline">{{ data }}</div>
  </q-card>
</template>

<style scoped lang="sass"></style>
