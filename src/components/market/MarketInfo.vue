<script setup lang="ts">
import SolscanLink from 'components/buttons/SolscanLink.vue';
import SolscanButton from 'components/elements/SolscanButton.vue';
import StarAtlasButton from 'components/elements/StarAtlasButton.vue';
import { useGlobalStore } from 'stores/globalStore';
import { useWallet } from 'solana-wallets-vue';
import { useGlobalUserStore } from 'stores/globalUserStore';
import { useGlobalStaratlasAPIStore } from 'stores/gloablStaratlasAPIStore';
import MarketPriceChangeElement from 'components/elements/MarketPriceChangeElement.vue';
import { format_address } from '../../stores/format_address';
import { computed, onMounted, ref, watch } from 'vue';
import { PublicKey } from '@solana/web3.js';
import { TOKEN_PROGRAM_ID } from '@solana/spl-token';
import { CURRENCIES } from 'stores/const';
import PairIcon from 'components/elements/PairIcon.vue';
import MarketPiriceElement from 'components/market/MarketPiriceElement.vue';
import { useRPCStore } from 'stores/rpcStore';

const supply = ref();
const holder = ref();

async function fetch_token_supply() {
  supply.value = 0;
  supply.value = (
    await useRPCStore().connection.getTokenSupply(
      new PublicKey(
        useGlobalStaratlasAPIStore().nfts.find(
          (nft) => nft.symbol == useGlobalUserStore().selected_symbol
        )?.mint_asset ?? ''
      )
    )
  ).value.uiAmount;
}

async function fetch_token_holders() {
  holder.value = 0;
  holder.value = (
    await useRPCStore().connection.getParsedProgramAccounts(
      TOKEN_PROGRAM_ID,
      {
        filters: [
          {
            dataSize: 165,
          },
          {
            memcmp: {
              offset: 0,
              bytes:
                useGlobalStaratlasAPIStore().nfts.find(
                  (nft) => nft.symbol == useGlobalUserStore().selected_symbol
                )?.mint_asset ?? '',
            },
          },
        ],
      }
    )
  ).filter(
    (account) => account.account.data.parsed.info.tokenAmount.uiAmount > 0
  );
}

onMounted(async () => {
  try {
    await fetch_token_supply();
    await fetch_token_holders();
  }catch (err) {
    console.error("could not fetch holders or supply");
  }
});

watch(
  () => useGlobalUserStore().selected_symbol,
  async () => {
    await fetch_token_supply();
    await fetch_token_holders();
  }
);
</script>

<template>
  <q-card square flat class="q-pa-sm">
    <div class="row items-center">
      <PairIcon
        size="xl"
        :asset_image_url="
          useGlobalStaratlasAPIStore().nfts.find(
            (n) => n.symbol == useGlobalUserStore().selected_symbol
          )?.img_path
        "
        :currency="
          CURRENCIES.find(
            (c) =>
              c.mint ==
              useGlobalStaratlasAPIStore().nfts.find(
                (n) => n.symbol == useGlobalUserStore().selected_symbol
              )?.mint_pair
          )
        "
      />

      <div class="col text-right">
        <div class="text-h6">
          {{
            useGlobalUserStore().selected_symbol
              ? useGlobalUserStore().selected_symbol
              : '*none*'
          }}
        </div>
        <div class="text-subtitle1">
          {{
            useGlobalUserStore().selected_symbol
              ? useGlobalStaratlasAPIStore().nfts.find(
                  (nft) => nft.symbol == useGlobalUserStore().selected_symbol
                ).name
              : '*none*'
          }}
        </div>
      </div>
    </div>

    <div class="col">
      <div class="row justify-between items-center">
        <div class="text-weight-light">Price</div>

        <MarketPiriceElement />
      </div>

      <div class="row justify-between items-center">
        <div class="text-weight-light">Address</div>
        <div style="font-size: x-small" class="text-body1">
          {{
            useGlobalStaratlasAPIStore().nfts.find(
              (nft) => nft.symbol == useGlobalUserStore().selected_symbol
            ).mint_asset
          }}
        </div>
      </div>
      <div class="row justify-between items-center">
        <div class="text-weight-light">Type</div>
        <div class="text-body1">
          {{
            useGlobalStaratlasAPIStore()
              .raw.find(
                (raw) =>
                  raw.mint ==
                  useGlobalStaratlasAPIStore().nfts.find(
                    (nft) => nft.symbol == useGlobalUserStore().selected_symbol
                  ).mint_asset
              )
              .attributes.itemType.toUpperCase()
          }}
        </div>
      </div>
      <div class="row justify-between items-center">
        <div class="text-weight-light">Rarity</div>
        <div class="text-body1">
          {{
            useGlobalStaratlasAPIStore()
              .raw.find(
                (raw) =>
                  raw.mint ==
                  useGlobalStaratlasAPIStore().nfts.find(
                    (nft) => nft.symbol == useGlobalUserStore().selected_symbol
                  ).mint_asset
              )
              .attributes.rarity.toUpperCase()
          }}
        </div>
      </div>

      <div class="row justify-between items-center">
        <div class="text-weight-light">Supply</div>
        <div class="text-body1">
          {{ supply }}
        </div>
      </div>
      <div class="row justify-between items-center">
        <div class="text-weight-light">Holders</div>
        <div class="text-subtitle1">
          {{ holder?.length }}
        </div>
      </div>
    </div>
    <div class="row q-my-xs q-gutter-x-sm justify-end">
      <SolscanButton
        class="col"
        :mint="
          useGlobalStaratlasAPIStore().nfts.find(
            (nft) => nft.symbol == useGlobalUserStore().selected_symbol
          )?.mint_asset
        "
      />
      <StarAtlasButton
        class="col"
        :mint="
          useGlobalStaratlasAPIStore().nfts.find(
            (nft) => nft.symbol == useGlobalUserStore().selected_symbol
          )?.mint_asset
        "
      />
    </div>
    <div class="col">
      <div class="row">
        <MarketPriceChangeElement class="col" timespan="day" />
        <MarketPriceChangeElement class="col" timespan="week" />
      </div>
      <div class="row">
        <MarketPriceChangeElement class="col" timespan="month" />
        <MarketPriceChangeElement class="col" timespan="year" />
      </div>
    </div>
  </q-card>
</template>

<style scoped></style>
