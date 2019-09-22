<template>
    <div>
        详细页面
        <h1>{{msg}}</h1>
    </div>
</template>

<script>
export default {
    name:"detail",
    data(){
        return {
            msg:'Detail'
        }
    },
    mounted(){
        console.log(this.$route.params.id);
    }
}
</script>