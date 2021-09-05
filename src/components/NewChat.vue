<template>
<div id="chatInput">
    <textarea 
        placeholder="Enter new comments here and press enter to submit!" 
        required 
        autofocus="true"
        maxlength="180"
        v-model="message"
    />
    <span><span>{{ charCount }}</span>/180</span>
</div>
</template>

<script>
import { ref } from '@vue/reactivity'
import { watch, watchEffect } from '@vue/runtime-core'
export default {
    name: 'NewChat',
    setup() {
        const charCount = ref(0)
        const message = ref('')

        watchEffect(() => {
            charCount.value = message.value.length
        }, message.value.length)

        return { charCount, message }
    }
}
</script>

<style scoped>
    #chatInput {
        width: 100%;
        height: 100%;
        margin: 0 auto;
        background: #FFFFFF;
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
    }

    textarea {
        width: 95%;
        margin: 10px auto;
        border-radius: 10px 10px;
        outline: none;
    }
</style>