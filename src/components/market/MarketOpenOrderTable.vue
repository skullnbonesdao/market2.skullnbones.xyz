<script setup lang="ts">
import {
  GM_PROGRAM_ID,
  useGlobalFactoryStore,
} from 'stores/globalFactoryStore';
import { GmClientService, Order, OrderSide } from '@staratlas/factory';
import { useGlobalStore } from 'stores/globalStore';
import { useWallet } from 'solana-wallets-vue';
import { onMounted, ref, watch } from 'vue';
import { Connection, PublicKey } from '@solana/web3.js';
import { CURRENCIES } from 'stores/const';
import AsssetIcon from 'components/elements/AsssetIcon.vue';
import CurrencyIcon from 'components/elements/CurrencyIcon.vue';
import { useGlobalStaratlasAPIStore } from '../../stores/gloablStaratlasAPIStore';
import { Notify } from 'quasar';
import { useGlobalUserStore } from 'stores/globalUserStore';
import { handle_confirmation } from 'stores/handle_confirmation';

const pagination = ref({
  rowsPerPage: 0,
});

const open_orders = ref<Order[]>();

const columns = [
  {
    name: 'asset',
    label: 'Asset',
    align: 'left',
    field: 'orderQtyRemaining',
    sortable: true,
  },
  {
    name: 'pair',
    label: 'Pair',
    align: 'left',
    field: 'orderQtyRemaining',
    sortable: true,
  },

  {
    name: 'side',
    label: 'Side',
    align: 'left',
    field: 'orderQtyRemaining',
    sortable: true,
  },
  {
    name: 'price',
    label: 'Price',
    align: 'right',
    field: 'orderQtyRemaining',
    sortable: true,
  },

  {
    name: 'volume',
    label: 'Volume',
    align: 'right',
    field: 'orderQtyRemaining',
    sortable: true,
  },

  {
    name: 'size',
    label: 'Size',
    align: 'right',
    field: 'orderQtyRemaining',
    sortable: true,
  },

  {
    name: 'actions',
    align: 'right',
    field: 'orderQtyRemaining',
  },
];

onMounted(async () => {
  await get_open_orders();
});

watch(
  () => useWallet().publicKey.value,
  async () => {
    await get_open_orders();
  }
);

async function get_open_orders() {
  if (useWallet().publicKey) {
    open_orders.value = [];

    let gmClient = new GmClientService();

    open_orders.value = await gmClient.getOpenOrdersForPlayer(
      useGlobalStore().connection as Connection,
      useWallet().publicKey.value!,
      GM_PROGRAM_ID
    );
  }
}

async function close_order(order: Order) {
  if (!useWallet().publicKey.value) {
    Notify.create({
      color: 'yellow',
      textColor: 'black',
      message: 'Wallet not connected!',
    });
    return;
  }

  let gmClient = new GmClientService();

  const tx = await gmClient.getCancelOrderTransaction(
    useGlobalStore().connection as Connection,
    new PublicKey(order.id),
    useWallet().publicKey.value!,
    GM_PROGRAM_ID
  );

  try {
    const signature = await useWallet().sendTransaction(
      tx.transaction,
      useGlobalStore().connection as Connection
    );
    await handle_confirmation(signature);
    await get_open_orders();
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
  <q-card flat>
    <q-spinner-cube
      v-if="!open_orders?.length"
      class="full-width q-ma-md"
      size="xl"
      color="secondary"
    />
    <q-table
      v-else
      :rows="open_orders"
      dense
      square
      flat
      virtual-scroll
      :columns="columns"
      :pagination="pagination"
      :rows-per-page-options="[0]"
      :virtual-scroll-sticky-size-start="48"
      row-key="name"
      hide-bottom
    >
      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td key="asset" :props="props">
            <div class="row q-gutter-x-sm">
              <AsssetIcon
                :url="'sa_files/webp/' + props.row.orderMint + '.webp'"
              />
              <div>
                {{
                  useGlobalStaratlasAPIStore().raw.find(
                    (item) => item.mint == props.row.orderMint
                  ).name
                }}
              </div>
            </div>
          </q-td>
          <q-td key="pair" :props="props">
            {{
              useGlobalStaratlasAPIStore().raw.find(
                (item) => item.mint == props.row.orderMint
              ).symbol
            }}{{
              CURRENCIES.find((c) => c.mint == props.row.currencyMint).name
            }}
          </q-td>
          <q-td key="side" :props="props">
            <q-badge
              class="text-uppercase"
              :class="props.row.orderType == 'buy' ? 'buy' : 'sell'"
            >
              {{ props.row.orderType }}
            </q-badge>
          </q-td>
          <q-td key="price" :props="props">
            <div class="row justify-end q-gutter-x-sm">
              <div>
                {{
                  props.row.price * Math.pow(10, -props.row.currencyDecimals)
                }}
              </div>
              <CurrencyIcon
                :currency="
                  CURRENCIES.find((c) => c.mint == props.row.currencyMint)
                "
              />
            </div>
          </q-td>
          <q-td key="volume" :props="props">
            {{
              props.row.orderOriginationQty *
              (props.row.price * Math.pow(10, -props.row.currencyDecimals))
            }}
          </q-td>

          <q-td key="size" :props="props">
            {{ props.row.orderQtyRemaining }}/{{
              props.row.orderOriginationQty
            }}
          </q-td>

          <q-td key="actions" :props="props">
            <q-btn
              color="primary"
              size="xs"
              icon="cancel"
              @click="close_order(props.row)"
            ></q-btn>
          </q-td>
        </q-tr>
      </template>
    </q-table>
  </q-card>
</template>

<style scoped></style>
