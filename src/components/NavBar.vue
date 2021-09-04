<template>
  <div id="navContainer">
      <div class="userInfo">
          <span class="name">Hey there {{ name }}</span>
          <span class="email">Currently logged in as {{ email }}</span>
      </div>
      <div>
          <button>Logout</button>
      </div>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
export default {
    name: 'NavBar',
    setup() {
        const name = ref('')
        const email = ref('')

        return { name, email }
    }
}
</script>

<style>
#navContainer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background: #FFFFFF;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    padding: 20px;
    margin-bottom: 0 !important;
}

.userInfo {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    text-align: left;
}

.name {
    font-size: 1.10rem;
}

.email {
    font-size: .80rem;
}

</style>