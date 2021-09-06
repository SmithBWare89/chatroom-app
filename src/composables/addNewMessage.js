import { ref } from "@vue/runtime-dom";
import { projectFirestore, projectAuth, timestamp } from "../firebase/config";
import getCurrentUser from '../composables/getCurrentUser'

const errorMessage = ref(null)
const message = ref({})

const newMessage = async (message) => {
    try {
        const { user, currentUser } = getCurrentUser()
        await currentUser()      
        if (!user.value) {
            throw new Error('Unable to add message at this time. Please sign in again.')
        }
        
        const res = await projectFirestore.collection('comments').add(
            {
                username: user.displayName,
                comment: message,
                createdAt: timestamp()
            }
        )

        console.log(res.docs.data())
    } catch (error) {
        errorMessage.value = error.value
    }
}

const addNewMessage = () => {
    return { errorMessage, newMessage}
}

export default addNewMessage