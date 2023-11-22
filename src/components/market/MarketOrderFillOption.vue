<script setup lang="ts">
import { GmClientService, Order } from '@staratlas/factory';
import { format_address } from '../../stores/format_address';
import { computed, ref } from 'vue';
import { useWallet } from 'solana-wallets-vue';
import { Notify } from 'quasar';
import { useGlobalStore } from 'stores/globalStore';
import { Connection } from '@solana/web3.js';
import { GM_PROGRAM_ID } from 'stores/globalFactoryStore';
import { handle_confirmation } from 'stores/handle_confirmation';

const props = defineProps({
  order: {
    type: Order,
  },
});
const price = computed(() => {
  return props.order?.uiPrice;
});

const size = computed(() => {
  return props.order?.orderQtyRemaining;
});

const input_size = ref(size.value);

async function fill_order() {
  if (!useWallet().publicKey.value) {
    Notify.create({
      color: 'yellow',
      textColor: 'black',
      message: 'Wallet not connected!',
    });
    return;
  }

  let gmClient = new GmClientService();

  if (props.order && input_size.value) {
    const tx = await gmClient.getCreateExchangeTransaction(
      useGlobalStore().connection as Connection,
      props.order,
      useWallet().publicKey.value!,
      input_size.value,
      GM_PROGRAM_ID
    );

    try {
      const signature = await useWallet().sendTransaction(
        tx.transaction,
        useGlobalStore().connection
      );
      await handle_confirmation(signature);
    } catch (err) {
      Notify.create({
        color: 'red',
        message: `${err}`,
        timeout: 5000,
      });
    }
  }
}
</script>

<template>
  <div class="q-pa-sm q-gutter-y-xs">
    <div class="text-overline row">
      <div class="text-subtitle2">Fill Order:</div>
      <q-space />
      <div class="text-orange">{{ format_address(order.owner) }}</div>
    </div>
    <q-input dense square filled label="Price" disable v-model="price" />
    <q-input
      dense
      square
      filled
      v-model="input_size"
      type="number"
      :label="`Amount  [available: ${size}]`"
      :rules="[(val) => val <= size || `Max remaining are: ${size}`]"
      hide-hint
    />
    <q-btn
      @click="fill_order()"
      square
      class="full-width"
      :class="order.orderType == 'buy' ? 'buy' : 'sell'"
      label="Fill"
    />
  </div>
  <q-separator />
</template>

<style scoped></style>
