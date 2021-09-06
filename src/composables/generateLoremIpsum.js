import { LoremIpsum } from "lorem-ipsum"
import { ref } from "vue";
import { projectFirestore, timestamp } from '../firebase/config'

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
        for (let i = 0; i < 40; i++) {
            const randomIndex = Math.floor(
              Math.random() * userArray.value.length - 1
            );
            const randomLength = Math.floor(Math.random() * (8 - 1) + 1);
            
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

        return generatedComments.value
    } catch (er) {
        error.value = 'Unable to generate Lorem Ipsum!'
    }
}

const generateLoremIpsum = () => {
    return { getLorem, generatedComments }
}

export default generateLoremIpsum