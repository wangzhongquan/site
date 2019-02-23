<template>
    <div>
        <TodoList :todos="todos" @remove="removeData"/>
        <Add @add="addItem"/>
    </div>
</template>

<script>

    import TodoList  from './TodoList.vue'
    import Add  from './Add.vue'

    export default {
        name:"Curd",
        data(){
            return { todos: [{ title: 'Todo A', project: 'Project A', done: false, }, { title: 'Todo B', project: 'Project B', done: true, }, { title: 'Todo C', project: 'Project C', done: false, }, { title: 'Todo D', project: 'Project D', done: false, }], }
        },
        components:{
            TodoList,Add
        },
        methods:{
            removeData(data){
                var index = this.todos.indexOf(data);
                this.todos.splice(index, 1)
            },
            addItem(item){
                this.todos.push(item)
            }
        }
    }
</script>