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
import { useRoute } from 'vue-router';
import { useRPCStore } from 'stores/rpcStore';
useQuasar().dark.set(true);
useGlobalStore();
useRPCStore().update_connection();
useGlobalUserStore();

const route = useRoute();

onMounted(async () => {
  await useGlobalFactoryStore().init();
  await useGlobalStore().load_token_list();
  await useGlobalStaratlasAPIStore().update();
  useGlobalStore().is_done = true;

  useGlobalUserStore().selected_symbol =
    useGlobalStaratlasAPIStore().nfts.find(
      (n) =>
        n.symbol.toString() == route.params?.symbol?.toString().toUpperCase()
    )?.symbol ?? useGlobalUserStore().selected_symbol;
});
</script>

<template>
  <router-view />
</template>

<style lang="scss"></style>
