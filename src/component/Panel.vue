<template>
    <el-card class="box-card">
        <div slot="header" class="clearfix">
            <span>{{data && data.category_name ? data.category_name: '-'}}</span>
            <el-button @click="changeItem(data)" style="float: right; padding: 3px 0" type="text">查看更多 <i class="el-icon-d-arrow-right"></i> </el-button>
        </div>
        <div class="m-l">
            <div v-for="o in data.initPanel" :key="o.id" class="text item" @click="goToDetail(o)">
                <i class="el-icon-caret-right"></i>  {{o.name}}
            </div>
        </div>
    </el-card>

</template>

<script>
    export default {
        props:["data"],
        methods:{
            goToDetail(obj){
                this.$store.dispatch('toggleDetail',{toggle:true, current:{id:obj.id}})
            },
            changeItem(item){
                this.$store.dispatch("changeStatue", {id:item.id})
            }
        }
    }
</script>

<style scoped>
    .text {
        font-size: 14px;
        text-align: left;
    }

    .item {
        line-height: 30px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        cursor: pointer;

        &:hover{
            color:#409EFF
         }
    }

    .clearfix {
        text-align: left;
    }

    .m-l {
        padding: 0;
        margin: 0;
        height: 300px;
        overflow: hidden;
    }
</style>