<template>
    <NavBar />
    <!-- <ChatView /> -->
    <NewChat />
</template>

<script>
import ChatView from '../components/ChatView.vue'
import NewChat from '../components/NewChat.vue'
import NavBar from '../components/NavBar.vue'

export default {
  name: "Chatroom",
  components: { NavBar, ChatView, NewChat }
};
</script>

<style>

</style>
