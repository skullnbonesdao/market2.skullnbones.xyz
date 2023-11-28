<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';
import { useGlobalStore } from 'stores/globalStore';
import { useGlobalUserStore } from 'stores/globalUserStore';
import CurrencyIcon from 'components/elements/CurrencyIcon.vue';
import { CURRENCIES } from 'stores/const';

const data = ref([{ price: '0' }]);

onMounted(async () => {
  data.value[0].price = 0;
  data.value = await useGlobalStore().api_client.trades.getTrades(
    useGlobalUserStore().selected_nft.mint_pair,
    useGlobalUserStore().selected_nft.mint_asset,
    1
  );
});

watch(
  () => useGlobalUserStore().selected_nft.symbol,
  async () => {
    data.value[0].price = 0;
    data.value = await useGlobalStore().api_client.trades.getTrades(
      useGlobalUserStore().selected_nft.mint_pair,
      useGlobalUserStore().selected_nft.mint_asset,
      1
    );
  }
);
</script>

<template>
  <q-btn color="primary" v-if="data?.length" class="row items-center">
    <div class="col q-pr-xs">{{ data[0].price }}</div>
    <CurrencyIcon
      style="height: 20px; width: 20px"
      :currency="useGlobalUserStore().selected_nft.currency"
    />
    <q-tooltip transition-show="scale" transition-hide="scale">
      Last traded price
    </q-tooltip>
  </q-btn>
</template>

<style scoped></style>
