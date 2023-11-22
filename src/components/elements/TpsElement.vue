<script setup lang="ts">
import { useGlobalStore } from 'stores/globalStore';
import { computed, onMounted, ref } from 'vue';

const performance_samples = ref();
const tps = ref(0);

const update_tps = async function () {
  performance_samples.value =
    await useGlobalStore().connection.getRecentPerformanceSamples(1);

  tps.value = calc_tps(performance_samples.value);
  setTimeout(update_tps, 10000);
};

update_tps();

function calc_tps(
  ssampls: {
    slot: number;
    numTransactions: number;
    numSlots: number;
    samplePeriodSecs: number;
  }[]
) {
  return ssampls[0].numTransactions / ssampls[0].samplePeriodSecs;
}
</script>

<template>
  <q-badge color="secondary" class="q-mx-sm">TPS: {{ tps.toFixed(0) }}</q-badge>
</template>

<style scoped></style>
