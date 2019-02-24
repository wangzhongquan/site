<template>
    <div>
        <div style="padding: 8px 4px 8px">
            <el-input placeholder="请输入内容"  v-model="message" ></el-input>
        </div>
        <div class="m-l">
            <div v-for="item in getDetailList" :key="item.id" :class="item.active ? 'active text item': 'text item'" @click="show(item)">
                <i class="el-icon-caret-right"></i>  {{item.title }}
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {message: ''}
        },
        computed:{
            getDetailList(){
                var temp = this.message ;
                return this.$store.state.moduleDetail.tree.filter(item =>  (item.title.indexOf(temp) != -1 ));
            }
        },
        methods:{
            show(temp){
             this.$store.dispatch("moduleDetail/show", temp)
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
    &.active{
         color:#409EFF
     }
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
        overflow: hidden;
    }
</style>