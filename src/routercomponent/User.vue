<template>
    <div>User
        <hr />
       <div @click="backHome">{{$route.params.id}}  </div>
    </div>
</template>
<script>
    export default {
        methods:{
            backHome(){
                this.$router.push('/')
            }
        },
        watch:{
           [ '$route'](to, from){
                console.log(to, from)
            }
        },
        beforeRouteUpdate(to, from, next){
                console.log(to, from, next)
        }

    }
</script>