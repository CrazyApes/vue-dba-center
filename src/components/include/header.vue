<template>
  <div id="header">
    <md-layout md-gutter>
      <img class="logo" src="../../../static/images/logo.jpg" alt="logo" />
      <md-avatar>
          <img src="../../../static/images/logo.jpg" alt="Avatar">
        </md-avatar>
      
    </md-layout>
  </div>
</template>
<script>
  export default {
    name: 'header',
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
    background: #3f51b5;
  }
  .user{
    color:white;
  }
  .logo {
    margin-left: 10px;
    margin-top: 10px;
    width: 220px;
    height: 80px;
    vertical-align: middle;
  }
</style>