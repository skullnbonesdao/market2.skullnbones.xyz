<script setup lang="ts">
import TVChartContainer from 'components/TradingView/TVChartContainer.vue';
import MarketHeader from 'components/market/MarketHeader.vue';
import MarketOrders from 'components/market/MarketOrders.vue';
import MarketInput from 'components/market/MarketInput.vue';
import { useGlobalUserStore } from '../stores/globalUserStore';
import { Dark, dom } from 'quasar';
import MarketOpenOrderTable from 'components/market/MarketOpenOrderTable.vue';
import MarketInputGrid from 'components/market/MarketInputGrid.vue';
import { useGlobalStore } from 'stores/globalStore';
import { useElementSize } from '@vueuse/core';
import { computed, onMounted, ref, watch } from 'vue';
import { onBeforeRouteUpdate, useRoute } from 'vue-router';
import { useGlobalStaratlasAPIStore } from 'stores/gloablStaratlasAPIStore';
import { I_MarketAsset } from 'stores/I_StarAtlasNFT';
import MarketInfo from 'components/market/MarketInfo.vue';
import { useGlobalFactoryStore } from 'stores/globalFactoryStore';

// const { height, width } = dom;

const market_orders_height = computed(() => {
  if (useGlobalStore().settings.enable_grid_orders) {
    return 'calc(100vh - 70vh)';
  }
  return 'calc(100vh - 46vh)';
});

const temp_symbol = computed(() => {
  return useGlobalStaratlasAPIStore().nfts.find(
    (n) =>
      n.symbol.toString() == useRoute().params.symbol.toString().toUpperCase()
  )!.symbol;
});

onBeforeRouteUpdate(() => {
  useGlobalUserStore().selected_symbol = useGlobalStaratlasAPIStore().nfts.find(
    (n) =>
      n.symbol.toString() == useRoute().params.symbol.toString().toUpperCase()
  )!.symbol;
});
</script>

<template>
  <q-page class="bg-primary" v-if="useGlobalStore().is_done">
    <MarketHeader />
    <div class="row q-gutter-x-xs q-pa-xs">
      <div class="col fit q-gutter-y-xs">
        <TVChartContainer
          v-if="
            useGlobalUserStore().selected_symbol &&
            useGlobalStore().settings.enable_tv_chart
          "
          style="height: calc(100vh - 20vh - 6vh)"
        />

        <q-scroll-area style="height: calc(100vh - 86vh)">
          <MarketOpenOrderTable />
        </q-scroll-area>
      </div>
      <div class="col-3 q-gutter-y-xs">
        <!--        <MarketInfo />-->
        <MarketInput />
        <MarketInputGrid v-if="useGlobalStore().settings.enable_grid_orders" />
        <MarketOrders :container_height="market_orders_height" class="" />
      </div>
    </div>
  </q-page>

  <q-page class="q-gutter-y-sm row items-center" v-else>
    <q-spinner-cube class="full-width q-ma-md" size="xl" color="secondary" />
  </q-page>
</template>

<style scoped lang="scss"></style>
