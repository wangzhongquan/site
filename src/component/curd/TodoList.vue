<template>
    <div>
        <ul>
            <Todo v-for="item in todos" :key="item.title" :item="item" v-on:deleteData="deleteTodo"/>
        </ul>
    </div>
</template>
<script type="text/javascript">
    import Todo from './Todo.vue'

    export default {
        name: "TodoList",
        props: ['todos'],
        components: {
            Todo
        },
        methods:{
            deleteTodo(item){
                this.$emit("remove", item)
            }
        }
    }
</script>
<style></style>