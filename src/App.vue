<template>
  <NavBar />
  <router-view/>
</template>

<script>
import NavBar from './components/NavBar.vue';

export default {
  name: 'App',
  components: { NavBar },
}
</script>

<style>
body {
  background: #F57A00;
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #22181c;
  max-width: 700px;
  margin: 0 auto;
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

@media screen and (max-width: 600px) {
  button {
    padding: 10px 15px;
  }
}
</style>
