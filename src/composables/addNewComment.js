import { ref } from "@vue/runtime-dom";
import { projectFirestore, timestamp } from "../firebase/config";

const error = ref(null)

const newComment = async (comment) => {
    try {
        // Take in the comment context object from NewChat.vue and add to collection
       await projectFirestore.collection('comments').add(comment)
    } catch (err) {
        error.value = err.message
    }
}

// Function to return error and newComment for practical use
const addNewComment = () => {
    return { error, newComment }
}

export default addNewComment