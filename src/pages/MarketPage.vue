<script setup lang="ts">
import TVChartContainer from 'components/TradingView/TVChartContainer.vue';
import MarketHeader from 'components/market/MarketHeader.vue';
import MarketOrders from 'components/market/MarketOrders.vue';
import MarketInput from 'components/market/MarketInput.vue';
import { useGlobalUserStore } from '../stores/globalUserStore';
import { Dark } from 'quasar';
import MarketOpenOrderTable from 'components/market/MarketOpenOrderTable.vue';
import MarketInputGrid from 'components/market/MarketInputGrid.vue';
import { useGlobalStore } from 'stores/globalStore';

function myTweak(offset: any) {
  // "offset" is a Number (pixels) that refers to the total
  // height of header + footer that occupies on screen,
  // based on the QLayout "view" prop configuration

  // this is actually what the default style-fn does in Quasar
  return { minHeight: offset ? `calc(100vh - ${offset}px)` : '100vh' };
}
</script>

<template>
  <q-page :style="myTweak" class="q-gutter-y-sm bg-image-dark">
    <MarketHeader />
    <div class="row q-ma-sm">
      <div class="col q-gutter-y-sm">
        <TVChartContainer
          v-if="useGlobalUserStore().selected_nft.symbol"
          class="col"
          :symbol="useGlobalUserStore().selected_nft.symbol"
        />
        <MarketOpenOrderTable />
      </div>

      <div class="col-3 q-ml-sm q-gutter-y-sm">
        <MarketInput />
        <MarketInputGrid v-if="useGlobalStore().enable_grid_orders" />
        <MarketOrders class="col" />
      </div>
    </div>
  </q-page>
</template>

<style scoped lang="scss"></style>
