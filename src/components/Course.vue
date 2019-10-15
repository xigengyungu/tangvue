<template>
    <div>
        <h1>{{msg}}</h1>
        <div v-for="(row,idx) in courseList" :key="idx">
            <div style="width:350px;float:left">
            <h3><li><router-link :to="{name:'detail',params:{id:row.id}}">{{row.id}}{{row.title}}</router-link></li></h3>
            <p>{{row.level}}</p>
            </div>
        </div>
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
            var that=this;
            this.$axios.request({
                url:this.$store.state.apiList.course,
                methods:'GET'
            }).then(function(ret){
                //AJAX成功后获取内容
                if(ret.data.code===1000){
                    console.log(ret.data.data)
                    that.courseList=ret.data.data
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