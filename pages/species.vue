<script setup lang="ts">
import {useSpeciesStore} from "~/store/species.js";

const species = useSpeciesStore()
</script>
<template>
  <UContainer>
    <h1 class="text-center font-bold main-text" style="padding-top: 10vh; padding-bottom: 10vh; border-bottom: 1px solid white;">About {{ species.value }}</h1>
    <div style="min-height: 75vh; background: #252525; padding: 2.5em 2em;">

      <h3 class="text-center">{{species.value}} are characters from the Svin Species (hybrid inclusive) that adhere to the Semi-Open ruleset established before the May 2025 guidelines update by the <a class="font-bold underline" href="/faq/aesural">creator</a>.</h3>
      <p>Since the species creation in 2017, a growing group of people joined the species as a clone of the popular Notkea character, or as a Hybrid Svin to engage in clone and identity play.</p>
      <p>The community surrounding the species is neither lead by nor endorses the creator's views on the species, and since distancing themselves from the creator in 2018 have operated the species autonomously.</p>
      <p>The creator sold all characters related to the species in 2018, which was then subsequently resold to other parties not involved in the Svin Community.</p>
      <p>In May of 2025, the creator begin taking interest in controlling the future of the species which was not discussed with the community of people with characters in the species. This included restrictions such as: Mandatory Character Death after a fixed time period, Mandatory Sexual Orientation of new Svins, Adherance to strict guidelines and general fraternization with the creator to stay in the species definition properly, and other guidelines that were deemed too restrictive and generally self-destructive throughout the following week of publication that seemed more and more like he was being abused by a findom while piss drunk.</p>
      <p>As such, we've created this page to document the {{species.value}} species which follows the rules and guidelines that we all have been adhering to since 2018, after being functionally abandoned by the Creator.</p>
      <hr>
      <h2 class="page-header">Species Description Goes Here...</h2>

      <h2 class="page-header">Updates to these Guidelines</h2>
      <p>Updates to these documents will only be for clarification or otherwise specification purposes. Because we are preserving and solidifing the {{ species.value }} guidelines, no new features, restrictions, or dramatic changes to the species will be tolerated.</p>
    </div>
  </UContainer>
</template>