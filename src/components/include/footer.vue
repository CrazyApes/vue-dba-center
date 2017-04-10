<template>
    <div id="footer">
        <div class="footer-text no-select">
            <div class="left-action">
                <md-ink-ripple />
                ESC返回首页
            </div>
            <div class="center-text ">
                <md-icon>adb</md-icon>
                <span class="md-accent ">Welcome to adb center,thanks for your trust</span>
            </div>
            <div class="right-action">
                <md-ink-ripple />
                CTRL返回
            </div>
            <div class="right-action2">
                <md-ink-ripple />
                ALT前进
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'footer'
    }
</script>
<style scoped>
   #footer{
        position:absolute;
        bottom:0;
        height:40px;
        left:0;
        right:0;
        background: #00897b;
        color: white;
        line-height: 40px;
   }
   .left-action{
       display: inline-block;
       position: absolute;
       margin-left:20px;
       padding: 0 20px;
       border: 
   }
   .center-text{
       position: absolute;
       left:40%;
       width:30%;
       right:20%;
   }
   .right-action{
       display: inline-block;
       position: absolute;
       right:0px;
       margin-right: 20px;
       padding: 0 20px;
   }
   .right-action2{
       display: inline-block;
       position: absolute;
       right:0px;
       margin-right: 110px;
       padding: 0 20px;
   }
   .footer-text {
       vertical-align: center ;
   }
</style>