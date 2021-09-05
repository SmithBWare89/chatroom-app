<template>
  <div v-if="login">
    <LoginForm :switchForm="switchForm"/>
  </div>
  <div v-else>
    <SignUpForm :switchForm="switchForm"/>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import LoginForm from '../components/LoginForm.vue'
import SignUpForm from '../components/SignUpForm.vue'
export default {
  name: 'Welcome',
  components: { LoginForm, SignUpForm },
  setup() {
    const login = ref(true)

    const switchForm = () => {
      login.value = !login.value
    }

    return { login, switchForm }
  },
  method: {
  }
}
</script>

<style>
  #chat {
    width: 100%;
    height: 100%;
  }

</style>