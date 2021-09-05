<template>
  <div>
    <div id="signup">
      <h2>Sign Up</h2>
      <form @submit.prevent="handleSignup(displayName, password, email)">
        <input
          type="text"
          v-model="displayName"
          placeholder="display name"
          required
        />
        <input
          type="text"
          v-model="email"
          placeholder="email"
          required
        />
        <input type="text" v-model="password" placeholder="password" required />
        <div>
          <button>Signup</button>
        </div>
      </form>
      <p>
        Already registered?
        <span class="switchForm" @click="switchForm">Login here!</span>
      </p>
    </div>
  </div>
  <div v-if="errorMessage.length">
    <p>Error!</p>
  </div>
</template>

<script>
import { watch } from '@vue/runtime-core';
import signup from "../composables/signup";

export default {
  name: "SignUpForm",
  props: ['switchForm'],
  setup() {
    const { displayName, password, email, handleSignup, errorMessage, user } = signup();

    watch(user, () => console.log(user))

    return { displayName, password, email, handleSignup, errorMessage };
  },
  method: {
  }
};
</script>

<style>
#signup {
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

#signup h2 {
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

#signup button {
  padding: 10px 20px;
  border-radius: 6px 6px;
  box-shadow: 2px 2px rgba(117, 119, 128, 0.5);
  background: #61e5a5;
  color: #ffffff;
  border: none;
  font-weight: 700;
}

#signup button:hover {
  background: #ffffff;
  color: #61e5a5;
}

@media screen and (max-width: 575px) {
}
</style>