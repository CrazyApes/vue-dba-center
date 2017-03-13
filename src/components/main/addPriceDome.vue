<template>
    <div id='addPriceDome'>
        <md-layout md-gutter class="content-body">
            <md-layout md-flex-offset="10" md-flex="40" id="treePannel">

            </md-layout>
            <md-layout md-flex="40" id="formPannel">
                asddasd
            </md-layout>
        </md-layout>
    </div>
</template>

<script>
export default {
    name: 'addPriceDome',
    methods: {

    },
    data () {
        return {

        }
    },
    mounted () {

    }
}
</script>

<style scoped>
    .content-body{width:98%;margin:1% 1% auto 1%;min-height: 500px;min-width: 800px;max-height: 95%;}
    #treePannel{
        background: cadetblue;
    }
    #formPannel{
        background: lightblue;
    }
</style>