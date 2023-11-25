<script setup lang="ts">
import AccountWalletAccountsToken from 'components/accounts/AccountWalletAccountsToken.vue';
import { useGlobalUserStore } from '../stores/globalUserStore';
import { onMounted } from 'vue';
import { useGlobalStore } from 'stores/globalStore';

onMounted(async () => {
  await useGlobalUserStore().update_accounts();
});
</script>

<template>
  <div v-if="useGlobalUserStore().is_loading" class="row">
    <q-space />
    <q-spinner-cube class="row" color="primary" size="3rem" />
    <q-space />
  </div>

  <AccountWalletAccountsToken />
</template>

<style scoped></style>
