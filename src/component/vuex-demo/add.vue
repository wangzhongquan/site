<template>
    <button @click="addItem()">add</button>
</template>
<script>
    export default {
        methods:{
            addItem(){
               this.$store.dispatch("addTodo")
            }
        }
    }
</script>