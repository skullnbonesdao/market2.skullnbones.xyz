<script setup lang="ts">
import { ref } from 'vue';
import { useGlobalStore } from 'stores/globalStore';
import { Connection, PublicKey, Transaction } from '@solana/web3.js';
import {
  ASSOCIATED_TOKEN_PROGRAM_ID,
  createAssociatedTokenAccountInstruction,
  createTransferInstruction,
  getAssociatedTokenAddress,
  TOKEN_PROGRAM_ID,
} from '@solana/spl-token';
import * as spl from '@solana/spl-token';
import { useWallet } from 'solana-wallets-vue';
import { Notify } from 'quasar';
import { handle_confirmation } from 'components/messages/handle_confirmation';

const show_modal = ref(false);

const props = defineProps(['mint', 'decimals']);
const input_receiver = ref('6AzZCoxBrJnfWejYZmqcdKUvzdG6yTbRLyuqVYizHWy4');
const input_amount = ref(0);

async function send_token() {
  const tx = new Transaction();

  const reciever_ata = await getAssociatedTokenAddress(
    new PublicKey(props.mint),
    new PublicKey(input_receiver.value),
  );

  console.log(reciever_ata);

  const sender_ata = await getAssociatedTokenAddress(
    new PublicKey(props.mint),
    useWallet().publicKey.value,
  );

  const receiverAccount =
    await useGlobalStore().connection.getAccountInfo(reciever_ata);
  if (receiverAccount === null) {
    tx.add(
      createAssociatedTokenAccountInstruction(
        useWallet().publicKey.value,
        reciever_ata,
        new PublicKey(input_receiver.value),
        new PublicKey(props.mint),
      ),
    );
  }

  tx.add(
    createTransferInstruction(
      sender_ata,
      reciever_ata,
      useWallet().publicKey.value,
      input_amount.value * Math.pow(10, props.decimals),
    ),
  );

  try {
    const signature = await useWallet().sendTransaction(
      tx,
      useGlobalStore().connection as Connection,
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
</script>

<template>
  <q-btn
    square
    color="primary"
    size="sm"
    icon="send"
    @click="show_modal = true"
  ></q-btn>

  <q-dialog v-model="show_modal">
    <q-card>
      <q-toolbar class="q-mt-md">
        <q-avatar>
          <q-icon name="send" />
        </q-avatar>

        <q-toolbar-title
          ><span class="text-weight-bold">Send Token</span>
          <div class="text-overline">{{ mint }}</div>
        </q-toolbar-title>

        <q-btn flat round dense icon="close" v-close-popup />
      </q-toolbar>

      <q-card-section class="q-gutter-y-sm">
        <div>
          <q-input filled square label="Receiver" v-model="input_receiver" />
        </div>
        <div class="row">
          <q-input
            filled
            square
            class="col"
            label="Amount"
            v-model="input_amount"
          />
          <q-btn square color="primary" icon="send" @click="send_token()" />
        </div>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<style scoped lang="sass"></style>
