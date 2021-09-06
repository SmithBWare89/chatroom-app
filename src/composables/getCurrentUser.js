import { ref } from '@vue/runtime-dom'
import { projectAuth } from '../firebase/config'

const errorMessage = ref(null)
const user = ref({})

const getCurrentUser = async () => {
    try {
        const userInfo = await projectAuth.currentUser
        if(!userInfo) {
            throw new Error('Cannot find the user information!')
        }
        errorMessage.value = null
        user.value = {displayName: userInfo.displayName, email: userInfo.email}
    } catch (err) {
        errorMessage.value = err.message
        console.log(errorMessage.value)
    }
}

const handleGetUser = () => {
    return { errorMessage, getCurrentUser, user }
}

export default handleGetUser