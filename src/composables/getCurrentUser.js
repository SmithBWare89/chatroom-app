import { ref } from '@vue/runtime-dom'
import { projectAuth } from '../firebase/config'

const errorMessage = ref(null)
const user = ref({})

projectAuth.onAuthStateChanged(_user => {
    if(!_user) {
        errorMessage.value = 'Unable to authenticate user'
    }
    user.value = _user
})

const handleGetUser = () => {
    return { errorMessage, user }
}

export default handleGetUser