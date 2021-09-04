<template>
  <div v-if="data.length">
    <ChatView :data="data" />
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import { LoremIpsum } from "lorem-ipsum";
import { onMounted } from '@vue/runtime-core';
import ChatView from '../components/ChatView.vue'

export default {
  name: "Chatroom",
  components: { ChatView },
  setup() {
    const data = ref([]);
    const uri = ref("http://localhost:3000/chats");
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

    onMounted(() => {
        (async () => {
        try {
          const dataPull = await fetch(uri.value);
          const dataJson = await dataPull.json();

          if (!dataJson.length) {
            for (let i = 0; i < 100; i++) {
              const randomIndex = Math.floor(
                Math.random() * (userArray.value.length - 1) + 1
              );
              const randomLength = Math.floor(Math.random() * (5 - 2) + 2);
              const res = await fetch(uri.value, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                  username: userArray.value[randomIndex],
                  comment: newLorem.generateSentences(randomLength),
                }),
              });

              data.value.push(await res.json());
            }
          } else {
            data.value = dataJson
          }
        } catch (error) {
          console.log(error);
        }
      })()
    })

    return { data };
  },
};
</script>

<style>
</style>
