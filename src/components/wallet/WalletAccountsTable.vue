<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue';
import { useWallet } from 'solana-wallets-vue';
import { useGlobalUserStore } from 'stores/globalUserStore';
import AsssetIcon from 'components/elements/AsssetIcon.vue';
import SolscanLink from 'components/buttons/SolscanLink.vue';

import SendTokenButton from 'components/buttons/SendTokenButton.vue';
import EditTokenButton from 'components/buttons/EditTokenButton.vue';
import { Price } from 'src/api/gen';
import { useGlobalStore } from 'stores/globalStore';
import { CURRENCIES, E_Currency } from 'stores/const';
import CurrencyIcon from 'components/elements/CurrencyIcon.vue';

const pros = defineProps(['tab']);

const accounts = ref();

const hide_zero = ref(false);
const tabs_currencies = ref('all');

const visibleColumns = ref([
  'name',
  'type',
  'action',
  'amount',
  'market',
  'value',
]);

const columns = [
  {
    name: 'image',
    label: '',
    align: 'left',
    required: true,
  },
  {
    name: 'name',
    label: 'Name',
    align: 'left',
    sortable: true,
    required: true,
    field: (row) => row.staratlas.name,
  },
  {
    name: 'type',
    label: 'Type',
    align: 'left',
    sortable: true,

    field: (row) => row.staratlas.attributes.itemType,
  },
  {
    name: 'account',
    label: 'Account',
    align: 'left',
    sortable: true,
    field: (row) => row.pubkey,
  },
  {
    name: 'mint',
    label: 'Mint',
    align: 'left',
    sortable: true,
    field: (row) => row.info.mint,
  },

  {
    name: 'owner',
    align: 'left',
    label: 'Owner',
    sortable: true,
    field: (row) => row.info.owner,
  },

  {
    name: 'decimals',
    label: 'Decimals',
    sortable: true,
    field: (row) => row.info.tokenAmount?.decimals,
  },
  {
    name: 'amount',
    label: 'Amount',
    align: 'right',
    sortable: true,
    field: (row) => row.info.tokenAmount?.uiAmount,
  },
  {
    name: 'market',
    label: 'Market',
    align: 'right',
    field: (row) => row.info.tokenAmount?.uiAmount,
  },

  {
    name: 'value',
    label: 'Value',
    align: 'right',
    field: (row) => row.info.tokenAmount?.uiAmount,
  },

  {
    label: '',
    align: 'right',
    name: 'action',
  },
];

onMounted(async () => {
  await useGlobalUserStore().update_accounts();
});

watch(
  () => useWallet().publicKey.value,
  async () => {
    await useGlobalUserStore().update_accounts();
  }
);

const pagination = ref({ rowsPerPage: 0 });

const prices_usdc = ref<Price[]>([]);
const prices_atlas = ref<Price[]>([]);

onMounted(async () => {
  prices_usdc.value = await useGlobalStore().api_client.trades.getPrices(
    CURRENCIES.find((c) => c.type == E_Currency.USDC)?.mint ?? 'none'
  );
  prices_atlas.value = await useGlobalStore().api_client.trades.getPrices(
    CURRENCIES.find((c) => c.type == E_Currency.ATLAS)?.mint ?? 'none'
  );

  await useGlobalUserStore().update_accounts();
});

function tab_filter_data() {
  let data = [];

  if (pros.tab == 'all') {
    data = useGlobalUserStore().get_account_map_staratlas;
  } else {
    data = useGlobalUserStore().get_account_map_staratlas.filter(
      (e) => e.staratlas.attributes.itemType?.toLowerCase() == pros.tab
    );
  }

  if (hide_zero.value)
    return data.filter((d) => d.info.tokenAmount.uiAmount != 0);
  else return data;
}

const total_usdc = computed(() => {
  return tab_filter_data()
    .map(
      (d) =>
        (prices_atlas.value.find(
          (c) =>
            c.asset == d.info.mint &&
            c.currency ==
              CURRENCIES.find((c) => c.type == E_Currency.USDC)?.mint
        )?.price ?? 0) * d.info.tokenAmount.uiAmount
    )
    .reduce((a, b) => a + b, 0);
});

const total_atlas = computed(() => {
  return tab_filter_data()
    .map(
      (d) =>
        (prices_atlas.value.find(
          (c) =>
            c.asset == d.info.mint &&
            c.currency ==
              CURRENCIES.find((c) => c.type == E_Currency.ATLAS)?.mint
        )?.price ?? 0) * d.info.tokenAmount.uiAmount
    )
    .reduce((a, b) => a + b, 0);
});
</script>

<template>
  <q-card flat>
    <div v-if="useGlobalUserStore().is_loading" class="row">
      <q-space />
      <q-spinner-cube class="row" color="primary" size="3rem" />
      <q-space />
    </div>
    <q-table
      color="primary"
      dark
      flat
      square
      virtual-scroll
      v-model:pagination="pagination"
      :rows-per-page-options="[0]"
      :visible-columns="visibleColumns"
      title="Accounts"
      :rows="tab_filter_data()"
      :columns="columns"
      row-key="name"
    >
      <template v-slot:top="props">
        <div class="col-2 q-table__title">Accounts</div>

        <q-space />

        <q-tabs v-model="tabs_currencies" align="justify">
          <q-tab name="all" label="ALL" class="bg-secondary" />
          <q-tab name="usdc" label="USDC" />
          <q-tab name="atlas" label="ATLAS" />
        </q-tabs>
        <q-space />
        <q-toggle
          color="secondary"
          v-model="hide_zero"
          label="Hide empty accounts"
          left-label
        />
        <q-space />
        <q-select
          v-model="visibleColumns"
          multiple
          borderless
          dense
          options-dense
          :display-value="$q.lang.table.columns"
          emit-value
          map-options
          :options="columns"
          option-value="name"
          style="min-width: 150px"
        />

        <q-btn
          flat
          round
          dense
          :icon="props.inFullscreen ? 'fullscreen_exit' : 'fullscreen'"
          @click="props.toggleFullscreen"
          class="q-ml-md"
        />
      </template>

      <template v-slot:body="props">
        <q-tr
          :props="props"
          :class="
            props.row.info.tokenAmount?.uiAmount == 0 ? 'text-yellow' : ''
          "
        >
          <q-td key="image" :props="props">
            <AsssetIcon
              size="xl"
              :url="'sa_files/webp/' + props.row.info.mint + '.webp'"
            />
          </q-td>
          <q-td key="name" :props="props">
            <div class="text-subtitle1">
              {{ props.row.staratlas.name ?? '-' }}
            </div>
          </q-td>

          <q-td key="type" :props="props">
            {{ props.row.staratlas.attributes.itemType ?? '-' }}
          </q-td>

          <q-td key="account" :props="props">
            <SolscanLink :address="props.row.pubkey" />
          </q-td>

          <q-td key="owner" :props="props">
            <SolscanLink :address="props.row.info.owner" />
          </q-td>

          <q-td key="mint" :props="props" class="">
            <SolscanLink :address="props.row.info.mint" />
          </q-td>

          <q-td key="decimals" :props="props">
            {{ props.row.info.tokenAmount?.decimals }}
          </q-td>
          <q-td key="amount" class="text-subtitle1 text-bold" :props="props">
            <div>
              {{ props.row.info.tokenAmount?.uiAmount.toFixed(0) }}
            </div>
          </q-td>

          <q-td key="market" class="text-subtitle1 text-bold" :props="props">
            <div
              v-if="tabs_currencies != 'atlas'"
              class="row items-center justify-end q-gutter-x-sm"
            >
              <div>
                {{
                  (
                    prices_usdc.find(
                      (c) =>
                        c.asset == props.row.info.mint &&
                        c.currency ==
                          CURRENCIES.find((c) => c.type == E_Currency.USDC).mint
                    )?.price ?? 0
                  ).toFixed(2)
                }}
              </div>
              <CurrencyIcon
                :currency="CURRENCIES.find((c) => c.type == E_Currency.USDC)"
              />
            </div>
            <q-separator v-if="tabs_currencies == 'all'" />
            <div
              v-if="tabs_currencies != 'usdc'"
              class="row items-center justify-end q-gutter-x-sm"
            >
              <div>
                {{
                  (
                    prices_atlas.find(
                      (c) =>
                        c.asset == props.row.info.mint &&
                        c.currency ==
                          CURRENCIES.find((c) => c.type == E_Currency.ATLAS)
                            .mint
                    )?.price ?? 0
                  ).toFixed(2)
                }}
              </div>
              <CurrencyIcon
                :currency="CURRENCIES.find((c) => c.type == E_Currency.ATLAS)"
              />
            </div>
          </q-td>

          <q-td key="value" class="text-subtitle1 text-bold" :props="props">
            <div
              v-if="tabs_currencies != 'atlas'"
              class="row items-center justify-end q-gutter-x-sm"
            >
              <div>
                {{
                  (
                    (prices_atlas.find(
                      (c) =>
                        c.asset == props.row.info.mint &&
                        c.currency ==
                          CURRENCIES.find((c) => c.type == E_Currency.USDC).mint
                    )?.price ?? 0) * props.row.info.tokenAmount?.uiAmount
                  ).toFixed(2)
                }}
              </div>
              <CurrencyIcon
                :currency="CURRENCIES.find((c) => c.type == E_Currency.USDC)"
              />
            </div>
            <q-separator v-if="tabs_currencies == 'all'" />
            <div
              v-if="tabs_currencies != 'usdc'"
              class="row items-center justify-end q-gutter-x-sm"
            >
              <div>
                {{
                  (
                    (prices_atlas.find(
                      (c) =>
                        c.asset == props.row.info.mint &&
                        c.currency ==
                          CURRENCIES.find((c) => c.type == E_Currency.ATLAS)
                            .mint
                    )?.price ?? 0) * props.row.info.tokenAmount?.uiAmount
                  ).toFixed(2)
                }}
              </div>
              <CurrencyIcon
                :currency="CURRENCIES.find((c) => c.type == E_Currency.ATLAS)"
              />
            </div>
          </q-td>

          <q-td key="action" :props="props" class="q-gutter-x-sm">
            <EditTokenButton
              :amount="props.row.info.tokenAmount.uiAmount"
              :mint="props.row.info.mint"
              :decimals="props.row.info.tokenAmount.decimals"
            />
            <SendTokenButton
              :disabled="props.row.info.tokenAmount.uiAmount == 0"
              :mint="props.row.info.mint"
              :decimals="props.row.info.tokenAmount.decimals"
              :amount="props.row.info.tokenAmount.uiAmount"
              :name="props.row.staratlas.name"
            />
          </q-td>
        </q-tr>
      </template>
      <template v-slot:top-row>
        <q-tr class="bg-primary">
          <q-td colspan="100%">
            <div class="row items-center text-right">
              <div class="col text-h5">∑</div>
              <div class="col-1 q-gutter-y-sm text-subtitle1">
                <div class="row justify-end q-gutter-x-md items-center">
                  {{ total_usdc.toFixed(2) }}
                  <CurrencyIcon
                    :currency="
                      CURRENCIES.find((c) => c.type == E_Currency.USDC)
                    "
                  />
                </div>
                <div class="row justify-end q-gutter-x-md items-center">
                  {{ total_atlas.toFixed(2) }}
                  <CurrencyIcon
                    :currency="
                      CURRENCIES.find((c) => c.type == E_Currency.ATLAS)
                    "
                  />
                </div>
              </div>
            </div>
          </q-td>
          <q-tooltip>Total market value</q-tooltip>
        </q-tr>
      </template>
    </q-table>
  </q-card>
</template>

<style scoped lang="sass"></style>
