import { ref } from "@vue/runtime-dom";
import { projectFirestore, projectAuth, timestamp } from "../firebase/config";
import getCurrentUser from './getCurrentUser'

const errorMessage = ref(null)

const newComment = async (message) => {
    try {
        console.log(message)
        const { currentUser } = getCurrentUser()
        const user = await currentUser()   
        if (!user) {
            throw new Error('Unable to add message at this time. Please sign in again.')
        }
        
        const res = await projectFirestore.collection('comments').add(
            {
                username: user.displayName,
                comment: message,
                createdAt: timestamp()
            }
        )
    } catch (error) {
        errorMessage.value = error.message
    }
}

const addNewComment = () => {
    return { errorMessage, newComment}
}

export default addNewComment