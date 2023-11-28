<script setup lang="ts">
import { ref } from 'vue';
import { useGlobalStore } from 'stores/globalStore';

const show_modal = ref(false);
const selected_currency = ref('ATLAS');
const options = ref(['ATLAS', 'POLIS', 'SOL']);
</script>

<template>
  <q-btn flat square icon="fa-solid fa-sliders" @click="show_modal = true">
  </q-btn>

  <q-dialog v-model="show_modal">
    <q-card class="q-pa-sm">
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
          label="Enable grid-rders"
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
      </q-card-section>

      <q-card-section> </q-card-section>
    </q-card>
  </q-dialog>
</template>

<style scoped></style>
