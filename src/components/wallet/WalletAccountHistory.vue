<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useGlobalStore } from 'stores/globalStore';
import { useWallet } from 'solana-wallets-vue';

const data = ref();

onMounted(async () => {
  data.value = await useGlobalStore().api_client.trades.search(
    'maker_and_taker',
    useWallet().publicKey.value,
    10
  );
});
</script>

<template>dsdsa</template>

<style scoped></style>
