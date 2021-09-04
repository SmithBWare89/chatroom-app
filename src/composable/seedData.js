import { LoremIpsum } from "lorem-ipsum";
import { computed, ref } from "vue";


const seedData = (num) => {
    const data = ref([])
    const loopCount = ref(num)
    const newLorem = new LoremIpsum({
      sentencesPerParagraph: {
          max: 8,
          min: 4
      },
      wordsPerSentence: {
          max: 16,
          min: 4
      }
    })

    const userArray = ref(['TheMonkeyWA', 'RZayayaya', 'Hideki405', 'GodGiftedTalent', 'KnuckBuck756', 'RandomRandom', 'JustGregg', 'Smokey88', 'YouTrippinCraig'])

   (async () => {
      try {
        for (let i = 0; i < loopCount.value; i++) {
            const randomIndex = Math.floor(Math.random() * (userArray.value.length - 1) + 1)
            console.log(randomIndex)
            const randomLength = Math.floor(Math.random() * (16-4) + 4)
            console.log(randomLength)
            
            const res = await fetch('http://localhost:3000/chats', {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({
                    username: userArray.value[randomIndex],
                    comment: newLorem.generateSentences(randomLength)
                })         
            })

            return await res.json()
            // const jsonRes = await res.json()
            // data.value.push(jsonRes)   
        }
      } catch (error) {
        console.log(error)
      }
    })()
}

export default seedData