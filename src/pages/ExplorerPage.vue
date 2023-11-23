<script setup lang="ts">
import * as api from 'src/api/gen/APIClient';
import { APIClient } from 'src/api/gen/APIClient';
import { onMounted, ref } from 'vue';
import ExplorerTable from 'components/explorer/ExplorerTable.vue';
import { API_URL, useGlobalStore } from 'stores/globalStore';
import { useGlobalFactoryStore } from 'stores/globalFactoryStore';

const data = ref();
const timeout = 60000;
const reload_percentage = ref(100);

async function load_trades() {
  data.value = await useGlobalStore().api_client.trades.getTrades(
    null,
    null,
    100
  );
}

// onMounted(async () => {
//   await load_trades();
// });
//
function update_timer() {
  if (reload_percentage.value >= 100) {
    load_trades().then(() => {
      reload_percentage.value = 0;
    });
  } else {
    reload_percentage.value += (1000 / timeout) * 100;
  }
}

// Set the interval to 200 milliseconds
var interval = setInterval(update_timer, 1000);
</script>

<template>
  <q-page class="q-ma-md q-gutter-y-sm">
    <q-card flat class="row">
      <q-input filled class="col q-mr-md"> </q-input>

      <q-btn size="md" flat icon="fa-solid fa-paper-plane">
        <q-tooltip>Send request</q-tooltip>
      </q-btn>

      <q-btn size="md" flat>
        <q-circular-progress
          :value="reload_percentage"
          size="xs"
          color="secondary"
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

    <ExplorerTable v-else :data="data" />
  </q-page>
</template>

<style scoped></style>
