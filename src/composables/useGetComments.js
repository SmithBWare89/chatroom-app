import { ref } from 'vue'
import { projectFirestore } from '../firebase/config'
const error = ref(null)
const collectionData = ref(null)

const getComments = async (collection) => {

    projectFirestore.collection(collection)
        .orderBy('createdAt')

    collections.onSnapshot((snap) => {
        let results = []
        snap.docs.forEach(doc => {
            doc.data().createdAt && results.push({ ...doc.data(), id: doc.id })
        })
        collectionData.value = results
        error.value = null
    }, (err) => {
        console.log(err.message)
        documents.value = null
        error.value = 'Could not fetch comments'
    })
    
    // watchEffect((onInvalidate) => {
        //     // unsub from prev collection when watcher is stopped (component unmounted)
        //     onInvalidate(() => unsub());
        // });
    return { collectionData, error }
}

export default getComments