import { LoremIpsum } from "lorem-ipsum"
import { ref } from "vue";
import { projectFirestore, projectAuth, timestamp } from '../firebase/config'

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
const generatedComments = ([]);

const error = ref(null)

//  Lorem Ipsum Generator Function
const getLorem = async () => {
    try {
        // Get The Authenticated User
        const user = projectAuth.currentUser

        if(!user) {
            throw new Error('Unable to authenticate user at this time.')
        }

        for(let i = 0; i < 10; i++) {
            const randomIndex = Math.floor(Math.random() * (userArray.value.length - 0) + 1)
            const randomLength = Math.floor(Math.random() * (8-1) + 1)

            await projectFirestore.collection('comments').add({
                username: userArray.value[randomIndex],
                comment: newLorem.generateSentences(randomLength),
                createdAt: timestamp()
            })
        }

        const data = await projectFirestore.collection('comments').get()
        error.value = null
        generatedComments.value = data.docs.map(doc => {
            return {...doc.data(), id: doc.id}
        })
    } catch (error) {
        error.value = 'Unable to generate Lorem Ipsum!'
        console.log(error.value)
    }
}

const generateLoremIpsum = () => {
    return { getLorem, generatedComments }
}

export default generateLoremIpsum