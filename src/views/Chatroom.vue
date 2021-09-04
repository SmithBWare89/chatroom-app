<template>

<button @click="seedData(4)">Seed Data</button>
</template>

<script>
import { ref } from "@vue/reactivity";
import { LoremIpsum } from "lorem-ipsum";
import { watchEffect } from '@vue/runtime-core';

export default {
  name: "Chatroom",
  setup() {
  const data = ref('')
  const newLorem = new LoremIpsum({
    sentencesPerParagraph: {
        max: 8,
        min: 4
    },
    wordsPerSentence: {
        max: 16,
        min: 4
    }
  })

  const userArray = ['TheMonkeyWA', 'RZayayaya', 'Hideki405', 'GodGiftedTalent', 'KnuckBuck756', 'RandomRandom', 'JustGregg', 'Smokey88', 'YouTrippinCraig']

    return { data }
  }
  // data() {
  //   return {
  //     seedData: (num) => {
  //       const newLorem = new LoremIpsum({
  //         sentencesPerParagraph: {
  //           max: 8,
  //           min: 4,
  //         },
  //         wordsPerSentence: {
  //           max: 16,
  //           min: 4,
  //         },
  //       });

  //       return console.log(newLorem.generateSentences(num));
  //     },
  //   };
  // },
};
</script>

<style>
</style>
