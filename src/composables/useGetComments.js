import { ref } from '@vue/runtime-dom'
import { watchEffect } from 'vue'
import { projectFirestore } from '../firebase/config'

const getComments = () => {
    const error = ref(null)
    const comments = ref([])
    const collection = projectFirestore.collection('comments').orderBy('createdAt')
    const unsub = collection.onSnapshot(snapshot => {
        let results = []
        snapshot.docs.forEach(doc => {
            // Format the date and push to array
            doc.data().createdAt && results.push({...doc.data(), id: doc.id})
        })
        comments.value = results
        error.value = null
    }, (err) => {
        comments.value = null
        error.value = 'Could not fetch data'
    })

    watchEffect((onInvalidate) => {
        //unsubscribe from the collection whenever we leave the chatroom
        //By invoking unsub function we're able to unsubscribe whenever we leave the area
        onInvalidate(() => unsub())
    },)

    return { comments, error }
}

export default getComments