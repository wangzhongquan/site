/****
import Vue from 'vue'
import App from './App'

var app = new Vue({
	data:{},
	render:function(h){
		return (<App />);
	}
});
app.$mount("#root")
***/

import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Home from './routercomponent/Home.vue'
import User from './routercomponent/User.vue'


const routes = [
	{path:"/", component: Home},
    { path: '/user/:id', component: User,}
]

const router = new VueRouter({routes})
const app = new Vue({router});
app.$mount("#root")




import { schema } from 'normalizr'
let temp ={
    "id": "123",
    "author": {
        "id": "1",
        "name": "Paul"
    },
    "title": "My awesome blog post",
    "comments": [
        {
            "id": "324",
            "commenter": {
                "id": "2",
                "name": "Nicole"
            }
        }
    ]
}
const user = new schema.Entity("users");
const comment = new schema.Entity("comments", {
    commenter:user
})
const article = new schema.Entity("articles", {
    author:user,
    comments:[comment]
});

console.log(111)

