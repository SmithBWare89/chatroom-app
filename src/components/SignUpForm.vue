<template>
  <div>
    <div id="signup">
      <h2>Sign Up</h2>
      <form @submit.prevent="handleSubmit">
        <input
          type="text"
          v-model="displayName"
          placeholder="display name"
          required
        />
        <input type="email" v-model="email" placeholder="email" required />
        <input
          type="password"
          v-model="password"
          placeholder="password"
          required
        />
        <div class="error" v-if="error">{{ error }}</div>
        <button>Signup</button>
      </form>
      <p>
        Already registered?
        <span class="switchForm" @click="switchForm">Login here!</span>
      </p>
    </div>
  </div>
</template>

<script>
// Composable
import useSignup from "../composables/signup";

// Vue Import
import { ref } from "@vue/reactivity";

export default {
  name: "SignUpForm",
  props: ["switchForm"],
  setup(props, { emit }) {
    // Variables
    const displayName = ref("");
    const password = ref("");
    const email = ref("");
    const { error, signup } = useSignup();

    // Async function to handle signup submittion
    const handleSubmit = async () => {
      // Send data to signup on server
      await signup(email.value, password.value, displayName.value);
      // If server returns no error then emit signup to Welcome.vue
      if (error.value === null) {
        emit("signup");
      }
    };

    return { displayName, password, email, handleSubmit, error };
  },
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