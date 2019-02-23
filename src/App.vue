<template>
    <RouterDemo />
</template>
<script>
    import Curd from './component/curd/index.vue'  //这个是增/删示例，未使用vuex
    import VuexDemo from './component/vuex-demo/index.vue' //这个是使用vuex示例
    import RouterDemo from './component/router-demo/index.vue' //这个是使用vuex示例
    export default {
		name:"App",
        components:{
            RouterDemo //添加-删除行
		}
	}
</script>