<template>
    <li @click="remove(item)">

        <slot name="helloPre">this is default value!</slot>
        {{item}}
        <slot name="helloEnd"></slot>
    </li>
</template>
<script>
    export default {
        props:['item'],
        methods:{
            remove(item){
                this.$store.dispatch('removeTodo', item)
            }
        }
    }
</script>