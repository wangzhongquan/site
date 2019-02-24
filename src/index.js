import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './component/style.less'

Vue.use(ElementUI);
var app = new Vue({
	render:function(h){
		return (<App />);
	}
});
app.$mount("#root")

