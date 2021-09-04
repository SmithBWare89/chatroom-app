<template>
    <div v-for="data in data" :key="data.username">
        
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

</style>