import { ref } from '@vue/runtime-dom'
import { projectAuth } from '../firebase/config'

const errorMessage = ref(null)

const currentUser = async () => {
    try {
        const userInfo = await projectAuth.currentUser
        if(!userInfo) {
            throw new Error('Cannot find the user information!')
        }
        return {displayName: userInfo.displayName, email: userInfo.email}
    } catch (error) {
        errorMessage.value = error.value
    }
}

const getCurrentUser = () => {
    return { errorMessage, currentUser }
}

export default getCurrentUser