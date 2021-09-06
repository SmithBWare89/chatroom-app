<template>
  <div id="chatInput">
    <textarea
      placeholder="Enter new comments here and press enter to submit!"
      required
      autofocus="true"
      maxlength="180"
      v-model="message"
      wrap="soft"
      @keypress.enter="sendComment"
    />
    <div class="charCount">
        Character Count: <span>{{ charCount }}</span>/180
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import { watchEffect } from "@vue/runtime-core";
import addNewComment from '../composables/addNewComment'

export default {
  name: "NewChat",
  setup() {
    const charCount = ref(0);
    const message = ref("");
    const { errorMessage, newComment } = addNewComment()

    watchEffect(() => {
      charCount.value = message.value.length;
    }, message.value.length);

    const sendComment = async () => {
        const data = await newComment(message.value)
        console.log(data)
        message.value = ''
    }

    return { charCount, message, sendComment };
  },
};
</script>

<style scoped>
#chatInput {
  width: 100%;
  height: 100%;
  margin: 0 auto;
  background: #ffffff;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
}

textarea {
  width: 95%;
  margin: 10px auto 0px auto;
  border-radius: 10px 10px;
  outline: none;
  border: none;
  font-size: 10px;
  padding: 10px 10px 0px 10px;
  resize: none;
}

textarea::placeholder {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #22181c;
  opacity: 50%;
}

.charCount {
    text-align: left;
    margin: 0px auto;
    padding-left: 15px;
    padding-bottom: 5px;
    font-size: 12px;
    opacity: 50%;
    color: #22181c;
}

@media screen and (max-width: 600px) {
    textarea {
        width: 90%;
    }
    .charCount {
        font-size: 10px;
        opacity: 60%;
    }
}
</style>