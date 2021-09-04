import { LoremIpsum } from "lorem-ipsum";
const seedData = async (num) => {
   try {
    const newLorem = await new LoremIpsum({
        sentencesPerParagraph: {
            max: 8,
            min: 4
        },
        wordsPerSentence: {
            max: 16,
            min: 4
        }
    })

    return newLorem.generateSentences(num)
   } catch (error) {
       return error
   }
}

export default { seedData }