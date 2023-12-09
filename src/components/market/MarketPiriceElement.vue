<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';
import { useGlobalStore } from 'stores/globalStore';
import { useGlobalUserStore } from 'stores/globalUserStore';
import CurrencyIcon from 'components/elements/CurrencyIcon.vue';
import { CURRENCIES } from 'stores/const';
import { useGlobalStaratlasAPIStore } from 'stores/gloablStaratlasAPIStore';

const data = ref([{ price: '0' }]);

onMounted(async () => {
  data.value[0].price = 0;
  data.value = await useGlobalStore().api_client.trades.getTrades(
    useGlobalStaratlasAPIStore().nfts.find(
      (n) => n.symbol == useGlobalUserStore().selected_symbol
    )?.mint_pair,
    useGlobalStaratlasAPIStore().nfts.find(
      (n) => n.symbol == useGlobalUserStore().selected_symbol
    )?.mint_asset,
    1
  );
});

watch(
  () => useGlobalUserStore().selected_symbol,
  async () => {
    data.value[0].price = 0;
    data.value = await useGlobalStore().api_client.trades.getTrades(
      useGlobalStaratlasAPIStore().nfts.find(
        (n) => n.symbol == useGlobalUserStore().selected_symbol
      )?.mint_pair,
      useGlobalStaratlasAPIStore().nfts.find(
        (n) => n.symbol == useGlobalUserStore().selected_symbol
      )?.mint_asset,
      1
    );
  }
);
</script>

<template>
  <div v-if="data?.length" class="row items-center">
    <div class="col q-pr-xs text-h6">{{ data[0]?.price ?? 0 }}</div>
    <CurrencyIcon
      style="height: 20px; width: 20px"
      :currency="
        CURRENCIES.find(
          (c) =>
            c.mint ==
            useGlobalStaratlasAPIStore().nfts.find(
              (n) => n.symbol == useGlobalUserStore().selected_symbol
            )?.mint_pair
        )
      "
    />
    <q-tooltip transition-show="scale" transition-hide="scale">
      Last traded price
    </q-tooltip>
  </div>
</template>

<style scoped></style>
