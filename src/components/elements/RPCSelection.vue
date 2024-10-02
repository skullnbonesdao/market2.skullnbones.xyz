<script setup lang="ts">

import { useRPCStore } from 'stores/rpcStore';
import { RPC_NETWORKS } from 'stores/interfaces/RPC_Networks';
import { useQuasar } from 'quasar';
import { watch } from 'vue';
const q = useQuasar();

watch(()=> useRPCStore().rpc_stored_name, () => {
  update_selection()
})

function update_selection() {
  useRPCStore().show_rpc_select = false;
  useRPCStore().update_connection();
  q.notify({
    type: 'positive',
    icon: 'info',
    message: `RPC has been updated to: ${useRPCStore().rpc_stored_name}`,
    timeout: 5000,
  });
}
</script>

<template>
  <q-card flat class="text-white q-pa-md" style="width: 500px">


    <q-card-section class="q-pt-md">
      <q-select
        square
        borderless
        standout
        color="white"
        v-model="useRPCStore().rpc_stored_name"
        :options="RPC_NETWORKS.map((rpc) => rpc.name)"
        label="Select an RPC to use:"
      />
    </q-card-section>


  </q-card>
</template>

<style scoped>

</style>
