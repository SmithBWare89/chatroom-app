import { ref } from "@vue/runtime-dom";
import { projectFirestore, projectAuth, timestamp } from "../firebase/config";

const errorMessage = ref(null)

const newMessage = async () => {
    try {

        const user = projectAuth.currentUser
        if (!user) {
            throw new Error('Unable to add message at this time. Please sign in again.')
        }
        
        const message = await projectFirestore.collection('comments').add(
            {
                username
            }
        )
    } catch (error) {
        errorMessage.value = error.value
    }
}

const addNewMessage = () => {
    return { errorMessage, newMessage}
}

export default addNewMessage