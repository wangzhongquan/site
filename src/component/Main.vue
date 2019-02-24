<template>
    <div>
        <el-row :gutter="20" class="main-panel">
            <el-col :span="8" v-for="item in getInitPanel" :key="item.id">
                <Main  :data="{...item}" />
            </el-col>
        </el-row>

    </div>
</template>
<script>

    import Main from './Panel.vue'

    export default {
        computed:{
            getInitPanel(){
                const {data = [], initPanel } = this.$store.state
                let temp = data.map((i, index) =>{
                   initPanel && initPanel[index] && (i.initPanel = initPanel[index]);
                   return i;
                })
                return temp;
            }
        },
        components: {
            Main
        }
    }
</script>
<style scoped>
    .main-panel >div.el-col{

        margin-bottom: 20px;
    }
</style>