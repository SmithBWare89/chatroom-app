<template>
    <NavBar :currentUserInfo ="currentUserInfo"/>
    <ChatView :data="data" />
    <NewChat :data="data" />
</template>

<script>
import { ref } from "@vue/reactivity"
import ChatView from '../components/ChatView.vue'
import NewChat from '../components/NewChat.vue'
import NavBar from '../components/NavBar.vue'
import getCurrentUser from '../composables/getCurrentUser'
import generateLoremIpsum from '../composables/generateLoremIpsum'
import useGetComments from '../composables/useGetComments'
import { useRouter } from 'vue-router'
import { projectFirestore } from '../firebase/config'
import { onMounted } from '@vue/runtime-core'


export default {
  name: "Chatroom",
  components: { NavBar, ChatView, NewChat },
  setup() {
    const data = ref([]);
    const currentUserInfo = ref({})
    const router = useRouter()
    const { errorMessage, currentUser } = getCurrentUser();
    const { getLorem } = generateLoremIpsum()
    const { getComments } = useGetComments()

    projectFirestore.collection('comments')
      .orderBy('createdAt', 'asc')
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
    
    const fetchData = async () => {
      data.value = await getComments()
    }

    handleGetUser()

    return { data, currentUserInfo, fetchData };
  },
};
</script>

<style>

</style>
