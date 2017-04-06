<template>
  <div id="header">

      <img class="logo" src="../../../static/images/logo.jpg" alt="logo" />
      <md-button class="md-raised md-accent user" @click.native="logout">{{name}},你好！<md-tooltip md-direction="bottom">登出</md-tooltip></md-button>
  </div>
</template>
<script>
  export default {
    name: 'header',
    data () {
      return {
        name:this.$red.getEmp().name,
      }
    },
    methods: {
      logout(){
        window.localStorage.clear();
        this.$router.push({path:'/login'});
      }
    }
  }

</script>
<style scoped>
  #header {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 100px;
    box-sizing: border-box;
    background: #00897b;
  }
  .user{
    position: absolute;
    bottom: 10px;
    color:white;
    right:20px;

  }
  .logo {
    position: absolute;
    left: 10px;
    top: 10px;
    width: 220px;
    height: 80px;
  }
</style>