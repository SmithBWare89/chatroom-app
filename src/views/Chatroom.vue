<template>
    <NavBar :currentUserInfo="currentUserInfo"/>
    <ChatView :data="data" />
    <NewChat />
</template>

<script>
import { ref } from "@vue/reactivity"
import { onMounted, watch, watchEffect } from '@vue/runtime-core'
import ChatView from '../components/ChatView.vue'
import NewChat from '../components/NewChat.vue'
import NavBar from '../components/NavBar.vue'
import getCurrentUser from '../composables/getCurrentUser'
import importComments from '../composables/importComments'
import { useRouter } from 'vue-router'


export default {
  name: "Chatroom",
  components: { ChatView, NewChat, NavBar },
  setup() {
    const data = ref([]);
    const currentUserInfo = ref({})
    const router = useRouter()
    const { errorMessage, currentUser } = getCurrentUser();
    const { error, getComments, sortedData } = importComments();
    
    const handleGetUser = async () => {
      const retrievedUserInfo = await currentUser()
      if (errorMessage.value) {
        router.push('/')
      }
      currentUserInfo.value = retrievedUserInfo
    }

    watch(() => {
      data.value = sortedData.value
    }, sortedData)

    onMounted(async () => {
      await handleGetUser()
      await getComments()
    })

    return { data, currentUserInfo };
  },
};
</script>

<style>

</style>
