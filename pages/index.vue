<script setup lang="ts">
import {useSpeciesStore} from "~/store/species.js";

const species = useSpeciesStore()
</script>
<template>
  <UContainer>
    <h1 class="text-center font-bold main-text" style="padding-top: 10vh;">Warf.</h1>
    <h2 class="text-center font-light">Welcome. This site is about <a href="/species">{{ species.value }}</a>.</h2>

    <div style="min-height: 75vh; background: #252525; padding: 2.5em 2em; margin-top: 2em;">
      <h3>tl;dr</h3>
      <ul>
        <li>1. This site documents the offshoot species known as {{species.value}}s, which follows the species guidelines established before the changes made by the original creator in May 2025.</li>
        <li>2. {{species.value}}s are not organized or affiliated with the original species creator.</li>
        <li>3. In no way, shape, or form should {{species.value}} characters be considered "Modern" or "Current" Svins.</li>
        <li>4. This site serves to support everyone in the community who owns a character in the original Svin Species that wishes to keep the pre-2025 guideline set.</li>
        <li>5. This guideline set includes additional changes made by the community in general over the years of maintainership!</li>
        <li>6. Have fun! Warf!</li>
      </ul>
      <p><a href="/species/">Species Guidelines</a></p>

    </div>
  </UContainer>
</template>