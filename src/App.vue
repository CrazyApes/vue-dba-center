<template>
  <div id="app">
    <transition 
			enter-active-class="animated fadeIn"
    	leave-active-class="animated fadeOut">
       <router-view></router-view>
    </transition>
  </div>
</template>
<script>
  import header from './components/include/header.vue'
  import footer from './components/include/footer.vue'
  import menu from './components/include/menu.vue'
export default {
  name: 'app',
  components: {
    'v-menu':menu,
    'v-header':header,
    'v-footer':footer
  }
}
</script>
<style>
#app{
	background-image: url('../static/images/login-bg.jpg');
  overflow: hidden;
  position: absolute;
  height:100%;
  width:100%; 
  top:0;
  left:0;
  bottom:0;
}

</style>