<script setup lang="ts">
import { useGlobalUserStore } from '../stores/globalUserStore';
import { onMounted, ref } from 'vue';
import { useGlobalStaratlasAPIStore } from 'stores/gloablStaratlasAPIStore';
import AccountWalletAccountsTable from 'components/wallet/WalletAccountsTable.vue';

import WalletAccountInput from 'components/wallet/WalletAccountInput.vue';
import WalletAccountHistory from 'components/wallet/WalletAccountHistory.vue';
import { useGlobalStore } from 'stores/globalStore';
import { CURRENCIES, E_Currency } from 'stores/const';
import { Price } from 'src/api/gen';

const tab_selected_parent = ref('account');

const tab_selected = ref('all');
</script>

<template>
  <q-page class="row q-pa-sm justify-center">
    <div style="width: 80vw">
      <WalletAccountInput class="q-mb-sm" />
      <q-tabs align="justify" v-model="tab_selected_parent">
        <q-tab name="account" label="Accounts" />
        <q-tab name="activity" label="Market Activity" />
      </q-tabs>
      <q-tabs
        v-if="tab_selected_parent == 'account'"
        align="justify"
        v-model="tab_selected"
      >
        <q-tab name="all" label="All" class="bg-secondary" />
        <q-tab
          :name="itemType"
          :label="itemType"
          :key="itemType"
          v-for="itemType in useGlobalStaratlasAPIStore().get_itemTypes"
        />
      </q-tabs>

      <AccountWalletAccountsTable
        v-if="tab_selected_parent == 'account'"
        :tab="tab_selected"
        dark
      />

      <WalletAccountHistory v-if="tab_selected_parent == 'activity'" />
    </div>
  </q-page>
</template>

<style scoped></style>
