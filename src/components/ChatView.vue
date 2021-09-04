<template>
    <div id="chatView" v-for="comment in data" :key="comment.id">
        <div class="chatContainer">
            <span class="chatUsername">{{ comment.username }}</span>
            <span class="chatComment">{{ comment.comment }}</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ChatView',
    props: ['data'],
    data() {
        return {
            
        }
    }
}
</script>

<style>
    #chatView {
        padding-top: 10px;
        margin: 0px 10px;
        overflow-y: auto;
    }
    .chatContainer {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: flex-start;
        padding-top: 2px;
        padding-bottom: 2px;
    }
    .chatUsername {
        font-size: 10px;
        font-weight: 800;
    }

    .chatComment {
        font-size: 10px;
        text-align: left;
        margin-left: 5px;
        width: 60%;
    }
</style>