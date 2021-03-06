// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// elementUI 导入
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// 调用插件
Vue.use(ElementUI);
import '../static/global/global.css'
import '../static/global/gt.js'
import 'animate.css'
// 导入axios
import axios from 'axios'

// store的引入
import store from '../src/store'

//在Vue的全局变量中设置$axios=axios
//以后使用可以使用 $axios
Vue.prototype.$axios=axios
//Vue.use(axios) --错误


//if (localStorage.getItem('token')) {
//	// 用户登录过
//	let user = {
//		token:localStorage.getItem('token'),
//		username:localStorage.getItem('username'),
//		head_img:localStorage.getItem('head_img'),
//	};
//
//	store.dispatch('getUserInfo',user);
//}
//
//  // ...
//  next();



Vue.config.productionTip = false

/* eslint-disable no-new ,引入router、store*/
let vm = new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

router.beforeEach(function(to, from , next){
  //添加拦截器
  if(to.meta.requireAuth){
    //当前要去的URL必须登录成功后才能访问
    if(store.state.token){
      next()
    }else{
      next({name: 'Login', query:{backUrl:to.fullPath}})
    }
    
  }else{
    
    next()
  }
})