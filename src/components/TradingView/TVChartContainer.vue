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
    //default: useGlobalUserStore().selected_nft.symbol,
    type: String,
  },
  interval: {
    default: 'D',
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
    default: 'light',
  },
});

const chartContainer = ref();
let chartWidget;

function create_chart() {
  const widgetOptions = {
    theme: props.theme,
    symbol: props.symbol,
    datafeed: new UDFCompatibleDatafeed(props.datafeedUrl),
    interval: props.interval,
    container: chartContainer.value,
    library_path: props.libraryPath,

    locale: getLanguageFromURL() || 'en',
    disabled_features: [
      'use_localstorage_for_settings',
      'header_widget',
      'edit_buttons_in_legend',
      'left_toolbar',
      'timeframes_toolbar',
    ],
    enabled_features: ['study_templates'],
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
    },
  };
  chartWidget = new widget(widgetOptions);

  chartWidget.onChartReady(() => {
    chartWidget.headerReady().then(() => {
      const button = chartWidget.createButton();

      button.setAttribute('title', 'Click to show a notification popup');
      button.classList.add('apply-common-tooltip');

      button.addEventListener('click', () =>
        chartWidget.showNoticeDialog({
          title: 'Notification',
          body: 'TradingView Charting Library API works correctly',
          callback: () => {
            // eslint-disable-next-line no-console
            console.log('Noticed!');
          },
        })
      );

      button.innerHTML = 'Check API';
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
  () => useGlobalUserStore().selected_nft.symbol,
  () => {
    chartWidget.remove();
    chartWidget = null;
    create_chart();
  }
);
</script>

<template>
  <div class="TVChartContainer" ref="chartContainer" />
</template>

<style>
.TVChartContainer {
  height: calc(50vh);
}
</style>
