<template>
    <div class="chatbox">
        <h1>Hello!</h1>
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
    .chatbox {
        width: 100%;
        height: 100%;
        background: #EDE9E9;
        margin: 0 auto;
        padding-top: 0;
    }

    h1 {
        margin: 0;
    }
</style>