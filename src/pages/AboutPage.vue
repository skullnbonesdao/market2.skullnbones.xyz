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
  <q-page class="row bg-image q-pa-sm justify-center">
    <div>
      <q-img class="logo" src="logo.png" fit="contain" height="20vh" />
      <q-card flat style="width: 50vw">
        <q-card-section>
          <div class="text-h6">Disclaimer</div>
          <div class="text-subtitle2">Last updated: November 25, 2023</div>
        </q-card-section>

        <q-separator dark inset />

        <q-card-section>
          This disclaimer governs your use of the third-party services provided
          by RogueMarket. By accessing and using these services, you agree to
          the terms and conditions outlined in this disclaimer. Please read this
          disclaimer carefully before using our services.
        </q-card-section>

        <q-card-section>
          <div class="text-h6">Third-Party Services</div>
          RogueMarket offers certain services that involve third-party
          providers. These services may include but are not limited to
          API/RPC/Webserver. These third-party services are subject to their own
          terms of use and privacy policies, which you should review before
          using those services.
        </q-card-section>

        <q-card-section>
          <div class="text-h6">Third-Party Links</div>
          RogueMarket may include links to third-party websites or resources.
          These links are provided for your convenience and do not imply
          endorsement or approval by RogueMarket. We have no control over the
          content, availability, or security of these external websites.
        </q-card-section>

        <q-card-section>
          <div class="text-h6">No Endorsement or Warranty</div>
          We do not guarantee the accuracy, completeness, reliability, or
          suitability of the content, services, or products provided by
          third-party websites. RogueMarket disclaims any liability for any
          damages or losses incurred as a result of your use of third-party
          links.
        </q-card-section>

        <q-card-section>
          <div class="text-h6">Limitation of Liability</div>
          In no event shall RogueMarket be liable for any direct, indirect,
          incidental, consequential, or special damages arising out of or in any
          way connected with the use of the third-party services. This includes
          but is not limited to loss or damage of data, interruption of
          business, or any other pecuniary loss, even if advised of the
          possibility of such damages.
        </q-card-section>

        <q-card-section>
          <div class="text-h6">User Responsibility</div>
          It is your responsibility to ensure that your use of the third-party
          services complies with all applicable laws and regulations. You
          acknowledge and agree that RogueMarket is not responsible for any
          misuse or violation of third-party terms by you.
        </q-card-section>

        <q-card-section>
          <div class="text-h6">Changes to Disclaimer</div>
          RogueMarket reserves the right to modify or update this disclaimer at
          any time without prior notice. It is your responsibility to review
          this disclaimer periodically for changes. Continued use of our
          services after the posting of any changes constitutes acceptance of
          those changes.
        </q-card-section>

        <q-card-section>
          By using our website, you hereby consent to our disclaimer and agree
          to its terms.
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<style scoped>
.bg-image {
  background-image: url(public/background.webp);
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
