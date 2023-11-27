<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useGlobalStore } from 'stores/globalStore';
import WalletAccountHistoryTable from 'components/wallet/WalletAccountHistoryTable.vue';
import { Trade } from 'src/api/gen';
import { CURRENCIES, E_Currency } from 'stores/const';

import '../../css/apexcharts.scss';
import { colors } from 'quasar';

const data = ref<Trade[]>();
const series = ref<any[]>([]);
onMounted(async () => {
  data.value = await useGlobalStore().api_client.trades.search(
    'maker_and_taker',
    '38s5kQmKd4qSQKQcfLabSqbrxEbuhryUgQMEfb5TCwMt',
    100
  );
  series.value.push({
    name: 'USDC',
    data: data.value
      ?.filter(
        (t) =>
          t.currency == CURRENCIES.find((c) => c.type == E_Currency.USDC)?.mint
      )
      .map((t) => [t.timestamp, t.price, t.volume]),
  });
  series.value.push({
    name: 'ATLAS',
    data: data.value
      ?.filter(
        (t) =>
          t.currency == CURRENCIES.find((c) => c.type == E_Currency.ATLAS)?.mint
      )
      .map((t) => [t.timestamp, t.price, t.volume]),
  });
});

const chartOptions = {
  colors: ['#F44336', '#E91E63', '#9C27B0'],

  chart: {
    height: 350,
    type: 'bubble',
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
        text: 'USDC',
      },
      labels: {
        style: {
          colors: ['#ffffff'],
        },
      },
    },
    {
      opposite: true,
      title: {
        text: 'ATLAS',
      },
      labels: {
        style: {
          colors: ['#ffffff'],
        },
      },
    },
  ],
};
</script>

<template>
  <q-card flat style="width: 50vw">
    <apexchart
      class="chart"
      type="bubble"
      height="350"
      :options="chartOptions"
      :series="series"
    ></apexchart>

    <WalletAccountHistoryTable :data="data" />
  </q-card>
</template>

<style scoped class="scss">
.chart {
  color: #a41f1f;
  background: transparent;
  @include palette($my_dark_palette);
}
</style>
