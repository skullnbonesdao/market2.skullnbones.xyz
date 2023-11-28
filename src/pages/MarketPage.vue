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
import { computed, ref } from 'vue';
import { onBeforeRouteUpdate } from 'vue-router';
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
onBeforeRouteUpdate((to, from) => {
  useGlobalUserStore().selected_nft = useGlobalStaratlasAPIStore().nfts.find(
    (n) => n.symbol.toString() == to.params.symbol.toString()
  ) as I_MarketAsset;
});
</script>

<template>
  <q-page class="q-gutter-y-sm" v-if="useGlobalStore().is_done">
    <MarketHeader />
    <div class="row q-ma-sm items-stretch">
      <div class="col q-gutter-y-sm">
        <TVChartContainer
          v-if="useGlobalUserStore().selected_nft"
          style="height: calc(100vh - 25vh)"
        />
        <MarketOpenOrderTable />
      </div>

      <div class="col-3 q-ml-sm q-gutter-y-sm">
        <!--        <MarketInfo />-->
        <MarketInput />
        <MarketInputGrid v-if="useGlobalStore().settings.enable_grid_orders" />
        <MarketOrders :container_height="market_orders_height" class="col" />
      </div>
    </div>
  </q-page>

  <q-page class="q-gutter-y-sm row items-center" v-else>
    <q-spinner-cube class="full-width q-ma-md" size="xl" color="secondary" />
  </q-page>
</template>

<style scoped lang="scss"></style>
