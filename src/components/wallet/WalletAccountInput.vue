<script setup lang="ts">
import { ref } from 'vue';
import { useGlobalUserStore } from 'stores/globalUserStore';
import { PublicKey } from '@solana/web3.js';

const input_wallet = ref('');

async function update_wallet_from_input() {
  if (input_wallet.value.length)
    await useGlobalUserStore().update_accounts(
      new PublicKey(input_wallet.value)
    );
  else await useGlobalUserStore().update_accounts();
}
</script>

<template>
  <q-card square flat class="row">
    <q-input
      label="Wallet-Address"
      v-model="input_wallet"
      clearable
      clear-icon="close"
      square
      filled
      class="col"
    >
    </q-input>

    <q-btn
      @click="update_wallet_from_input().then(() => {})"
      color="secondary"
      square
      size="md"
      icon="fa-solid fa-paper-plane"
    >
      <q-tooltip>Query wallet</q-tooltip>
    </q-btn>
  </q-card>
</template>

<style scoped></style>
