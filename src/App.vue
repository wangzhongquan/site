<template>
    <Page />
</template>
<script>
    import store from './store/index'
    import Page from './component/index.vue'
    export default {
        store,
        created:()=>{
            store.dispatch("initData");
        },
        components:{
            Page
		}
	}
</script>