<template>
  <div>
    <NavBar />
    <ChatView />
    <NewChat />
  </div>

    
</template>

<script>
import NavBar from '../components/NavBar.vue'
import ChatView from '../components/ChatView.vue'
import NewChat from '../components/NewChat.vue'
import getUser from '../composables/getCurrentUser'
import { watch } from '@vue/runtime-core'
import { useRouter } from 'vue-router'

export default {
  name: 'Chatroom',
  components: { NavBar, NewChat, ChatView },
  setup() {
    const { user } = getUser()
    const router = useRouter()

    watch(user, () => {
      if (!user.value) {
        router.push({name: 'Welcome'})
      }
    })
  }
};
</script>

<style>

</style>
