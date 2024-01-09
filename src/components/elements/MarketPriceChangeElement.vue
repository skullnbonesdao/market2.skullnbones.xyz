<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';
import { useGlobalStore } from 'stores/globalStore';
import { useGlobalStaratlasAPIStore } from 'stores/gloablStaratlasAPIStore';
import { useGlobalUserStore } from 'stores/globalUserStore';
import { PriceChange } from 'src/api/gen';

const props = defineProps([
  'timespan',
  'asset',
  'currency',
  'disable_timespan',
  'enable_volume',
]);

const data = ref<PriceChange[]>([]);

async function get_change_price() {
  data.value = [];
  if (props.asset && props.currency)
    data.value = await useGlobalStore().api_client.trades.getPriceChange(
      props.currency,
      props.asset,
      props.timespan
    );
  else
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
  await get_change_price();
});

watch(
  () => useGlobalUserStore().selected_symbol,
  async () => {
    await get_change_price();
  }
);

watch(
  () => props.timespan,
  async () => {
    await get_change_price();
  }
);
</script>

<template>
  <q-btn
    flat
    style="width: 120px"
    class="q-pa-xs q-ma-xs text-body2"
    :class="
      !data[0]?.volume
        ? 'neutral'
        : data[0]?.price_change_percentage > 0
        ? 'buy'
        : 'sell'
    "
  >
    <div class="col text-center" style="font-size: 10px">
      <q-spinner-cube v-if="!data.length" size="xs" color="primary" />
      <div v-else class="row q-gutter-x-xs">
        <div v-if="!disable_timespan" class="text-caption">
          {{ props.timespan.toUpperCase() }}
        </div>
        <div class="col text-right">
          <div class="text-body2">
            <q-tooltip>price change</q-tooltip>
            {{
              (data[0]?.price_change_percentage > 9999
                ? '>9999'
                : data[0]?.price_change_percentage?.toFixed(1)) ?? '0.0'
            }}
          </div>
          <div class="text-body2">
            {{ data[0]?.volume?.toFixed(1) ?? '0.0' }}
            <q-tooltip>volume</q-tooltip>
          </div>
        </div>
        <q-separator vertical></q-separator>

        <div>
          <div>%</div>
          <div>∑</div>
        </div>
      </div>
    </div>
  </q-btn>
</template>

<style scoped></style>
