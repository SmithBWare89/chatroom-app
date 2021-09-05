<template>
  <div id="chatView">
    <div v-for="comment in data" :key="comment.id" class="comment">
      <span class="chatUsername">{{ comment.username }}</span>
      <span id="chatComment">{{ comment.comment }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "ChatView",
  props: ["data"],
  data() {
    return {};
  },
};
</script>

<style>
#chatView {
  padding: 5px 20px 5px 20px;
  background: #ede9e9;
  max-height: 400px !important;
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