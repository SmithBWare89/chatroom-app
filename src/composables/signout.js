import { ref } from '@vue/runtime-dom'
import { projectAuth } from '../firebase/config'

const error = ref(null)

const signOutUser = async () => {
    try {
        await projectAuth.signOut()
    } catch (error) {
        
    }
}

const signout = () => {
    return { error, signOutUser }
}

export default signout