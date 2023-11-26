<script setup lang="ts">
import { useGlobalUserStore } from '../stores/globalUserStore';
import { onMounted, ref } from 'vue';
import { useGlobalStaratlasAPIStore } from 'stores/gloablStaratlasAPIStore';
import AccountWalletAccountsTable from 'components/wallet/WalletAccountsTable.vue';
import {
  useWallet,
  WalletConnectButton,
  WalletMultiButton,
} from 'solana-wallets-vue';
import WalletAccountInput from 'components/wallet/WalletAccountInput.vue';

const tab_selected = ref('all');

onMounted(async () => {
  await useGlobalUserStore().update_accounts();
});
</script>

<template>
  <q-page class="row q-pa-sm bg-image-dark justify-center">
    <div>
      <WalletAccountInput class="q-mb-sm" />
      <q-tabs align="justify" v-model="tab_selected">
        <q-tab name="all" label="All" class="bg-secondary" />
        <q-tab
          :name="itemType"
          :label="itemType"
          :key="itemType"
          v-for="itemType in useGlobalStaratlasAPIStore().get_itemTypes"
        />
      </q-tabs>

      <div v-if="useGlobalUserStore().is_loading" class="row">
        <q-space />
        <q-spinner-cube class="row" color="primary" size="3rem" />
        <q-space />
      </div>
      <AccountWalletAccountsTable :tab="tab_selected" dark />
      <!--    <AccountWalletAccountsToken />-->
    </div>
  </q-page>
</template>

<style scoped></style>
