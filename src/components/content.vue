<template>
    <div id="content">
        <v-header></v-header>
        <v-menu :show="show"></v-menu>
        <!-- 路由匹配到的组件将渲染在这里 -->
        <transition enter-active-class="animated fadeIn" >
            <router-view class="content" :class="{hide:!show}"></router-view>
        </transition>
        <v-footer></v-footer>
        <div class="menu-hide-button" :class="{hideTag:!show} ">
            <md-button class="md-icon-button md-raised md-accent" @click.native="hidenMenu">
                <md-icon v-html="tag">add</md-icon>
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
        data () {
            return {
                show:true,
                tag:'add'
            }
        },
        components: {
            'v-menu': menu,
            'v-header': header,
            'v-footer': footer
        },
        methods: {
            hidenMenu(){
                this.show=!this.show;
            }
        },
        mounted () {
            document.onkeydown = (event)=>{
                var e = event || window.event || arguments.callee.caller.arguments[0];
                if (e && e.keyCode == 27&&this.$red.getEmp()) { // 按 Esc
                    this.$router.push({path:'/content/main'})
                }
            };
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
    background:#fafafa;
}
.hide{
    left: 0px;
    transition: 0.5s;
}
.hideTag{
    left:0px;
    transition:sx 0.5;
}
@keyframes sx{
    from {
        transform: rotateZ(0);
    }
    to {
        transform: rotateZ(180deg);
    }
}
.menu-hide-button{
    position: fixed;
    top:80px;
    left:220px;
    z-index: 10
}
</style>
