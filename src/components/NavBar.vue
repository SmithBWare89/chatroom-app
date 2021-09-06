<template>
  <nav id="navContainer">
    <div class="userInfo">
      <span class="name">Hey there, {{ user.displayName }}!</span>
      <span class="email">Currently logged in as {{ user.email }}</span>
    </div>
    <div>
      <button @click="handleLogout">Logout</button>
    </div>
  </nav>
</template>

<script>
import { useRouter } from "vue-router";
import getUser from "../composables/getCurrentUser";
import useLogout from "../composables/signout";

export default {
  name: "NavBar",
  setup() {
    const { error, logout } = useLogout();
    const router = useRouter();
    const { user } = getUser();

    const handleLogout = async () => {
      await logout();
      if (!error.value) {
        console.log("User logged out");
      }
    };

    return { handleLogout, error, user };
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