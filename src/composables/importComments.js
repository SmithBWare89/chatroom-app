import { ref } from '@vue/runtime-dom'
import generateLoremIpsum from '../composables/generateLoremIpsum'

import { projectAuth, projectFirestore } from '../firebase/config'
const error = ref(null)
const sortedData = ref([])

const getComments = async () => {
    try {
        const { getLorem, generatedComments } = generateLoremIpsum();

        const user = projectAuth.currentUser

        if (!user) {
            throw new Error('Unable to authenticate user at this time.')
        }

        const collection = await projectFirestore.collection('comments').get()
        sortedData.value = collection.docs.map((doc) => {
            return {...doc.data(), id: doc.id}
        })
        
        if (sortedData.value.length === 0) {
            await getLorem()
            return generatedComments.value
        }

    } catch (error) {
        console.log(error)
    }
}

const importComments = () => {
    return { error, getComments }
}

export default importComments