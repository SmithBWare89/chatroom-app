import { ref } from '@vue/runtime-dom'
import getCurrentUser from '../composables/getCurrentUser'

import { projectFirestore } from '../firebase/config'

const getComments = async (collection) => {
    const error = ref(null)
    const sortedData = ref([])
        const { user } = getCurrentUser()
        
        if (!user) {
            throw new Error('Unable to authenticate user at this time.')
        }

        const collections = projectFirestore.collection(collection)
            .orderBy('createdAt', 'asc')

        collections.onSnapshot((snap) => {
            let results = []
            snap.docs.forEach(doc => {
                doc.data().createdAt && results.push({...doc.data(), id: doc.id})
            })
            sortedData.value = results
        }, (err) => { 
            console.log(err.message)
            documents.value = null
            error.value = 'Could not fetch comments'
        })
        error.value = null
        return {sortedData, error }
}

export default getComments