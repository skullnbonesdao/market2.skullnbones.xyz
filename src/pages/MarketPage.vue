<script setup lang="ts">
import TVChartContainer from 'components/TradingView/TVChartContainer.vue';
import MarketHeader from 'components/market/MarketHeader.vue';
import MarketOrders from 'components/market/MarketOrders.vue';
import MarketInput from 'components/market/MarketInput.vue';
import { useGlobalUserStore } from 'stores/globalUserStore';
import MarketOpenOrderTable from 'components/market/MarketOpenOrderTable.vue';
import MarketInputGrid from 'components/market/MarketInputGrid.vue';
import { useGlobalStore } from 'stores/globalStore';
import { computed, onMounted } from 'vue';
import MarketInfo from 'components/market/MarketInfo.vue';
import { useRoute } from 'vue-router';

onMounted(() => {
  useGlobalUserStore().selected_symbol =
    (useRoute().params.symbol as string) ?? 'PX4USDC';
});

const market_orders_height = computed(() => {
  if (useGlobalStore().settings.enable_grid_orders) {
    return 'calc(100vh - 70vh)';
  }
  return 'calc(100vh - 74vh)';
});
</script>

<template>
  <q-page class="q-pa-xs" v-if="useGlobalStore().is_done">
    <div class="row q-gutter-x-xs">
      <div class="col fit q-gutter-y-xs">
        <TVChartContainer
          v-if="
            useGlobalUserStore().selected_symbol &&
            useGlobalStore().settings.enable_tv_chart
          "
          style="height: calc(100vh - 20vh - 3vh)"
        />

        <q-scroll-area style="height: calc(100vh - 80vh - 3vh)">
          <MarketOpenOrderTable />
        </q-scroll-area>
      </div>
      <q-card flat class="col-3 q-gutter-y-xs">
        <MarketHeader />

        <MarketInfo />
        <q-separator />
        <MarketInput />
        <q-separator v-if="useGlobalStore().settings.enable_grid_orders" />
        <MarketInputGrid v-if="useGlobalStore().settings.enable_grid_orders" />
        <q-separator />
        <MarketOrders :container_height="market_orders_height" class="" />
      </q-card>
    </div>
  </q-page>

  <q-page class="q-gutter-y-sm row items-center" v-else>
    <q-spinner-cube class="full-width q-ma-md" size="xl" color="secondary" />
  </q-page>
</template>

<style scoped lang="scss"></style>
