<template>
        <div id='mdTree'>
            <mdTreeNode v-for="(item,index) in items" :node="item" @selected="selectedOne"></mdTreeNode>
        </div>
</template>

<script>
    import mdTreeNode from './mdTreeNode'
    export default {
        name: 'mdTree',
        data () {
            return {
                items:[
                    {id:1,lv:0,label:"Node One",leaf:false,children:[
                        {id:2,lv:1,label:"Node tWO",leaf:true},
                        {id:3,lv:1,label:"Node tWO1",leaf:true},
                        {id:4,lv:1,label:"Node tWO2",leaf:false,children:[
                            {id:5,lv:2,label:"Node tWO3",leaf:true},
                            {id:6,lv:2,label:"Node tWO4",leaf:true}
                        ]}
                    ]}
                ]
            }
        },
        methods: {
            getChangeNode(value,node){
                console.log(value,JSON.stringify(node));
            }
        },
        components: {
            'mdTreeNode':mdTreeNode
        }

    }

</script>

<style scoped>
    #mdTree{
        width:300px;
        margin: 5px;
        padding: 5px;
        border: 1px solid #80CBC4
    }
</style>