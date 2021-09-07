<template>
  <div id="chatView">
    <div v-if="error">{{ error }}</div>
    <div v-if="comments" class="comments" ref="commentRef">
      <div
        v-for="comment in formattedComments"
        :ref="comment.id"
        :key="comment.id"
        class="comment"
      >
        <span class="chatTimestamp">{{ comment.createdAt }} ago</span>
        <span class="chatUsername">{{ comment.name }}</span>
        <span class="chatComment">{{ comment.comment }}</span>
      </div>
    </div>
  </div>
</template>

<script>
// Composable
import getComments from "../composables/useGetComments";

// Vue Imports
import { formatDistanceToNow } from "date-fns";
import { computed, ref } from "@vue/reactivity";
import { onUpdated } from "@vue/runtime-core";

export default {
  name: "ChatView",
  setup() {
    // Variables
    const { comments, error } = getComments();

    // Take the comments collection, map over each comment
    // and return them with updated formatting
    const formattedComments = computed(() => {
      if (comments.value) {
        return comments.value.map((comment) => {
          let time = formatDistanceToNow(comment.createdAt.toDate());
          return { ...comment, createdAt: time };
        });
      }
    });
    
    // A reference to the commentsRef reference attribute
    const commentRef = ref(null);

    // Whenever the DOM is updated scroll to the bottom of the chat window
    onUpdated(() => {
      commentRef.value.scrollTop = commentRef.value.scrollHeight;
    });

    
    return { comments, error, formattedComments, commentRef };
  },
};
</script>

<style>
#chatView {
  padding: 5px 20px 5px 20px;
  background: #dbd4d3;
  text-align: left;
  font-size: 12px;
}

.comment {
  margin: 18px 0;
}

.chatTimestamp {
  display: block;
  font-size: 10px;
  color: #757780;
}

.chatUsername {
  font-weight: 800;
  margin-right: 6px;
}

.comments {
  max-height: 400px;
  overflow: auto;
}
/* Hide scrollbar for Chrome, Safari and Opera */
.comments::-webkit-scrollbar {
  display: none;
}
/* Hide scrollbar for IE, Edge and Firefox */
.comments {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}

@media screen and (max-width: 600px) {
  .comments {
    max-height: 300px;
  }
}
</style>