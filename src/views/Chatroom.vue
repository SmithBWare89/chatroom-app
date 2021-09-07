<template>
  <div class="chatroom">
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
@media screen and (max-width: 600px) {
  .chatroom {
    max-width: 500px;
    margin: 0 auto;
  }
}
</style>
