<template>
  <div v-if="login">
    <LoginForm />
  </div>
  <div v-else>
    <SignUpForm />
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

    return { login }
  }
}
</script>

<style scoped>
  #chat {
    width: 100%;
    height: 100%;
  }
</style>