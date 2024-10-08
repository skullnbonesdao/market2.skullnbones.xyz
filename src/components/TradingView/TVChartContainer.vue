<script setup>
import { onMounted, ref, onUnmounted, watch } from 'vue';
import { UDFCompatibleDatafeed } from '../../../public/datafeeds/udf/lib/udf-compatible-datafeed.js';
import { widget } from '../../../public/charting_library';

import { useGlobalUserStore } from 'stores/globalUserStore';

function getLanguageFromURL() {
  const regex = new RegExp('[\\?&]lang=([^&#]*)');
  const results = regex.exec(window.location.search);
  return results === null
    ? null
    : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

const props = defineProps({
  symbol: {
    //default: 'AAPL',
    default: 'PX4USDC',
    // default: useGlobalUserStore().selected_nft.symbol,
    type: String,
  },
  interval: {
    default: '3D',
    type: String,
  },
  datafeedUrl: {
    //default: 'https://demo_feed.tradingview.com',
    default: import.meta.env.VITE_SMB_API + '/udf',

    type: String,
  },
  libraryPath: {
    default: '/charting_library/',
    type: String,
  },
  chartsStorageUrl: {
    default: 'https://saveload.tradingview.com',
    type: String,
  },
  chartsStorageApiVersion: {
    default: '1.1',
    type: String,
  },
  clientId: {
    default: 'tradingview.com',
    type: String,
  },
  userId: {
    default: 'public_user_id',
    type: String,
  },
  fullscreen: {
    default: false,
    type: Boolean,
  },
  autosize: {
    default: true,
    type: Boolean,
  },
  studiesOverrides: {
    type: Object,
  },
  theme: {
    type: String,
    default: 'dark',
  },
});

const chartContainer = ref();
let chartWidget;

function create_chart() {
  const widgetOptions = {
    theme: props.theme,
    symbol: useGlobalUserStore().selected_symbol,
    datafeed: new UDFCompatibleDatafeed(props.datafeedUrl),
    interval: props.interval,
    container: chartContainer.value,
    library_path: props.libraryPath,

    locale: getLanguageFromURL() || 'en',
    disabled_features: [
      'use_localstorage_for_settings',
      'edit_buttons_in_legend',
      'left_toolbar',
      'timeframes_toolbar',
      'header_symbol_search',
      'header_compare',
      'header_saveload',
      'header_settings',
      'study_templates',
    ],
    enabled_features: [],
    charts_storage_url: props.chartsStorageUrl,
    charts_storage_api_version: props.chartsStorageApiVersion,
    client_id: props.clientId,
    user_id: props.userId,
    fullscreen: props.fullscreen,
    autosize: props.autosize,
    studies_overrides: props.studiesOverrides,

    overrides: {
      'paneProperties.background': '#16213e',
      'scalesProperties.textColor': '#FFF',
      'paneProperties.backgroundType': 'solid',
      'mainSeriesProperties.style': 3,
    },
  };
  chartWidget = new widget(widgetOptions);

  chartWidget.onChartReady(() => {
    chartWidget.headerReady().then(() => {
      // chartWidget.activeChart().createStudy('MACD', false, false, {
      //   in_0: 14,
      //   in_1: 30,
      //   in_3: 'close',
      //   in_2: 9,
      // });

      chartWidget.activeChart().createStudy('Volume', true);

      // const button = chartWidget.createButton();
      //
      // button.setAttribute('title', 'Click to show a notification popup');
      // button.classList.add('apply-common-tooltip');
      //
      // button.addEventListener('click', () =>
      //   chartWidget.showNoticeDialog({
      //     title: 'Notification',
      //     body: 'TradingView Charting Library API works correctly',
      //     callback: () => {
      //       // eslint-disable-next-line no-console
      //       console.log('Noticed!');
      //     },
      //   })
      // );
      //
      // button.innerHTML = 'Check API';
    });
  });
}

onMounted(() => {
  create_chart();
});

onUnmounted(() => {
  if (chartWidget !== null) {
    chartWidget.remove();
    chartWidget = null;
  }
});

watch(
  () => useGlobalUserStore().selected_symbol,
  () => {
    chartWidget.remove();
    chartWidget = null;
    create_chart();
  }
);
</script>

<template>
  <div class="TVChartContainer full-height" ref="chartContainer" />
</template>

<style>
.TVChartContainer {

}
</style>
