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

// const { height, width } = dom;

const market_orders_height = computed(() => {
  if (useGlobalStore().settings.enable_grid_orders) {
    return 'calc(100vh - 70vh)';
  }
  return 'calc(100vh - 46vh)';
});
</script>

<template>
  <q-page class="q-gutter-y-sm">
    <MarketHeader />

    <div class="row q-ma-sm">
      <div class="col q-gutter-y-sm">
        <TVChartContainer
          style="height: calc(100vh - 25vh)"
          v-if="useGlobalUserStore().selected_nft.symbol"
          class="col flex"
          :symbol="useGlobalUserStore().selected_nft.symbol"
        />
        <MarketOpenOrderTable class="col" />
      </div>

      <div class="col-3 q-ml-sm q-gutter-y-sm">
        <MarketInput />
        <MarketInputGrid v-if="useGlobalStore().settings.enable_grid_orders" />
        <MarketOrders :container_height="market_orders_height" class="col" />
      </div>
    </div>
  </q-page>
</template>

<style scoped lang="scss"></style>
