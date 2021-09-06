<template>
  <div>
    <NavBar @logout="goToMain" :user="user"/>
    <ChatView />
    <NewChat />
  </div>
</template>

<script>
import ChatView from "../components/ChatView.vue";
import NewChat from "../components/NewChat.vue";
import NavBar from "../components/NavBar.vue";
import { useRouter } from "vue-router";
import handleGetUser from "../composables/getCurrentUser";
import { watch } from "@vue/runtime-core";
export default {
  name: "Chatroom",
  components: { NavBar, ChatView, NewChat },
  setup() {
    const router = useRouter();
    const { user } = handleGetUser();

    watch(user, () => {
      if (!user.value) {
        router.push({ name: "Welcome" });
      }
    });

    const goToMain = () => {
      router.push({ name: "Welcome" });
    };

    return { goToMain, user };
  },
};
</script>

<style>
</style>
