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
        <li>2. {{species.value}}s are not organized or affiliated with the original species creator and shouldn't be viewed as such. We want nothing to do with him.</li>
        <li>3. This document serves to support everyone in the community who owns a character in the original Svin Species and does not agree with the direction the species has been taken.</li>
        <li>4. <a href="https://opguides.info/phil/copyright/#for-the-furries" target="_blank">You cannot copyright an idea.</a></li>
        <li>5. Have fun!</li>
      </ul>
    </div>
  </UContainer>
</template>