<script setup lang="ts">
import * as api from 'src/api/gen/APIClient';
import { APIClient } from 'src/api/gen/APIClient';
import { onBeforeUnmount, onMounted, onUnmounted, ref } from 'vue';
import ExplorerTable from 'components/explorer/ExplorerTable.vue';
import { API_URL, useGlobalStore } from 'stores/globalStore';
import { useGlobalFactoryStore } from 'stores/globalFactoryStore';

const data = ref();
const timeout = 60000;
const reload_percentage = ref(0);
const loop = ref();
const input_select = ref('Signature');
const input_search = ref();

const options = ref(['Signature', 'Asset', 'Currency', 'Player']);

const load_trades = async () => {
  await useGlobalStore()
    .api_client.trades.getTrades(null, null, 50)
    .then((d) => (data.value = d));
};

onMounted(async () => {
  await load_trades();

  loop.value = setInterval(update_timer, 1000);
});

onBeforeUnmount(() => {
  clearInterval(loop.value);
  loop.value = null;
});

async function update_timer() {
  if (reload_percentage.value >= 100) {
    await load_trades().then(() => {
      reload_percentage.value = 0;
    });
  } else {
    reload_percentage.value += (1000 / timeout) * 100;
  }
}

async function execute_search() {
  data.value = null;
  switch (input_select.value) {
    case 'Signature':
      {
        await useGlobalStore()
          .api_client.trades.search('signature', input_search.value, 50)
          .then((d) => (data.value = d));
      }
      break;
    case 'Asset':
      {
        await useGlobalStore()
          .api_client.trades.search('asset', input_search.value, 50)
          .then((d) => (data.value = d));
      }
      break;
    case 'Currency':
      {
        await useGlobalStore()
          .api_client.trades.search('currency', input_search.value, 50)
          .then((d) => (data.value = d));
      }
      break;

    case 'Player':
      {
        await useGlobalStore()
          .api_client.trades.search('maker_and_taker', input_search.value, 50)
          .then((d) => (data.value = d));
      }
      break;
  }
}

// Set the interval to 200 milliseconds
// var interval = setInterval(update_timer, 1000);
</script>

<template>
  <q-page class="row q-pa-sm justify-center">
    <div class="">
      <q-card square flat class="row">
        <q-select
          class="col-2"
          square
          filled
          v-model="input_select"
          :options="options"
          label="Search for:"
        />

        <q-input v-model="input_search" square filled class="col"> </q-input>

        <q-btn
          color="secondary"
          square
          size="md"
          icon="fa-solid fa-paper-plane"
          @click="execute_search()"
        >
          <q-tooltip>Send request</q-tooltip>
        </q-btn>

        <q-btn size="md" flat square>
          <q-circular-progress
            :value="reload_percentage"
            size="sm"
            color="white"
          />
          <q-tooltip>Reload every {{ timeout / 1000 }}s</q-tooltip>
        </q-btn>
      </q-card>
      <q-spinner-cube
        v-if="!data"
        class="full-width q-ma-md"
        size="xl"
        color="secondary"
      />

      <ExplorerTable class="q-mt-sm" v-else :data="data" />
    </div>
  </q-page>
</template>

<style scoped></style>
