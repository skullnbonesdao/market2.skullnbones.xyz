<script setup lang="ts">
import { ref } from 'vue';
import { useGlobalFactoryStore } from '../../stores/globalFactoryStore';
import MarketOrderbookTable from 'components/market/MarketOrderbookTable.vue';
import MarketTradesHistory from 'components/market/MarketTradesHistory.vue';
import { useGlobalUserStore } from 'stores/globalUserStore';

const tab = ref('book');
</script>

<template>
  <q-tabs v-model="tab">
    <q-tab name="book" label="Book" />
    <q-separator vertical />
    <!--    <q-tab name="depth" label="Depth" />-->
    <!--    <q-separator vertical />-->
    <q-tab name="history" label="History" />
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
</template>

<style scoped></style>
