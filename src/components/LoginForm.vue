<template>
  <div id="login">
    <h2>Login</h2>
      <form @submit.prevent="">
        <input type="text" placeholder="email / display name" required />
        <input type="text" placeholder="password" required />
        <div>
            <button>Login</button>
        </div>
      </form>
    <p>Not registered? Sign Up!</p>
  </div>
</template>

<script>
export default {
  name: "LoginForm",
  setup() {},
};
</script>

<style>
@media screen and (max-width: 575px) {
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
    color: #22181C;
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
    border: 1px solid #FABD80;
    border-radius: 6px 6px;
  }
}
</style>