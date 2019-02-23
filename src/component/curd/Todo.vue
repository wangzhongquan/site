<template>
    <li @click="deleteTodo(item)">
        点击行，删除本行
        {{item}}
        {{edit}}

    </li>
</template>
<script>
    export default {
        name:"Todo",
        props:['item'],
        data(){
            return {edit:false}
        },
        methods:{
            deleteTodo(item){
               this.$emit("deleteData", item)
            }
        }
    }
</script>