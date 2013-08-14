<template>
    <div>
        <h1>{{msg}}</h1>
        <ul v-for="row in courseList">
            <li>{{row.title}}</li>
        </ul>
    </div>
</template>

<script>

export default {
    name:"index",
    data(){
        return {
            msg:'课程列表',
            courseList:[
                {id:1,title:'Python全栈'},
                {id:1,title:'Linux运维'},
                {id:1,title:'金融分析'}
            ]
        }
    },
    mounted:function(){
        //vue页面加载时自动执行 
        this.initCourse();
    },
    methods:{
        initCourse:function(){
            //通过AJAX获取列表
            //axios 发送AJAX请求
            //npm install axios --save

            //第一步，在main.js中配置  
            //第二步 ，使用axios发送请求 
            _this=this;
            this.$axios.request({
                url:'http://127.0.0.1:8000/api/v1/course/',
                methods:'GET'
            }).then(function(ret){
                //AJAX成功后获取内容
                if(ret.data.code===1000){
                    _this.courseList=ret.data.data
                }else{
                    alert('获取数据失败')
                }
            }).catch(function (params) {
                //AJAX 请求失败
            })

        }
    }
}
</script>