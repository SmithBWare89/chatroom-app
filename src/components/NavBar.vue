<template>
  <div id="navContainer">
      <div class="userInfo">
          <span class="name">Hey there, {{ name }}!</span>
          <span class="email">Currently logged in as {{ email }}</span>
      </div>
      <div>
          <router-link :to="{name: 'Welcome', path: '/'}">
            <button @click="handleSignout">Logout</button>
          </router-link>
      </div>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import { watchEffect } from '@vue/runtime-core'
import signout from '../composables/signout'
import { useRouter } from 'vue-router'

export default {
    name: 'NavBar',
    props:['currentUserInfo'],
    setup(props) {
        const name = ref('')
        const email = ref('')
        const { signOutUser } = signout()
        const router = useRouter()

        watchEffect(() => {
            name.value = props.currentUserInfo.displayName,
            email.value = props.currentUserInfo.email
        }, props.currentUserInfo)

        const handleSignout = async () => {
            await signOutUser()
            router.push({name: 'Welcome'})
        }

        return { name, email, handleSignout }
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