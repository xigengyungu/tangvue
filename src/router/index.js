import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Course from '@/components/Course'
import Micro from '@/components/Micro'
import News from '@/components/News'
import Detail from '@/components/Detail'
// @ 绝对路径 检索到 .....src/

// 如果我们Router当做局部模块使用 一定要Vue.use(Router)
// 以后在组件中  可以通过this.$router  获取Router实例化对象
// 路由信息对象 this.$routes

Vue.use(Router)

// 配置路由规则
export default new Router({
  routes: [
    {
      path: '/index',
      name: 'index', 
      component: Index
    },
    {
      path: '/course',
      name: 'Course', 
      component: Course
    },
    {
      path: '/detail',
      name: 'detail', 
      component: Detail
    },
    {
      path: '/micro',
      name: 'Micro', 
      component: Micro
    },
    {
      path: '/news',
      name: 'News', 
      component: News
    }
  ],mode:'history'
})
