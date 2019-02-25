<template>
    <div class="d-w">
        <el-container>
            <el-aside width="300px" class="d-l">
                <Left />

            </el-aside>
            <el-main class="d-m">
                <Right />
            </el-main>
        </el-container>
    </div>
</template>

<script>
    import Left from './detail-left'
    import Right from './detail-right'
    export default {
        components:{
            Left, Right
        },
        destroyed(){
            this.$store.dispatch("moduleDetail/clean")
        }
    }
</script>

<style scoped>


    .d-w{
        background: white;
    }
    .d-m{
        background-color: white;
        text-align: left;
    }

    .d-l{
        background: inherit;
        border-right: 1px solid #F2F6FC;
    }


</style>