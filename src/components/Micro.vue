<template>
    <div>
        <h1>{{msg}}</h1>
    </div>
</template>

<script>
export default {
    name:"index",
    data(){
        return {
            msg:'这是Micro页'
        }
    },
    mounted(){
        this.initMicro();
    },
    methods:{

        initMicro(){
            var that=this;
            this.$axios.request({
                url:this.$store.state.apiList.micro,
                methods:'GET',
                params:{
                    token:this.$store.state.token
                }
            }).then(function(arg){
                console.log(arg)
                if(arg.data.code===1000){
                    that.msg=arg.data.msg;
                }
            })
        }
    }

}
</script>