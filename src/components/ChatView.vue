<template>
  <div id="chatView">
    <div v-if="error">{{ error }}</div>
    <div v-for="comment in data" :key="comment.id" class="comment">
      <span class="chatUsername">{{ comment.username }}</span>
      <span id="chatComment">{{ comment.comment }}</span>
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import { projectFirestore } from "../firebase/config";

export default {
  name: "ChatView",
  setup() {
    const error = ref(null);
    const data = ref(null);

    projectFirestore
      .collection("comments")
      .orderBy("createdAt")
      .onSnapshot(
        (snap) => {
          let results = [];
          snap.docs.forEach((doc) => {
            doc.data().createdAt && results.push({ ...doc.data(), id: doc.id });
          });
          data.value = results;
          error.value = null;
        },
        (err) => {
          console.log(err.message);
          documents.value = null;
          error.value = "Could not fetch comments";
        }
      )

    return { error, data }
  },
};
</script>

<style>
#chatView {
  padding: 5px 20px 5px 20px;
  background: #ede9e9;
  height: 300px;
  max-height: 300px !important;
  overflow: auto;
  text-align: left;
}

.comment {
  margin: 5px 0;
}

.chatUsername {
  font-size: 10px;
  font-weight: 800;
  margin-right: 6px;
}

#chatComment {
  font-size: 10px;
}
</style>