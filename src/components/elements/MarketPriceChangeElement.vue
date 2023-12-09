<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';
import { useGlobalStore } from 'stores/globalStore';
import { useGlobalStaratlasAPIStore } from 'stores/gloablStaratlasAPIStore';
import { useGlobalUserStore } from 'stores/globalUserStore';
import { PriceChange } from 'src/api/gen';

const props = defineProps(['timespan']);

const data = ref<PriceChange[]>([]);

async function get_chnage_price() {
  data.value = await useGlobalStore().api_client.trades.getPriceChange(
    useGlobalStaratlasAPIStore().nfts.find(
      (n) => n.symbol == useGlobalUserStore().selected_symbol
    )?.mint_pair ?? '',
    useGlobalStaratlasAPIStore().nfts.find(
      (n) => n.symbol == useGlobalUserStore().selected_symbol
    )?.mint_asset ?? '',
    props.timespan
  );
}

onMounted(async () => {
  await get_chnage_price();
});

watch(
  () => useGlobalUserStore().selected_symbol,
  async () => {
    await get_chnage_price();
  }
);
</script>

<template>
  <div
    class="q-pa-xs q-ma-xs"
    :class="data[0]?.price_change_percentage > 0 ? 'buy' : 'sell'"
  >
    <div class="col text-center">
      <div>{{ data[0]?.price_change_percentage?.toFixed(2) ?? '0.0' }}%</div>

      <div>{{ props.timespan.toUpperCase() }}</div>
    </div>

    <q-tooltip>price change</q-tooltip>
  </div>
</template>

<style scoped></style>
