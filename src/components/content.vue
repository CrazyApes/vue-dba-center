<template>
    <div id="content">
        <v-header></v-header>
        <v-menu :class="{hideMenu:!show}"></v-menu>
        <!-- 路由匹配到的组件将渲染在这里 -->
        <transition enter-active-class="animated zoomIn" leave-active-class="animated zoomOut">
            <router-view class="content" :class="{hide:!show}"></router-view>
        </transition>
        <v-footer></v-footer>
        <div class="menu-hide-button" :class="{hideTag:!show}">
            <md-button class="md-icon-button md-raised md-accent" @click.native="hidenMenu">
                <md-tooltip :md-direction="tooltip.dirction" v-html="tooltip.text">隐藏菜单</md-tooltip>
                <md-icon>menu</md-icon>
            </md-button>
        </div>
    </div>
</template>
<script>
    import header from './include/header.vue'
    import footer from './include/footer.vue'
    import menu from './include/menu.vue'
    export default {
        name: 'content',
        data() {
            return {
                show: true,
                tooltip:{
                    dirction:'top',
                    text:'隐藏目录'
                }
            }
        },
        components: {
            'v-menu': menu,
            'v-header': header,
            'v-footer': footer
        },
        methods: {
            hidenMenu() {
                this.show = !this.show;
                this.tooltip = !this.show?{
                    dirction: 'right',
                    text: '打开目录'
                }:{
                    dirction:'top',
                    text:'隐藏菜单'
                };
            },
            exitFullscreen() {
                if (document.exitFullscreen) {
                    document.exitFullscreen();
                } else if (document.msExitFullscreen) {
                    document.msExitFullscreen();
                } else if (document.mozCancelFullScreen) {
                    document.mozCancelFullScreen();
                } else if (document.webkitExitFullscreen) {
                    document.webkitExitFullscreen();
                }
            },
            fullscrean() {
                let fullscreenEnabled =
                    document.fullscreenEnabled ||
                    document.mozFullScreenEnabled ||
                    document.webkitFullscreenEnabled ||
                    document.msFullscreenEnabled;
                let element = document.getElementById('app');
                if (fullscreenEnabled) {
                    element.webkitRequestFullScreen();
                } else {
                    console.log('浏览器当前不能全屏');
                }
            }
        },
        mounted() {
            document.onkeydown = (event) => {
                let e = event || window.event || arguments.callee.caller.arguments[0];
                if (e && e.keyCode == 27 && this.$red.getEmp()) { // 按 Esc
                    this.$router.push({ path: '/content/main' })
                } else if (e && e.keyCode == 17 && this.$red.getEmp()) {
                    if (this.$router.history.current.path == "/content/main") {
                        return false;
                    } else {
                        this.$router.go(-1);
                    }
                } else if (e && e.keyCode == 18 && this.$red.getEmp()) {
                    this.$router.go(1);
                }
            };
        }
    }

</script>
<style scoped>
    .content {
        position: absolute;
        top: 100px;
        left: 240px;
        right: 0px;
        bottom: 40px;
        overflow: none;
        background: #fafafa;
        transition: 0.5s;
        z-index: 2;
    }
    
    .hide {
        left: 0px;
    }
    
    .menu-hide-button {
        position: fixed;
        top: 150px;
        left: 200px;
        z-index: 3;
        transition: 0.5s;
    }
    
    .hideTag {
        left: -20px;
    }
    
    .hideMenu {
        display: none;
    }
</style>