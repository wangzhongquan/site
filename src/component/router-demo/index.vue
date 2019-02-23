<template>
    <div :id="router-demo">
        <div>router</div>
        <header>
            <!-- router-link 定义点击后导航到哪个路径下 -->
            <router-link to="/home">Home</router-link>
            <router-link to="/about">About</router-link>
        </header>
        <!-- 对应的组件内容渲染到router-view中 -->
        <router-view></router-view>
    </div>
</template>
<script>
    import Vue from 'vue'
    import VueRouter from 'vue-router'
    Vue.use(VueRouter)
    const Foo = { template: '<div>foo</div>' }
    const Bar = { template: '<div>bar</div>' }

    const routes = [
        {path:"/foo", component:Foo},
        {path:"/bar", component:Bar}
    ];

    const router = new VueRouter()

    const app = new Vue({router}).$mount("#router-demo")


    export default {}

</script>