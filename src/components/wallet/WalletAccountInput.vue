<script setup lang="ts">
import { ref, watch } from 'vue';
import { useGlobalUserStore } from 'stores/globalUserStore';
import { PublicKey } from '@solana/web3.js';
import { useWallet } from 'solana-wallets-vue';

const input_wallet = ref('');

watch(
  () => useWallet().publicKey.value,
  () => {
    useGlobalUserStore().input_wallet = useWallet().publicKey.value!.toString();
  }
);

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
      @click="
        update_wallet_from_input().then(() => {
          useGlobalUserStore().input_wallet = input_wallet;
        })
      "
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
