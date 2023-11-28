<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useGlobalStore } from 'stores/globalStore';
import WalletAccountHistoryTable from 'components/wallet/WalletAccountHistoryTable.vue';
import { Trade } from 'src/api/gen';
import { CURRENCIES, E_Currency } from 'stores/const';

import '../../css/apexcharts.scss';
import { colors } from 'quasar';

const limit = 100;
const data = ref<Trade[]>();
const series = ref<any[]>([]);

const is_loading = ref(true);

onMounted(async () => {
  is_loading.value = true;
  data.value = await useGlobalStore().api_client.trades.search(
    'maker_and_taker',
    '38s5kQmKd4qSQKQcfLabSqbrxEbuhryUgQMEfb5TCwMt',
    limit
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
  is_loading.value = false;
});

const chartOptions = {
  colors: ['#3976ea', '#b2b2b2'],

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
        text: 'USDC',
      },
    },
    {
      opposite: true,
      title: {
        text: 'ATLAS',
      },
    },
  ],
};
</script>

<template>
  <q-card flat>
    <div v-if="is_loading" class="row">
      <q-space />
      <q-spinner-cube class="row" color="primary" size="3rem" />
      <q-space />
    </div>

    <apexchart
      class="chart"
      type="bubble"
      height="350"
      :options="chartOptions"
      :series="series"
      v-if="!is_loading"
    ></apexchart>

    <WalletAccountHistoryTable v-if="!is_loading" :data="data" />
    <div class="text-center text-orange-4 text-weight-thin text-right q-mr-md">
      Limited to: {{ limit }}
    </div>
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
