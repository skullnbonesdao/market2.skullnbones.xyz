<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';
import { useGlobalStore } from 'stores/globalStore';
import WalletAccountHistoryTable from 'components/wallet/WalletAccountHistoryTable.vue';
import { Trade } from 'src/api/gen';
import { CURRENCIES, E_Currency } from 'stores/const';

import '../../css/apexcharts.scss';
import { useWallet } from 'solana-wallets-vue';
import { useGlobalUserStore } from 'stores/globalUserStore';

const limit = 1000000;
const data = ref<Trade[]>();
const series = ref<any[]>([]);

const is_loading = ref(false);

watch(
  () => useWallet().publicKey.value,
  async () => {
    await update(useWallet().publicKey.value!.toString());
  }
);

watch(
  () => useGlobalUserStore().input_wallet,
  async () => {
    await update(useGlobalUserStore().input_wallet);
  }
);

onMounted(async () => {
  if (useGlobalUserStore().input_wallet)
    await update(useGlobalUserStore().input_wallet);
  else await update(useWallet().publicKey.value!.toString());
});

async function update(pubkey: string) {
  is_loading.value = true;
  data.value = await useGlobalStore().api_client.trades.search(
    'maker_and_taker',
    pubkey,
    limit
  );
  series.value = [];

  series.value.push({
    name: 'USDC [buy]',
    data: data.value
      ?.filter(
        (t) =>
          t.currency == CURRENCIES.find((c) => c.type == E_Currency.USDC)?.mint
      )
      .filter((t) => t.side?.includes('BUY'))
      .map((t) => [t.timestamp, t.price, t.volume]),
    axisName: 'USDC',
  });
  series.value.push({
    name: 'USDC [sell]',
    data: data.value
      ?.filter(
        (t) =>
          t.currency == CURRENCIES.find((c) => c.type == E_Currency.USDC)?.mint
      )
      .filter((t) => t.side?.includes('SELL'))
      .map((t) => [t.timestamp, t.price, t.volume]),
    axisName: 'USDC',
  });

  series.value.push({
    name: 'ATLAS [buy]',
    data: data.value
      ?.filter(
        (t) =>
          t.currency == CURRENCIES.find((c) => c.type == E_Currency.ATLAS)?.mint
      )
      .filter((t) => t.side?.includes('BUY'))
      .map((t) => [t.timestamp, t.price, t.volume]),
  });

  series.value.push({
    name: 'ATLAS [sell]',
    data: data.value
      ?.filter(
        (t) =>
          t.currency == CURRENCIES.find((c) => c.type == E_Currency.ATLAS)?.mint
      )
      .filter((t) => t.side?.includes('SELL'))
      .map((t) => [t.timestamp, t.price, t.volume]),
  });
  is_loading.value = false;
}

const chartOptions = {
  colors: ['#3976ea', '#3976ea', '#b2b2b2', '#b2b2b2'],

  chart: {
    height: 350,
    type: 'bubble',
    toolbar: {
      show: false,
    },
    foreColor: '#ffffff',
  },
  dataLabels: {
    enabled: false,
  },
  fill: {
    opacity: 0.8,
  },

  xaxis: {
    type: 'datetime',
  },
  yaxis: [
    {
      title: {
        text: 'USDC [buy]',
      },
      seriesName: 'USDC [buy]',
    },
    {
      title: {
        text: 'USDC [sell]',
      },
      seriesName: 'USDC [sell]',
    },
    {
      title: {
        text: 'ATLAS [buy]',
      },
      seriesName: 'ATLAS [buy]',
      opposite: true,
    },
    {
      title: {
        text: 'ATLAS [sell]',
      },
      seriesName: 'ATLAS [sell]',
      opposite: true,
    },
  ],
};
</script>

<template>
  <q-card flat>
    <div v-if="is_loading" class="row">
      <q-space />
      <q-spinner-cube class="row q-pa-sm" color="primary" size="3rem" />
      <q-space />
    </div>
    <div v-if="data">
      <apexchart
        class="chart"
        type="scatter"
        height="350"
        :options="chartOptions"
        :series="series"
        v-if="!is_loading"
      ></apexchart>

      <WalletAccountHistoryTable v-if="!is_loading" :data="data" />
      <div
        class="text-center text-orange-4 text-weight-thin text-right q-mr-md"
      >
        Limited to: {{ limit }}
      </div>
    </div>
    <div v-else class="text-center text-body2 q-pa-sm">No data</div>
  </q-card>
</template>

<style scoped class="scss">
.chart {
  display: flex;
  color: #000000;
  background: transparent;
  @include palette($my_dark_palette);
}
</style>
