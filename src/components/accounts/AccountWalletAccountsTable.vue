<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue';
import { useWallet } from 'solana-wallets-vue';
import { useGlobalUserStore } from 'stores/globalUserStore';

import { Connection } from '@solana/web3.js';
import AsssetIcon from 'components/elements/AsssetIcon.vue';
import SolscanLink from 'components/buttons/SolscanLink.vue';

import SendTokenButton from 'components/buttons/SendTokenButton.vue';
import EditTokenButton from 'components/buttons/EditTokenButton.vue';

const pros = defineProps(['tab']);

const accounts = ref();

const visibleColumns = ref([
  'name',
  'account',
  'tyoe',
  'mint',
  'action',
  'amount',
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

// const table_data = computed(() => {
//   if (pros.tab == 'all') {
//     return useGlobalUserStore().get_account_map_staratlas;
//   }
// });

function tab_filter_data() {
  if (pros.tab == 'all') {
    return useGlobalUserStore().get_account_map_staratlas;
  } else {
    return useGlobalUserStore().get_account_map_staratlas.filter(
      (e) => e.staratlas.attributes.itemType?.toLowerCase() == pros.tab
    );
  }
}
</script>

<template>
  <div>
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
        <q-tr :props="props">
          <q-td key="image" :props="props">
            <q-avatar size="md">
              <AsssetIcon
                size="md"
                :url="'sa_files/webp/' + props.row.info.mint + '.webp'"
              />
            </q-avatar>
          </q-td>
          <q-td key="name" :props="props">
            {{ props.row.staratlas.name ?? '-' }}
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
          <q-td key="amount" class="text-overline" :props="props">
            <div
              :class="
                props.row.info.tokenAmount?.uiAmount == 0 ? 'text-yellow' : ''
              "
            >
              {{ props.row.info.tokenAmount?.uiAmount.toFixed(0) }}
            </div>
          </q-td>

          <q-td key="action" :props="props" class="q-gutter-x-sm">
            <EditTokenButton
              :amount="props.row.info.tokenAmount.uiAmount"
              :mint="props.row.info.mint"
              :decimals="props.row.info.tokenAmount.decimals"
            />
            <SendTokenButton
              :mint="props.row.info.mint"
              :decimals="props.row.info.tokenAmount.decimals"
            />
          </q-td>
        </q-tr>
      </template>
    </q-table>
  </div>
</template>

<style scoped lang="sass"></style>
