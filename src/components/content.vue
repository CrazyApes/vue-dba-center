<template>
    <div id="content">
        <v-header></v-header>
        <v-menu></v-menu>
        <!-- 路由匹配到的组件将渲染在这里 -->
        <transition enter-active-class="animated fadeIn" >
            <router-view class="content"></router-view>
        </transition>
        <v-footer></v-footer>
    </div>
</template>
<script>
    import header from './include/header.vue'
    import footer from './include/footer.vue'
    import menu from './include/menu.vue'
    export default {
        name: 'content',
        components: {
            'v-menu': menu,
            'v-header': header,
            'v-footer': footer
        }
    }

</script>
<style scoped>
.content{
    position: absolute;
    top:100px;
    left:240px;
    right:0px;
    bottom: 40px;
    overflow: none;
    background:#ECEFF1;
}

</style>
