<template>
    <div>
        <h1>
        <p>{{detail.title}}
        </p></h1>
        <p>{{detail.img}}</p>
        <p>{{detail.level}}</p>
        <p>{{detail.slogan}}</p>
        <p>{{detail.why}}</p>
        
        <div><ul v-for="(row,index) in detail.chapers" :key="index">
            <li>{{row.name}}</li>
        </ul></div>
        <div>
            <h3>推荐</h3>
        <ul v-for="(row,index) in detail.recommends" :key="index">
           <li @click="chgDetail(row.id)"> {{row.title}}</li>
        </ul></div>
    </div>
</template>

<script>

export default {
    name:"detail",
    data(){
        return {
            msg:'Detail',
            detail:{
                course:null,
                title:null,
                img:null,
                level:null,
                slogan:null,
                why:null,
                recommends:[],
                chapers:[]
            }
        }
    },
    mounted:function(){
        this.initDetail(this.$route.params.id);
    },
    methods:{
        
        initDetail:function(id){
            var that=this;
            this.$axios.request({
                url:'http://127.0.0.1:8000/api/v1/course/'+id+'/',
                methods:'GET'
            }).then(function(ret){
                 if(ret.data.code===1000){
                     that.detail=ret.data.data;
                 }else{
                     alert(ret.data.error);
                 }
            }           
            ).catch(function (params) {
                //AJAX 请求失败
            })
        },
        chgDetail:function(id){
            this.initDetail(id);
            this.$router.push({name:'detail', params:{id:id}});
        }
    }
}
</script>