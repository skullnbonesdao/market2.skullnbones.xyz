<script setup lang="ts">
import { Dark, useQuasar } from 'quasar';
import { useGlobalStore } from 'stores/globalStore';
import { onMounted, watch } from 'vue';
import { useGlobalStaratlasAPIStore } from 'stores/gloablStaratlasAPIStore';
import { useWallet } from 'solana-wallets-vue';
import { useGlobalUserStore } from 'stores/globalUserStore';
import { useGlobalFactoryStore } from 'stores/globalFactoryStore';
import 'src/css/scrollbars.css';

useGlobalStore().update_connection();
useQuasar().dark.set(useGlobalStore().is_dark);

useGlobalStaratlasAPIStore()
  .update()
  .then(() => {
    useGlobalUserStore().selected_nft = useGlobalStaratlasAPIStore().nfts.find(
      (n) => n.symbol === 'PX5USDC'
    );
  });

onMounted(async () => {
  await useGlobalFactoryStore().init();
});

watch(
  () => Dark.isActive,
  () => {
    useGlobalStore().is_dark = Dark.isActive;
  }
);
</script>

<template>
  <router-view />
</template>

<style lang="scss"></style>
