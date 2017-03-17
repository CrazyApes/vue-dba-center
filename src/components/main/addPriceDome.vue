<template>
    <div id='addPriceDome'>
        <md-layout md-gutter class="content-body">
            <md-layout md-flex="40" id="treePannel">
                <md-tree></md-tree>
            </md-layout>
        </md-layout>
    </div>
</template>

<script>
    import mdTree from '../import/mdTree'
    export default {
        name: 'addPriceDome',
        methods: {

        },
        data() {
            return {

            }
        },
        mounted() {

        },
        components: {
            "md-tree":mdTree
        }
    }

</script>

<style scoped>
    .content-body {
        width: 98%;
        margin: 1% 1% auto 1%;
        min-height: 500px;
        min-width: 800px;
        max-height: 95%;
    }

    #treePannel {
        background: papayawhip;
    }
</style>