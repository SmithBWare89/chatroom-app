<template>
  <div v-for="user in loremLoop" :key="user.id">
    <p>{{ user.username }}</p>
    {{ user.comment}}
  </div>
  <button @click="loremLoop">Seed Data</button>
</template>

<script>
import { computed, ref } from "@vue/reactivity";
import { LoremIpsum } from 'lorem-ipsum'

export default {
  name: "Chatroom",
  setup() {
    const data = ref([])
    const uri = ref('http://localhost:3000/chats')
    const newLorem = new LoremIpsum({
      sentencesPerParagraph: {
        max: 8,
        min: 4,
      },
      wordsPerSentence: {
        max: 16,
        min: 4,
      },
    });

    const userArray = ref([
      "TheMonkeyWA",
      "RZayayaya",
      "Hideki405",
      "GodGiftedTalent",
      "KnuckBuck756",
      "RandomRandom",
      "JustGregg",
      "Smokey88",
      "YouTrippinCraig",
    ]);

    const loremLoop = computed(async () => {
      try {
        
        // for (let i = 0; i < 100; i++) {
        //   const randomIndex = Math.floor(
        //     Math.random() * (userArray.value.length - 1) + 1
        //   );
        //   const randomLength = Math.floor(Math.random() * (16 - 4) + 4);
        //   const res = await fetch(uri.value, {
        //     method: "POST",
        //     headers: { "Content-Type": "application/json" },
        //     body: JSON.stringify({
        //       username: userArray.value[randomIndex],
        //       comment: newLorem.generateSentences(randomLength),
        //     }),
        //   })

        //   data.value = await res.json()

        // }
      } catch (error) {
        console.log(error);
      }
    });

    return {loremLoop, userArray, newLorem}
  },
};
</script>

<style>
</style>
