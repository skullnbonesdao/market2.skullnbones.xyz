<script setup lang="ts">
import TVChartContainer from 'components/TradingView/TVChartContainer.vue';
import MarketHeader from 'components/market/MarketHeader.vue';
import MarketOrders from 'components/market/MarketOrders.vue';
import MarketInput from 'components/market/MarketInput.vue';
import { useGlobalUserStore } from 'stores/globalUserStore';
import MarketOpenOrderTable from 'components/market/MarketOpenOrderTable.vue';
import MarketInputGrid from 'components/market/MarketInputGrid.vue';
import { useGlobalStore } from 'stores/globalStore';
import { computed, onMounted, ref, watch } from 'vue';
import MarketInfo from 'components/market/MarketInfo.vue';
import { useRoute, useRouter } from 'vue-router';

onMounted(() => {
  if(useRoute().params.symbol)
    useGlobalUserStore().selected_symbol = useRoute().params.symbol as string
  else
    useGlobalUserStore().selected_symbol = "PX4USDC"
  enable_chart.value = true;
});




const enable_chart = ref(false);
</script>

<template>
  <q-page class=" full-height" v-if="useGlobalStore().is_done">
    <div class="row q-gutter-xs full-height">
      <div class="col  q-gutter-y-xs">
        <!-- Chart Container takes the rest of the space after the table -->
        <TVChartContainer
          v-if="enable_chart"
          style="max-height: 75vh;"

        />

        <!-- Scrollable area for the MarketOpenOrderTable -->
        <q-scroll-area class="full-height bg-primary" style="max-height: 19vh;">
          <MarketOpenOrderTable />
        </q-scroll-area>
      </div>

      <!-- Market Info Card -->
      <q-card flat class="col-3 q-gutter-y-xs">
        <MarketHeader />

        <MarketInfo />
        <q-separator />
        <MarketInput />
        <q-separator v-if="useGlobalStore().settings.enable_grid_orders" />
        <MarketInputGrid v-if="useGlobalStore().settings.enable_grid_orders" />
        <q-separator />
        <MarketOrders :container_height="'30vh'" />
      </q-card>
    </div>
  </q-page>

  <q-page class="q-gutter-y-sm row items-center" v-else>
    <q-spinner-cube class="full-width q-ma-md" size="xl" color="secondary" />
  </q-page>
</template>

<style scoped lang="scss"></style>
