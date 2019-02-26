<template>
    <Page />
</template>
<script>
    import store from './store/index'
    import Page from './component/index.vue'
    export default {
        store,
        created(){
            store.dispatch("initData");
			this.$nextTick(()=>{
				document.oncontextmenu = new Function("event.returnValue=false");
				document.onselectstart = new Function("event.returnValue=false");
			})
        },
        components:{
            Page
		}
	}
</script>