<template>


      <div id="app">
        <router-link to="/index">index</router-link>
        <router-link to="/course">course</router-link>
        <router-link to="/micro">micro</router-link>
        <router-link to="/news">news</router-link>
        <div v-if="this.$store.state.token">
          <a>{{this.$store.state.token}}</a>
        </div>
        <div v-else>
        <router-link to="/login">Login</router-link>
        </div>
        <router-view />
      </div>
    

</template>

<script>

export default {
  name: 'App',
  data(){
  	return {
  	}
  },

}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
