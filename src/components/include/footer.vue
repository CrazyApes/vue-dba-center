<template>
    <div id="footer">
        <div class="footer-text no-select">
                <md-icon>adb</md-icon>
                <span class="md-accent ">Welcome to adb center,thanks for your trust</span>
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
        background: darkslateblue;
        color: navajowhite;
        text-align:center;
        line-height: 40px;
   }
   .footer-text {
       vertical-align: center ;
   }
</style>