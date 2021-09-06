<template>
  <div id="navContainer">
      <div class="userInfo">
        <span class="name">Hey there {{ user.displayName }}</span>
        <span class="email">Currently logged in as {{ user.email }}</span>
      </div>
      <div>
          <button @click="handleClick">Logout</button>
      </div>
  </div>
</template>

<script>
import handleSignout from "../composables/signout";
import { useRouter } from "vue-router";
import handleGetUser from '../composables/getCurrentUser'
import { onMounted } from '@vue/runtime-core';

export default {
  name: "NavBar",
  props: ["currentUserInfo"],
  setup() {
    const router = useRouter();
    const { signOutUser, error } = handleSignout()
    const { errorMessage, getCurrentUser, user } = handleGetUser()
    
    onMounted(async () => {
        await getCurrentUser()
    })

    const handleClick = async () => {
        await signOutUser()
        if(!error.value) {
            console.log('user logged out')
        }
    }

    return { errorMessage, user, handleClick };
  },
};
</script>

<style>
#navContainer {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: #ffffff;
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
  font-size: 1.1rem;
}

.email {
  font-size: 0.8rem;
}
</style>