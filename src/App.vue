<script setup lang="ts">
import { Dark, useQuasar } from 'quasar';
import { useGlobalStore } from 'stores/globalStore';
import { onMounted, watch } from 'vue';
import { useGlobalStaratlasAPIStore } from 'stores/gloablStaratlasAPIStore';
import { useWallet } from 'solana-wallets-vue';
import { useGlobalUserStore } from 'stores/globalUserStore';
import { useGlobalFactoryStore } from 'stores/globalFactoryStore';
import 'src/css/scrollbars.css';
import 'src/css/fonts.css';
import 'src/css/backgrounds.scss';
import { I_MarketAsset } from 'stores/I_StarAtlasNFT';
useQuasar().dark.set(true);
useGlobalStore();
useGlobalStore().update_connection();
useGlobalUserStore();

onMounted(async () => {
  await useGlobalFactoryStore().init();
  await useGlobalStore().load_token_list();
  await useGlobalStaratlasAPIStore().update();

  useGlobalStore().is_done = true;
});
</script>

<template>
  <router-view />
</template>

<style lang="scss"></style>
