<template>
    <el-card class="box-card">

        <div class="m-l">
            <el-row :gutter="20">
                <el-col :span="12" v-for="o in getList" :key="o.id">
                    <div class="text item" @click="entryDetail(o)">
                        <i class="el-icon-caret-right"></i> {{o.name }}
                    </div>
                </el-col>
            </el-row>
        </div>
        <el-pagination
                v-if="getList.length > 0"
                small
                background
                layout="prev, pager, next"
                :total="getPagination.total_count"
                :current-page="getPagination.page_index"
                @current-change="updatePage"
                >
        </el-pagination>
        <div v-if="getList.length == 0" class="no-data">
            暂无数据
        </div>

    </el-card>

</template>

<script>
    export default {
        data(){
            return {currentPage:1}
        },
        computed:{
            getStatus(){
                if(this.$store.state.activeItem)
                    return this.$store.state.activeItem.category_name
                return '-';
            },
            getPagination(){
                const { page_index, page_size, total_count } = this.$store.state.moduleMain;
                console.log("-----------", page_index)
                return this.$store.state.moduleMain
            },
            getList(){
                return this.$store.state.moduleMain.list
            }
        },
        methods:{
            entryDetail(current){
                this.$store.dispatch('toggleDetail',{toggle:true, current})
            },
            updatePage(page_index){
                this.$store.dispatch('moduleMain/updatePageIndex',{page_index})
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

    &:hover {
        color: #409EFF
    }

    }

    .clearfix {
        text-align: left;
    }

    .m-l {
        padding: 0;
        margin: 0;
    }
    .no-data{
        text-align: center;
        font-size: 12px;
        color: #c7c3c3;
    }
</style>