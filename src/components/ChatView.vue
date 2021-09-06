<template>
  <div id="chatView">
    <div v-if="error">{{ error }}</div>
    <div v-if="comments" class="comments" ref="commentRef">
      <div v-for="comment in formattedComments" :ref="comment.id" :key="comment.id" class="comment">
        <span class="chatTimestamp">{{ comment.createdAt }} ago</span>
        <span class="chatUsername">{{ comment.name }}</span>
        <span class="chatComment">{{ comment.comment }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import getComments from "../composables/useGetComments";
import { formatDistanceToNow } from 'date-fns'
import { computed, ref } from '@vue/reactivity';
import { onUpdated } from '@vue/runtime-core';

export default {
  name: "ChatView",
  setup() {
    const { comments, error } = getComments();

    const formattedComments = computed(() => {
      if (comments.value) {
        return comments.value.map(comment => {
          let time = formatDistanceToNow(comment.createdAt.toDate())
          return {...comment, createdAt: time}
        })
      }
    })

    const commentRef = ref(null)

    onUpdated(() => {
      commentRef.value.scrollTop = commentRef.value.scrollHeight
    })

    return { comments, error, formattedComments, commentRef };
  },
};
</script>

<style>
#chatView {
  padding: 5px 20px 5px 20px;
  background: #dbd4d3;
  text-align: left;
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
  font-size: 10px;
  font-weight: 800;
  margin-right: 6px;
}

.chatComment {
  font-size: 10px;
}

.comments {
  max-height: 300px !important;
  overflow: auto; 
}

/* Hide scrollbar for Chrome, Safari and Opera */
.comments::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.comments {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}
</style>