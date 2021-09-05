<template>
    <NavBar :currentUserInfo="currentUserInfo"/>
    <ChatView :data="data" />
    <NewChat />
</template>

<script>
import { ref } from "@vue/reactivity"
import { LoremIpsum } from "lorem-ipsum"
import { onMounted, watchEffect } from '@vue/runtime-core'
import ChatView from '../components/ChatView.vue'
import NewChat from '../components/NewChat.vue'
import NavBar from '../components/NavBar.vue'
import getCurrentUser from '../composables/getCurrentUser'
import { useRouter } from 'vue-router'


export default {
  name: "Chatroom",
  components: { ChatView, NewChat, NavBar },
  setup() {
    const data = ref([]);
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
    const currentUserInfo = ref({})
    const router = useRouter()
    const { errorMessage, currentUser } = getCurrentUser();
    
    const handleGetUser = async () => {
      const retrievedUserInfo = await currentUser()
      if (errorMessage) {
        router.push('/')
      }
      currentUserInfo.value = retrievedUserInfo
    }

    onMounted(() => {
      handleGetUser()
    })    

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

    // onMounted(() => {
    //     (async () => {
    //     try {
    //       const dataPull = await fetch(uri.value);
    //       const dataJson = await dataPull.json();

    //       if (!dataJson.length) {
    //         for (let i = 0; i < 0; i++) {
    //           const randomIndex = Math.floor(
    //             Math.random() * (userArray.value.length - 1) + 1
    //           );
    //           const randomLength = Math.floor(Math.random() * 2);
    //           const res = await fetch(uri.value, {
    //             method: "POST",
    //             headers: { "Content-Type": "application/json" },
    //             body: JSON.stringify({
    //               username: userArray.value[randomIndex],
    //               comment: newLorem.generateSentences(randomLength),
    //             }),
    //           });

    //           data.value.push(await res.json());
    //         }
    //       } else {
    //         data.value = dataJson
    //       }
    //     } catch (error) {
    //       console.log(error);
    //     }
    //   })()
    // })

    return { data, currentUserInfo };
  },
};
</script>

<style>

</style>
