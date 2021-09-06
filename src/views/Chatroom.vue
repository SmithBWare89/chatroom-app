<template>
    <NavBar :currentUserInfo ="currentUserInfo"/>
    <ChatView :data="data" />
    <NewChat />
</template>

<script>
import { ref } from "@vue/reactivity"
import { onMounted } from '@vue/runtime-core'
import ChatView from '../components/ChatView.vue'
import NewChat from '../components/NewChat.vue'
import NavBar from '../components/NavBar.vue'
import getCurrentUser from '../composables/getCurrentUser'
import generateLoremIpsum from '../composables/generateLoremIpsum'
import { useRouter } from 'vue-router'
import { projectFirestore } from '../firebase/config'


export default {
  name: "Chatroom",
  components: { NavBar, ChatView, NewChat },
  setup() {
    const data = ref([]);
    const currentUserInfo = ref({})
    const router = useRouter()
    const { errorMessage, currentUser } = getCurrentUser();
    const { getLorem } = generateLoremIpsum()

    projectFirestore.collection('comments')
      .orderBy('createdAt', 'desc')
      .onSnapshot(async (snap) => {
        data.value = snap.docs.map(doc => {
          return {...doc.data(), id: doc.id}
        })

        if (data.value.length === 0) {
          data.value = await getLorem()
        }
      })
    
    const handleGetUser = async () => {
      if (errorMessage.value) {
        router.push({name: 'Welcome'})
      } else {
        currentUserInfo.value = await currentUser()
      }
    }



    onMounted(async () => {
      await handleGetUser()
    })

    return { data, currentUserInfo };
  },
};
</script>

<style>

</style>
