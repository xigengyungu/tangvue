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
        if(!this.$store.state.token)
    }
}
</script>