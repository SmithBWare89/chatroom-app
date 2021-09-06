<template>
  <div>
    <NavBar />
    <ChatView />
    <NewChat />
  </div>
</template>

<script>
// Components
import NewChat from '../components/NewChat.vue'
import ChatView from '../components/ChatView.vue'
import NavBar from '../components/NavBar.vue'

// Import From Vue
import { watch } from '@vue/runtime-core'
import { useRouter } from 'vue-router'

// Composables
import getUser from '../composables/getCurrentUser'


export default {
  name: "Chatroom",
  components: { NewChat, ChatView, NavBar },
  setup() {
    const { user } = getUser()
    const router = useRouter()
    
    const handleGetUser = async () => {
      if (errorMessage.value) {
        router.push({name: 'Welcome'})
      } else {
        currentUserInfo.value = user.value
      }
    }

    watch(user, () => {
      if (!user.value) {
        router.push({name: 'Welcome'})
      } else {
        currentUserInfo.value = user.value
      }
    })

    return { data, currentUserInfo }
  }
}
</script>

<style>
</style>
