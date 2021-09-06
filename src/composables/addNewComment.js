import { ref } from "@vue/runtime-dom";
import { projectFirestore, timestamp } from "../firebase/config";

const error = ref(null)

const newComment = async (comment) => {
    try {       
       const res = await projectFirestore.collection('comments').add(comment)
    } catch (err) {
        error.value = err.message
    }
}

const addNewComment = () => {
    return { error, newComment }
}

export default addNewComment