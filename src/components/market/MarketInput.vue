<script setup lang="ts">
import { ref } from 'vue';
import { GmClientService, OrderSide } from '@staratlas/factory';
import { useWallet } from 'solana-wallets-vue';
import { useGlobalStore } from 'stores/globalStore';
import { Connection, PublicKey } from '@solana/web3.js';
import { GM_PROGRAM_ID } from 'stores/globalFactoryStore';
import { useGlobalUserStore } from 'stores/globalUserStore';
import { handle_confirmation } from 'stores/handle_confirmation';
import { Notify } from 'quasar';
import { handle_wallet_connected } from 'stores/handle_wallet_connected';

const tab1 = ref('buy');

const is_loading = ref(false);

const input_price = ref(0);
const input_amount = ref(0);

async function create_order(side: OrderSide) {
  is_loading.value = true;

  if (!useWallet().publicKey.value) {
    Notify.create({
      color: 'yellow',
      textColor: 'black',
      message: 'Wallet not connected!',
    });
    return;
  }

  let gmClient = new GmClientService();

  const price = await gmClient.getBnPriceForCurrency(
    useGlobalStore().connection as Connection,
    input_price.value,
    new PublicKey(useGlobalUserStore().selected_nft.mint_pair),
    GM_PROGRAM_ID
  );

  const tx = await gmClient.getInitializeOrderTransaction(
    useGlobalStore().connection as Connection,
    useWallet().publicKey.value!,
    new PublicKey(useGlobalUserStore().selected_nft.mint_asset),
    new PublicKey(useGlobalUserStore().selected_nft.mint_pair),
    input_amount.value,
    price,
    GM_PROGRAM_ID,
    side
  );

  try {
    const signature = await useWallet().sendTransaction(
      tx.transaction,
      useGlobalStore().connection as Connection
    );
    await handle_confirmation(signature);
  } catch (err) {
    Notify.create({
      color: 'red',
      message: `${err}`,
      timeout: 5000,
    });
  }
  is_loading.value = false;
}
</script>

<template>
  <q-card flat class="">
    <div class="q-pt-xs">
      <div class="text-center text-subtitle1">Order</div>
      <q-separator />
    </div>
    <q-tabs v-model="tab1" indicator-color="transparent">
      <q-tab :class="tab1 == 'buy' ? 'buy' : ''" name="buy" label="Buy" />
      <q-separator vertical />
      <q-tab :class="tab1 == 'sell' ? 'sell' : ''" name="sell" label="Sell" />
    </q-tabs>

    <q-separator />

    <div class="col q-pa-sm q-gutter-y-xs">
      <div>
        <q-input
          dense
          square
          filled
          label="Price"
          v-model="input_price"
          type="number"
        />
      </div>
      <div>
        <q-input
          dense
          square
          filled
          label="Amount"
          v-model="input_amount"
          type="number"
        />
      </div>
      <q-btn
        :loading="is_loading"
        @click="create_order(tab1 == 'buy' ? OrderSide.Buy : OrderSide.Sell)"
        square
        class="full-width"
        :class="tab1 == 'buy' ? 'buy' : 'sell'"
        :label="tab1"
      />
    </div>
  </q-card>
</template>

<style scoped></style>
