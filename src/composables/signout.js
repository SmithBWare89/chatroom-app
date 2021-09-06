import { ref } from '@vue/runtime-dom'
import { useRouter } from 'vue-router'
import { projectAuth } from '../firebase/config'

const error = ref(null)

const signOutUser = async () => {
    error.value = null
    try {
        await projectAuth.signOut()
    } catch (err) {
        error.value = err.message
        console.log(error.value)
    }
}

const handleSignOut = () => {
    return { signOutUser, error }
}

export default handleSignOut