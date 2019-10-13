<template>
    <div>
        <h1>登录</h1>
        <input type="text" placeholder="请输入用户名" v-model="user"/>
        <input type="password" placeholder="请输入密码" v-model="password"/>
        <button @click="login()">登录</button>
    </div>
</template>

<script>
export default {
    name:"index",
    data(){
        return{
            user:'',
            password:''
        }
    },
    methods:{
        login(){
            console.log('login....')
            var that=this;
            this.$axios.request({
                url:'http://127.0.0.1:8000/api/v1/auth/',
                method:'POST',
                data:{
                    user:this.user,
                    passwd:this.password
                },
                headers:{
                    'Content-Type':'application/json'
                }
            }).then(function(arg){
        
                console.log(arg);
                if(arg.data.code===1000){    
                    console.log('登录成功')
                    that.$store.state.token = arg.data.token
                    that.$store.state.username = arg.data.userinfo.username
                }else{
                    alert(arg.msg)
                }
            }).catch(function(arg){
                console.log('登录发生错误...')
                console.log(arg)
            })
                
                
            
        }
    }
}
</script>