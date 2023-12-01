<script setup lang="ts">
import { ref, watch } from 'vue';
import { RPC_NETWORKS, useGlobalStore } from 'stores/globalStore';
import { Connection } from '@solana/web3.js';

const show_modal = ref(false);
const selected_currency = ref('ATLAS');
const options = ref(['ATLAS', 'POLIS', 'SOL']);

const rpc_name = ref(useGlobalStore().rpc_selected.name);
const rpc_options = ref(RPC_NETWORKS.map((rpc) => rpc.name));

watch(
  () => rpc_name.value,
  () => {
    useGlobalStore().rpc_selected = RPC_NETWORKS.find(
      (rpc) => rpc.name == rpc_name.value
    )!;
    useGlobalStore().connection = new Connection(
      useGlobalStore().rpc_selected.url
    );
  }
);
</script>

<template>
  <q-btn flat square icon="fa-solid fa-sliders" @click="show_modal = true">
  </q-btn>

  <q-dialog v-model="show_modal">
    <q-card flat class="q-pa-sm">
      <q-toolbar>
        <q-avatar>
          <img src="logo.png" />
        </q-avatar>

        <q-toolbar-title
          ><span class="text-weight-bold">RogueMarket</span>
          Settings</q-toolbar-title
        >

        <q-btn flat round dense icon="close" v-close-popup />
      </q-toolbar>

      <q-card-section class="text-subtitle1">
        <q-toggle
          class="full-width"
          label="Enable grid-orders [beta]"
          v-model="useGlobalStore().settings.enable_grid_orders"
        />
        <q-toggle
          class="full-width"
          label="Always show drawer"
          v-model="useGlobalStore().settings.always_show_drawer"
        />
        <q-toggle
          class="full-width"
          label="Load TradingView Chart"
          v-model="useGlobalStore().settings.enable_tv_chart"
        />

        <q-select
          filled
          v-model="rpc_name"
          :options="rpc_options"
          label="RPC"
        />
      </q-card-section>

      <q-card-section> </q-card-section>
    </q-card>
  </q-dialog>
</template>

<style scoped></style>
