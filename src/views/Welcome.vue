<template>
  <div v-if="login">
    <LoginForm :switchForm="switchForm" @login="goToChat"/>
  </div>
  <div v-else>
    <SignUpForm :switchForm="switchForm" @signup="goToChat"/>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import LoginForm from "../components/LoginForm.vue";
import SignUpForm from "../components/SignUpForm.vue";
import { useRouter } from 'vue-router';

export default {
  name: "Welcome",
  components: { LoginForm, SignUpForm },
  setup() {
    const login = ref(true);
    const router = useRouter()

    const switchForm = () => {
      login.value = !login.value;
    };

    const goToChat = () => {
      router.push({name: 'Chatroom'})
    }

    return { login, switchForm, goToChat };
  }
};
</script>

<style>
#chat {
  width: 100%;
  height: 100%;
}
</style>