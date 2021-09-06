import { ref } from '@vue/runtime-dom'
import generateLoremIpsum from './generateLoremIpsum'
import getCurrentUser from '../composables/getCurrentUser'

import { projectAuth, projectFirestore } from '../firebase/config'
const error = ref(null)
const sortedData = ref([])

const getComments = async () => {
    try {

        const { getLorem } = generateLoremIpsum();
        const { currentUser } = getCurrentUser()
        const user = currentUser()

        if (!user) {
            throw new Error('Unable to authenticate user at this time.')
        }

        const collection = await projectFirestore.collection('comments').get()
        sortedData.value = collection.docs.map((doc) => {
            return {...doc.data(), id: doc.id}
        })
        
        if (sortedData.value.length === 0) {
            sortedData.value =  await getLorem()
            return sortedData.value
        } 

        return sortedData.value
    } catch (err) {
        error.value = err.message
        console.log(error.value)
    }
}

const useGetComments = () => {
    return { error, getComments }
}

export default useGetComments