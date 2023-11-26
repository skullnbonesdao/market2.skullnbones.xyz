<script setup lang="ts">
function myTweak(offset: any) {
  // "offset" is a Number (pixels) that refers to the total
  // height of header + footer that occupies on screen,
  // based on the QLayout "view" prop configuration

  // this is actually what the default style-fn does in Quasar
  return { minHeight: offset ? `calc(100vh - ${offset}px)` : '100vh' };
}
</script>

<template>
  <q-page class="col bg-image items-center q-pa-md">
    <q-img class="logo" src="logo.png" fit="contain" height="20vh" />
    <q-card>
      <q-card-section>
        <div class="text-h6">Disclaimer</div>
        <div class="text-subtitle2">Last updated: November 25, 2023</div>
      </q-card-section>

      <q-separator dark inset />

      <q-card-section>
        Skull&amp;Bones operates the market.skullnbones.xyz website, which
        provides the SERVICE.
      </q-card-section>

      <q-card-section>
        We are doing our best to prepare the content of this site. However,
        RogueMarket cannot warranty the expressions and suggestions of the
        contents, as well as its accuracy. In addition, to the extent permitted
        by the law, RogueMarket shall not be responsible for any losses and/or
        damages due to the usage of the information on our website. Our
        Disclaimer was generated with the help of the WebTerms Disclaimer
        Generator
      </q-card-section>

      <q-card-section>
        By using our website, you hereby consent to our disclaimer and agree to
        its terms.
      </q-card-section>

      <q-card-section>
        The links contained on our website may lead to external sites, which are
        provided for convenience only. Any information or statements that
        appeared in these sites are not sponsored, endorsed, or otherwise
        approved by RogueMarket. For these external sites, RogueMarket cannot be
        held liable for the availability of, or the content located on or
        through it. Plus, any losses or damages occurred from using these
        contents or the internet generally.
      </q-card-section>
    </q-card>
  </q-page>
</template>

<style scoped>
.bg-image {
  background-image: url(public/background.webp);
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
