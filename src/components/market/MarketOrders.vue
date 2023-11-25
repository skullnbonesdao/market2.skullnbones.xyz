<script setup lang="ts">
import { ref } from 'vue';
import { useGlobalFactoryStore } from '../../stores/globalFactoryStore';
import MarketOrderbookTable from 'components/market/MarketOrderbookTable.vue';
import MarketTradesHistory from 'components/market/MarketTradesHistory.vue';
import { useGlobalUserStore } from 'stores/globalUserStore';

const tab = ref('book');
</script>

<template>
  <q-card flat>
    <div class="q-pt-xs">
      <div class="text-center text-subtitle1">Market</div>
      <q-separator />
    </div>

    <q-tabs v-model="tab">
      <q-tab name="book" label="Book">
        <q-tooltip transition-show="scale" transition-hide="scale">
          Show pair order-book
        </q-tooltip>
      </q-tab>
      <q-separator vertical />
      <!--    <q-tab name="depth" label="Depth" />-->
      <!--    <q-separator vertical />-->
      <q-tab name="history" label="History">
        <q-tooltip transition-show="scale" transition-hide="scale">
          Show pair history
        </q-tooltip>
      </q-tab>
    </q-tabs>
    <q-separator />

    <q-tab-panels v-model="tab" animated class="text-bold">
      <q-tab-panel name="book" class="q-pa-none">
        <q-spinner-cube
          v-if="useGlobalFactoryStore().is_loading"
          class="full-width q-ma-md"
          size="xl"
          color="secondary"
        />
        <MarketOrderbookTable v-else />
      </q-tab-panel>

      <!--    <q-tab-panel name="depth">-->
      <!--      <div class="text-h6">Alarms</div>-->
      <!--      Lorem ipsum dolor sit amet consectetur adipisicing elit.-->
      <!--    </q-tab-panel>-->

      <q-tab-panel name="history" class="q-pa-none">
        <MarketTradesHistory
          :mint_currency="useGlobalUserStore().selected_nft.mint_pair"
          :mint_asset="useGlobalUserStore().selected_nft.mint_asset"
        />
      </q-tab-panel>
    </q-tab-panels>
  </q-card>
</template>

<style scoped></style>
