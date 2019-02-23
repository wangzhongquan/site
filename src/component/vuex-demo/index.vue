<template>
    <div>
        <div @click="updateName">{{name}}</div>
        <UserList />
    </div>
</template>
<script>

    import store from './store/index'
    import UserList from './UserList'
    import { mapState, mapActions, mapGetters } from 'vuex'

    export default {
            store,
            computed:{
                ...mapState("a" ,{name:state=>state.name})
            },
            methods:{updateName(){
                        this.$store.dispatch("a/gain")
                        this.$store.dispatch("someAction",{wzq:100})
                }},
            components:{
                UserList
            }
    }
</script>