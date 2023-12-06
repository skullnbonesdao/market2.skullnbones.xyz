<script setup lang="ts">
import TVChartContainer from 'components/TradingView/TVChartContainer.vue';
import MarketHeader from 'components/market/MarketHeader.vue';
import MarketOrders from 'components/market/MarketOrders.vue';
import MarketInput from 'components/market/MarketInput.vue';
import { useGlobalUserStore } from 'stores/globalUserStore';
import MarketOpenOrderTable from 'components/market/MarketOpenOrderTable.vue';
import MarketInputGrid from 'components/market/MarketInputGrid.vue';
import { useGlobalStore } from 'stores/globalStore';
import { computed } from 'vue';

const market_orders_height = computed(() => {
  if (useGlobalStore().settings.enable_grid_orders) {
    return 'calc(100vh - 70vh)';
  }
  return 'calc(100vh - 46vh)';
});
</script>

<template>
  <q-page class="bg-image-dark" v-if="useGlobalStore().is_done">
    <MarketHeader class="q-mb-sm" />
    <div class="row q-gutter-x-xs q-pa-xs">
      <div class="col fit q-gutter-y-xs">
        <TVChartContainer
          v-if="
            useGlobalUserStore().selected_symbol &&
            useGlobalStore().settings.enable_tv_chart
          "
          style="height: calc(100vh - 20vh - 6vh)"
        />

        <q-scroll-area style="height: calc(100vh - 88vh)">
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
