<script setup lang="ts">
import TVChartContainer from 'components/TradingView/TVChartContainer.vue';
import MarketHeader from 'components/market/MarketHeader.vue';
import MarketOrders from 'components/market/MarketOrders.vue';
import MarketInput from 'components/market/MarketInput.vue';
import { useGlobalUserStore } from '../stores/globalUserStore';
import { Dark } from 'quasar';
</script>

<template>
  <q-page class="q-ma-sm q-gutter-y-sm">
    <MarketHeader />
    <div class="row">
      <TVChartContainer
        v-if="useGlobalUserStore().selected_nft.symbol"
        class="col"
        :symbol="useGlobalUserStore().selected_nft.symbol"
      />

      <div class="col-3 q-ml-sm q-gutter-y-sm">
        <MarketInput />

        <MarketOrders class="col" />
      </div>
    </div>
  </q-page>
</template>

<style scoped></style>
