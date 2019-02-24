<template>
    <div>
        <div style="text-align: center">{{detail.title}}</div>
        <div v-html="detail.detail"></div>

        <div style="margin-top: 10px">
        <span v-if="prev.show">
                <i class="el-icon-caret-right"></i>
                <span class="update-l" @click="show(prev)"> 上一节 </span>
            </span>

            <span v-if="next.show">
                <i class="el-icon-caret-right"></i>
                <span class="update-l" @click="show(next)"> 下一节 </span>
        </span>
        </div>


    </div>
</template>
<script>
    export default {
        computed: {
            detail() {
                const {currentKey, contents, tree} = this.$store.state.moduleDetail
                let result = {}
                if (currentKey && contents) {
                    let temp = tree.find((item) => {
                        return item.id == currentKey;
                    })
                    result.title = temp.title
                    result.detail = contents[currentKey];
                }
                return result;
            },
            prev() {
                const {currentKey, tree} = this.$store.state.moduleDetail
                let temp = {show: false}
                if (currentKey) {
                    let index = -1;
                    let result = tree.find((item, i) => {
                        index = i;
                        return item.id == currentKey;
                    })
                    if (tree.length > 1 && index > 0) {
                        temp.show = true;
                        temp.data = tree[index-1]
                    }
                }
                return temp
            },
            next() {
                const {currentKey, tree} = this.$store.state.moduleDetail
                let temp = {show: false}
                if (currentKey) {
                    let index = -1;
                    let result = tree.find((item, i) => {
                        index = i;
                        return item.id == currentKey;
                    })
                    if (tree.length > 1 && index != -1 && index < tree.length - 1) {
                        temp.show = true;
                        temp.data = tree[index+1]
                    }
                }
                return temp
            }
        },
        methods: {
            show(data) {
                    let temp = data.data
                    this.$store.dispatch("moduleDetail/show", temp)
            }
        }
    }
</script>
<style scoped>
    .update-l {
        cursor: pointer;

    &:hover {
        color: #409EFF;
    }

    }

</style>

