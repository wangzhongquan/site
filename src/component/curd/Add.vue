<template>
    <button @click="addItem">add</button>
</template>

<script>
    export default {
        methods:{
            addItem(){
                var newItem = {
                    title: 'Todo'+Math.random(), project: 'Project '+Math.random(), done: false,
                }
                this.$emit('add', newItem)
            }
        }
    }
</script>