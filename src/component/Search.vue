<template>
    <div>
        <el-input placeholder="请输入内容" :value="inputValue"  class="input-with-select" @input="updateInputValue">
            <el-select   slot="prepend" placeholder="请选择检索范围" :value="selectType" @change="updateSelect">
                <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                </el-option>
            </el-select>
            <el-button slot="append" icon="el-icon-search" @click="search"></el-button>
        </el-input>
        <div class="q-s">
            <el-row>
                <el-radio-group :value="secondType"  @input="selectSecondType">
                    <el-radio label="3">消防汇总</el-radio>
                    <el-radio label="6">消防设计</el-radio>
                    <el-radio label="9">施工验收</el-radio>
                    <el-radio label="19">消防法规</el-radio>
                </el-radio-group>
            </el-row>
        </div>
        <div class="q-s">
            <SearchList />
        </div>
    </div>
</template>
<style>
    .el-select .el-input {
        width: 180px;
    }

    .input-with-select .el-input-group__prepend {
        background-color: #fff;
    }
</style>
<script>
    import SearchList from './search-list'
    export default {
        data () {
            return {
                options: [{
                    value: '1',
                    label: '全文检索'
                }, {
                    value: '2',
                    label: '强制性标准条文检索'
                }],
                radio3:''
            };
        },
        methods:{
            updateSelect(opt){
                this.$store.dispatch("moduleMain/updateSelect", opt)
            },
            updateInputValue(value){
               this.$store.dispatch("moduleMain/updateInputValue", value)
            },
            selectSecondType(value){
                this.$store.dispatch("moduleMain/updateSelectSecondType", value)
            },
            search(){
                this.$store.dispatch("moduleMain/search")
            }
        },
        computed:{
            selectType(){
                return this.$store.state.moduleMain.selectType
            },
            inputValue(){
                return this.$store.state.moduleMain.inputValue
            },
            secondType(){
                return this.$store.state.moduleMain.secondType.toString()
            }
        },
        components:{
            SearchList
        }
    }
</script>
<style scoped>
    .q-s {
        margin-top: 16px;
        text-align: left;
    }
</style>