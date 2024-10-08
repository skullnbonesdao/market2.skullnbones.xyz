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
import { useGlobalStaratlasAPIStore } from 'stores/gloablStaratlasAPIStore';
import { useRPCStore } from 'stores/rpcStore';

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
    useRPCStore().connection as Connection,
    input_price.value,
    new PublicKey(
      useGlobalStaratlasAPIStore().nfts.find(
        (n) => n.symbol == useGlobalUserStore().selected_symbol
      )!.mint_pair
    ),
    GM_PROGRAM_ID
  );

  const tx = await gmClient.getInitializeOrderTransaction(
    useRPCStore().connection as Connection,
    useWallet().publicKey.value!,
    new PublicKey(
      useGlobalStaratlasAPIStore().nfts.find(
        (n) => n.symbol == useGlobalUserStore().selected_symbol
      )!.mint_asset
    ),
    new PublicKey(
      useGlobalStaratlasAPIStore().nfts.find(
        (n) => n.symbol == useGlobalUserStore().selected_symbol
      )!.mint_pair
    ),
    input_amount.value,
    price,
    GM_PROGRAM_ID,
    side
  );

  try {
    const signature = await useWallet().sendTransaction(
      tx.transaction,
      useRPCStore().connection as Connection,
      { signers: tx.signers }
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
  <q-card square flat class="">
    <q-tabs
      class="q-px-sm q-pt-sm"
      id="tabs_buy_sell"
      align="justify"
      v-model="tab1"
      indicator-color="transparent"
    >
      <q-tab
        id="tab_buy"
        :class="tab1 == 'buy' ? 'buy' : ''"
        name="buy"
        label="Buy"
      />
      <div class="q-mx-xs text-weight-thin">or</div>
      <q-tab
        id="tab_sell"
        :class="tab1 == 'sell' ? 'sell' : ''"
        name="sell"
        label="Sell"
      />
    </q-tabs>

    <div class="col q-pa-sm q-gutter-y-xs">
      <div>
        <q-input
          id="input_price"
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
          id="input_amount"
          dense
          square
          filled
          label="Amount"
          v-model="input_amount"
          type="number"
        />
      </div>
      <q-btn
        id="create_order_btn"
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
