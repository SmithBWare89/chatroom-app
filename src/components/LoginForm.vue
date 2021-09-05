<template>
  <div id="login">
    <h2>Login</h2>
    <form @submit.prevent="">
      <input
        type="text"
        v-model="username"
        placeholder="email / display name"
        required
      />
      <input 
        type="text" 
        v-model="password" 
        placeholder="password" 
        required 
      />
      <div>
        <button>Login</button>
      </div>
    </form>
    <p>Not registered? <span class="switchForm" @click="switchForm">Sign Up!</span></p>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
export default {
  name: "LoginForm",
  props: ['switchForm'],
  setup() {
    const username = ref("");
    const password = ref("");

    return { username, password };
  },
  methods: {
  }
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

@media screen and (max-width: 575px) {
}
</style>