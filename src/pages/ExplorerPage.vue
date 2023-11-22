<script setup lang="ts">
import * as api from 'src/api/gen/APIClient';
import { APIClient } from 'src/api/gen/APIClient';
import { onMounted, ref } from 'vue';
import ExplorerTable from 'components/explorer/ExplorerTable.vue';
import { API_URL, useGlobalStore } from 'stores/globalStore';
import { useGlobalFactoryStore } from 'stores/globalFactoryStore';

const data = ref();

onMounted(async () => {
  data.value = await useGlobalStore().api_client.trades.getTrades(
    null,
    null,
    100
  );
});
</script>

<template>
  <q-page class="q-ma-md q-gutter-y-sm">
    <q-card flat class="row">
      <q-input filled class="col q-mr-md">
        <template v-slot:after>
          <q-btn size="md" flat icon="fa-solid fa-paper-plane" />
        </template>
      </q-input>
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
