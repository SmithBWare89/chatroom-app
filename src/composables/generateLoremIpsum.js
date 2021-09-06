import { LoremIpsum } from "lorem-ipsum"
import { ref } from "vue";
import { projectFirestore, projectAuth, timestamp } from '../firebase/config'
import getUser from '../composables/getUser'

// Set Lorem Ipsum Parameters
const newLorem = new LoremIpsum({
    sentencesPerParagraph: {
      max: 2,
      min: 1,
    },
    wordsPerSentence: {
      max: 8,
      min: 1,
    },
  });

// Username Array
const userArray = ref(['TheMonkeyWA', 'RZayayaya', 'Hideki405', 'GodGiftedTalent', 'KnuckBuck756', 'RandomRandom', 'JustGregg', 'Smokey88', 'YouTrippinCraig'])
// Create empty array for generated Comments
const generatedComments = ([]);

const error = ref(null)

//  Lorem Ipsum Generator Function
const getLorem = async () => {
    try {
        // Get the current user info
        const { user } = getUser()     
        if (!user) {
            throw new Error('Unable to add message at this time. Please sign in again.')
        }

        for(let i = 0; i < 20; i++) {
            // Grab a random index and random name from names array
            const randomIndex = Math.floor(Math.random() * (userArray.value.length - 0) + 1)
            const randomLength = Math.floor(Math.random() * (8-1) + 1)

            // Send data with created timestamp to server
            await projectFirestore.collection('comments').add({
                username: userArray.value[randomIndex],
                comment: newLorem.generateSentences(randomLength),
                createdAt: timestamp()
            })
        }

        // MAY NEED A PROMISE TO BREAK DATA SEND UP

        // Get the data collection
        const data = await projectFirestore.collection('comments').get()
        // Set error to null
        error.value = null
        // Map over each document in collection and return as an array of objects
        generatedComments.value = data.docs.map(doc => {
            return {...doc.data(), id: doc.id}
        })

        // Return the generated values
        return generatedComments.value
    } catch (error) {
        error.value = 'Unable to generate Lorem Ipsum!'
    }
}

const generateLoremIpsum = () => {
    return { getLorem, generatedComments }
}

export default generateLoremIpsum