<template>
  <div class="app">
    <!-- All app data will show in router-view -->
    <router-view />
  </div>
</template>

<script>

export default {
  // Application entry point
  name: "App",
};
</script>

<style>
body {
  background: #f57a00;
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #22181c;
  max-width: 500px;
  margin: 0 auto;
}

.app {
  margin-top: 40px;
}

button {
  padding: 10px 20px;
  border-radius: 6px 6px;
  box-shadow: 2px 2px rgba(117, 119, 128, 0.5);
  background: #61e5a5;
  color: #ffffff;
  border: none;
  font-weight: 700;
}

button:hover {
  background: #ffffff;
  color: #61e5a5;
}

.switchForm {
  border-bottom: 1px solid #22181c;
  cursor: pointer;
}

.error {
  color: red;
  font-size: 10px;
  padding-bottom: 10px;
}

@media screen and (max-width: 600px) {
  button {
    padding: 10px 15px;
  }
}
</style>
