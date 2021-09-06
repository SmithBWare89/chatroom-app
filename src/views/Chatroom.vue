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

export default {
  name: "Chatroom",
  components: { NewChat, ChatView, NavBar }
}
</script>

<style>
</style>
