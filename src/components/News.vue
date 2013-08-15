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
            msg:'这是News新闻'
        }
    },
    mounted(){
        if(!this.$store.state.token){
            this.$router.push({name:'login'})
        }
    }
}
</script>