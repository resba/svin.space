<script setup lang="ts">
import {useSpeciesStore} from "~/store/species.js";

const species = useSpeciesStore()
</script>
<template>
  <UContainer>
    <h1 class="text-center font-bold main-text" style="padding-top: 10vh; padding-bottom: 10vh; border-bottom: 1px solid white;">About {{ species.value }}</h1>
    <div style="min-height: 75vh; background: #252525; padding: 2.5em 2em;">

      <h3 class="text-center">{{species.value}} are characters from the Svin Species (hybrid inclusive) that adhere to the Semi-Open ruleset established before the May 2025 guidelines update by the original creator.</h3>
      <p>Since the species creation in 2017, a growing group of people joined the species as a clone of the popular Notkea character, or as a Hybrid Svin to engage in clone and identity play.</p>
      <p>The community surrounding the species is neither lead by nor endorses the creator's views on the species, and since distancing themselves from the original creator in 2018 have operated the species autonomously.</p>
      <p>In May of 2025, the creator begin taking interest in controlling the future of the species which was not discussed with the community of people with characters in the species. This included restrictions such as: Mandatory Character Death after a fixed time period, Mandatory Sexual Orientation of new Svins, Adherance to strict guidelines and general fraternization with the creator to stay in the species definition properly, and other guidelines that were deemed too restrictive and generally self-destructive.</p>
      <p>As such, we've created this page to document the {{species.value}} species which follows the rules and guidelines that we all have been adhering to since 2018, after being functionally abandoned.</p>
      <hr>
      <h2 class="page-header">Species Description &amp; Features</h2>
      <p>In general, This describes the base canid-like form of a {{species.value}}. Everything can vary, especially when merging with other characters and borrowing their features.</p>
      <p>Overall features:</p>
      <ul>
        <li>Jackal-bat-dragon creature</li>
        <li>Mainly canid body and head</li>
        <li>Long draconic tail</li>
        <li>Pointy fangs sticking out</li>
        <li>Fluffy neck and above tail</li>
        <li>On the legs, the thigh fluff and freckles are optional</li>
        <li>Claws on hand and feet paws</li>
        <li>Pads only on feet paws</li>
        <li>Tongue can extend</li>
        <li>Is usually found "Warfing", or saying "Warf" as a communal call/cry.</li>
      </ul>
      <p>Material:</p>
      <ul>
        <li>Body, including fluff, is fully rubber</li>
        <li>Can melt at will, partially and fully</li>
        <li>Goo has a viscosity between tar and liquid latex</li>
        <li>Rubber is shiny both in solid and liquid forms</li>
      </ul>
      <p>Colors:</p>
      <ul>
        <li>Body and insides: dark-grey / black</li>
        <li>Ears are usually black inside and outside</li>
        <li>Fur, claws, nose, cock, feet paw pads, tongue: golden</li>
        <li>Teeth and fangs: white</li>
        <li>Cum and saliva are deep black</li>
      </ul>
      <p>Eyes:</p>
      <ul>
        <li>Deep black sclera</li>
        <li>Golden iris</li>
        <li>Glows in the dark</li>
        <li>“Rings” when hypnotised or hypnotising</li>
      </ul>
      <p>Build and gender:</p>
      <ul>
        <li>Can swap gender at will</li>
        <li>Enjoys being “in-between”, combining attributes</li>
        <li>Usually feminine, “twink” male</li>
        <li>Can also be muscular male or female</li>
        <li>Typically wears a bunch of accessories, and many characters can share the same accessory set due to the clone-play nature of the character. Those can vary depending on the context and scene.</li>
        <li>Sexual Orientation, Gender Identity, and Fetish Preference are not Perscribed by the Species</li>
      </ul>

      <p>General Accessories often seen on {{species.value}}:</p>
      <ul>
        <li>Accessories can also melt along with {{species.value}}</li>
        <li>Crown is metallic</li>
        <li>Collar and leg cuffs are rubber and metal</li>
        <li>Sleeves are shiny fabric</li>
        <li>Skirt is fabric</li>
        <li>Panties under the skirt are striped white and pink silk</li>
        <li>Alternative bikini panties are silky black with a golden outline</li>
      </ul>

      <h2 class="page-header">Updates to these Guidelines</h2>
      <p>Updates to these documents will only be for clarification or otherwise specification purposes. Because we are preserving and solidifying the {{ species.value }} guidelines, no new features, restrictions, or dramatic changes to the species will be tolerated.</p>
      <p>In addition, this document constitutes the community's preservation and continuation of their characters, so not all original species definitions have carried over.</p>
    </div>
  </UContainer>
</template>