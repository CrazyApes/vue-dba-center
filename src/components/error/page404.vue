<template>
    <div id='page404'>
        <div class="center-squre">
            <div>
                <span class="md-display-4" style="color:white">404</span>
                
            </div>
            <div>
                <span class="md-display-1" style="color:white">Sorry,I can't find the resource</span>
            </div>
            <md-button  class="md-raised md-accent " @click.native="back" style="margin:20%;width:200px;height:50px;"><span>back</span></md-button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'page404',
        methods: {
            back(){
                this.$router.go(-1);
            }
        }   
    }

</script>

<style scoped>
    #page404 {
        position: absolute;
        width: 100%;
        top: 0px;
        bottom: 0px;
        background: url(../../../static/images/zhuoku036.jpg)
    }
    .center-squre{
        margin:10% 5%;
        width:35vw;
    }
</style>