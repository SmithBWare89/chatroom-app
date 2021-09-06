import { ref } from '@vue/runtime-dom'
import { projectAuth } from '../firebase/config'

const user = ref(projectAuth.currentUser)

// Monitor state of current user auth
projectAuth.onAuthStateChanged(_user => {
    user.value = _user
})

const getUser = () => {
    return { user }
}

export default getUser