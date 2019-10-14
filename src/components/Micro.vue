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
            this.$axios.request({
                url:'http://127.0.0.1:8000/api/v1/micro/',
                methods:'GET',
                params:{
                    token:this.$store.state.token
                }
            }).then(function(arg){
                console.log(arg)
            })
        }
    }

}
</script>