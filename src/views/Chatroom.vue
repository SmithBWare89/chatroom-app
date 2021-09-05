<template>
    <ChatView :data="data" />
    <NewChat />
</template>

<script>
import { ref } from "@vue/reactivity";
import { LoremIpsum } from "lorem-ipsum";
import { onMounted } from '@vue/runtime-core';
import ChatView from '../components/ChatView.vue'
import NewChat from '../components/NewChat.vue'

export default {
  name: "Chatroom",
  components: { ChatView, NewChat },
  setup() {
    const data = ref([]);
    const uri = ref("http://localhost:3000/chats");
    const newLorem = new LoremIpsum({
      sentencesPerParagraph: {
        max: 2,
        min: 1,
      },
      wordsPerSentence: {
        max: 8,
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
            for (let i = 0; i < 30; i++) {
              const randomIndex = Math.floor(
                Math.random() * (userArray.value.length - 1) + 1
              );
              const randomLength = Math.floor(Math.random() * 2);
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
