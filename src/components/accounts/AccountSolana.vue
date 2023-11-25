<script setup lang="ts">
import { useWallet } from 'solana-wallets-vue';
import AccountTemplate from 'components/accounts/AccountTemplate.vue';
import { onMounted, ref, watch } from 'vue';

const count = ref(0);
const public_key = ref('none');
const token_mint = ref('ATLASXmbPQxBUYbxPsV97usA3fPQYEqzQBUHgiFCUsXx');
const tree_elemenets = ref([
  {
    label: 'Solana',
    header: 'root',
    children: [
      {
        label: 'Tokens',
        header: 'generic',
        children: [
          {
            label: 'getAssociatedTokenAddress() by mint',
            function_name: 'getAssociatedTokenAddress(mint)',
            header: 'generic',
            body: 'story',
          },
        ],
      },
    ],
  },
  {
    label: 'StarAtlas-Factory',
    header: 'root',
    children: [
      {
        label: 'Staking (Atlas/Polis)',
        icon: 'restaurant_menu',
        header: 'generic',
        children: [
          {
            label: 'getRegisteredStake()',
            function_name: 'getRegisteredStake',
            header: 'generic',
            body: 'story',
          },
          {
            label: 'getStakingAccount()',
            function_name: 'getStakingAccount',
            body: 'story',
          },
          {
            label: 'getTokenEscrow()',
            function_name: 'getTokenEscrow',
            body: 'story',
          },
        ],
      },
    ],
  },
]);

onMounted(() => {
  public_key.value = useWallet().publicKey.value?.toString() ?? 'none';
});

const send = () => {
  count.value++;
};

watch(
  () => useWallet().publicKey.value,
  () => {
    public_key.value = useWallet().publicKey.value?.toString() ?? 'none';
  }
);
</script>

<template>
  <div class="row shadow-3 q-pa-md">
    <div class="col">
      <q-input
        class="col"
        v-model="public_key"
        label="Wallet Address"
      ></q-input>
      <q-input class="col" v-model="token_mint" label="Token Mint"></q-input>
    </div>
    <q-btn color="primary" icon="send" class="q-ml-xl" @click="send" />
  </div>

  <q-tree
    color="primary"
    dark
    :nodes="tree_elemenets"
    node-key="label"
    class="q-pt-md"
  >
    <template v-slot:header-root="prop">
      <div class="row items-center text-h6">
        <div class="text-primary">
          {{ prop.node.label }}
        </div>
      </div>
    </template>

    <template v-slot:default-header="prop">
      <div class="row items-center">
        <div class="text-weight-bold">
          {{ prop.node.label }}
        </div>
      </div>
    </template>

    <template v-slot:body-story="prop">
      <AccountTemplate
        :count="count"
        :function_name="prop.node.function_name"
        :public-key="public_key"
        :mint="token_mint"
      />
    </template>
  </q-tree>
</template>

<style scoped lang="sass"></style>
