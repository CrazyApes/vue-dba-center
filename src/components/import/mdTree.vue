<template>
    <div id='mdTree'>
        <mdTreeNode v-for="(item,index) in items" :label="item.label" :lv="item.lv" :leaf="item.leaf">
                <mdTreeNode v-for="(c,index) in item.children" slot="childNode" :leaf="c.leaf" :lv="c.lv" :label="c.label"></mdTreeNode>
        </mdTreeNode>
    </div>
</template>

<script>
    import mdTreeNode from './mdTreeNode'
    export default {
        name: 'mdTree',
        data () {
            return {
                items:[
                    {lv:0,label:"Node One",leaf:false,children:[
                        {lv:1,label:"Node tWO",leaf:true},
                        {lv:1,label:"Node tWO1",leaf:true},
                        {lv:1,label:"Node tWO2",leaf:true},
                        {lv:1,label:"Node tWO3",leaf:true},
                        {lv:1,label:"Node tWO4",leaf:true},
                    ]}
                ]
            }
        },
        methods: {

        },
        components: {
            'mdTreeNode':mdTreeNode
        }
    }

</script>

<style scoped>
    #mdTree{
        margin: 5px;
        padding: 5px;
        background: yellowgreen;
    }
</style>