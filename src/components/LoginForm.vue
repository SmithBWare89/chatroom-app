<template>
  <div id="login">
    <h2>Login</h2>
    <form @submit.prevent="handleLogin">
      <input type="email" v-model="email" placeholder="email" required />
      <input
        type="password"
        v-model="password"
        placeholder="password"
        required
      />
      <div class="error">{{ error }}</div>
      <button>Login</button>
    </form>
    <p>
      Not registered?
      <span class="switchForm" @click="switchForm">Sign Up!</span>
    </p>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import useLogin from "../composables/login";
import { useRouter } from "vue-router";

export default {
  name: "LoginForm",
  props: ["switchForm"],
  setup(props, { emit }) {
    const email = ref("");
    const password = ref("");
    const router = useRouter();
    const { error, loginUser } = useLogin();

    const handleLogin = async () => {
      await loginUser(email.value, password.value);
      if (!error.value) {
        emit("login");
      }
    };

    return { email, password, handleLogin, error };
  },
};
</script>

<style>
#login {
  background: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px 50px;
  border-radius: 10px 10px;
  box-shadow: 5px 5px rgba(117, 119, 128, 0.5);
  margin-top: 100px;
  color: #22181c;
}

#login h2 {
  font-size: 2.5rem;
}

form {
  max-width: 480px;
  margin: 0 auto;
  text-align: left;
}

input {
  display: block;
  margin: 10px 0;
  box-sizing: border-box;
  padding: 10px;
  border: 1px solid #fabd80;
  border-radius: 6px 6px;
  box-shadow: 2px 2px rgba(117, 119, 128, 0.5);
  outline: none;
}
</style>