<script setup lang="ts">
import {useSpeciesStore} from "~/store/species.js";
const seeyouincourt = ref(false);
const species = useSpeciesStore()
</script>
<template>
  <UContainer>
    <h1 class="text-center main-text font-light" style="padding-top: 10vh; font-size: 27px;">Can someone get sued for making a <a href="/species" class="font-bold underline">{{ species.value }}</a>?</h1>
    <h2 class="text-center font-bold" style="margin-bottom: 1em; font-size: 72px !important;">No.</h2>
    <div style="min-height: 75vh; background: #252525; padding: 2.5em 2em;">
      <p>The long answer: <a href="https://opguides.info/phil/copyright/#for-the-furries" target="_blank">Noooooooooooooooooooooooooooooooooooo.</a></p>
      <p>tl;dr - You cannot copyright an idea.</p>
      <hr>
      <p>The {{ species.value }} species is maintained via this site by the maintainers as a set of <u>guidelines</u>.<br><br> If you want to create a {{species.value}}, go right ahead. Literally no one can stop you. If later you want to change it in some way that other {{species.value}} aren't, go right ahead. No one can stop you.</p>
      <hr>
      <UButton label="I'm pretty sure this is wrong and you're wrong" @click="seeyouincourt = true" />
      <img v-if="seeyouincourt" src="/assets/judge-judy-plotting.gif" alt="see you in court, fuckface">
    </div>
  </UContainer>
</template>