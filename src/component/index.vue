<template>
    <div class="div-wrapper">
        <el-container>
            <el-header>
                <el-row >
                    <el-button   :type="Boolean(getStatus =='all')? 'info':''"  @click="changeItem('all')" >
                        全部 
                    </el-button>
                    <el-button :key='item.id' v-for="item in getData"    :type="Boolean(getStatus ==item.id)? 'info':''" @click="changeItem(item)" >
                        {{item.category_name}}
                    </el-button>
                </el-row>
            </el-header>
            <el-main>
                <div v-if="Boolean(getPanelDisplay =='all')">
                    <Main/>
                </div>
                <div v-else-if="Boolean(getPanelDisplay =='detail')">
                    <Detail/>
                </div>
                <div v-else>
                    <Search/>
                </div>
            </el-main>
        </el-container>
    </div>
</template>
<script>
    import Main from './Main.vue'
    import Search from './Search.vue'
    import Detail from './Detail.vue'

    export default {
        components: {
            Main, Search, Detail
        },
        data(){
            return {}
        },
        computed:{
            getStatus(){
                if(this.$store.state.activeItem && this.$store.state.activeItem.id)
                return this.$store.state.activeItem.id
                return 'all';
            },
            getPanelDisplay(){
                if(this.$store.state.isDetail){
                    return "detail"
                }
                if(this.$store.state.activeItem && this.$store.state.activeItem.id)
                    return this.$store.state.activeItem.id
                return 'all';
            },
            getData(){
                return this.$store.state.data
            },
            getTotal(){
                return this.$store.state.total
            }
        },
        methods:{
            changeItem(item){
                this.$store.dispatch("changeStatue", item)
            }
        }
    }
</script>

<style>
    .el-header, .el-footer {
        background-color: #B3C0D1;
        color: #333;
        text-align: center;
        line-height: 60px;
    }

    .el-aside {
        background-color: #D3DCE6;
        color: #333;
        text-align: center;
    }

    .el-main {
        background-color: #E9EEF3;
        color: #333;
        text-align: center;
    }

    body > .el-container {
        margin-bottom: 40px;
    }

.activeBtn{

}

</style>
