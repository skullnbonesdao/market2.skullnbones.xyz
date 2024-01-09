<template>
  <q-btn @click="onClick" flat square>
    <q-avatar size="sm">
      <img alt="jup" src="images/jupiter.svg" />
    </q-avatar>
    <q-tooltip>Swap using Jupiter.ag</q-tooltip>
  </q-btn>
</template>

<script>
import { useGlobalStore } from 'stores/globalStore';

export default {
  data: () => ({}),
  mounted() {
    let recaptchaScript = document.createElement('script');
    recaptchaScript.setAttribute('src', 'https://terminal.jup.ag/main-v2.js');
    document.head.appendChild(recaptchaScript);
  },
  methods: {
    onClick() {
      console.log('sjkajdal');
      window.Jupiter.init({
        endpoint: useGlobalStore().rpc_selected.url,
      });
    },
  },
};
</script>
