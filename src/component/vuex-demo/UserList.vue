<template>
    <div>
    <ul>
        <User v-for="item in todos" :item="item" :key="item.title">
            <div slot="helloPre">Pre</div>
            <div slot="helloEnd">End</div>
        </User>
    </ul>
    <hr />
    <Add />
    </div>
</template>

<script>
    import User from './user.vue'
    import Add from  './add.vue'
    export default {
        components:{
            User,Add
        },
        data(){
            let todos = this.$store.state.todos;
            return {
                todos
            }
        }

    }
</script>