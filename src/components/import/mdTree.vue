<template>
        <div id='mdTree'>
            <mdTreeNode v-for="(item,index) in items" :node="item" ></mdTreeNode>
        </div>
</template>

<script>
    import mdTreeNode from './mdTreeNode'
    export default {
        name: 'mdTree',
        props: ['data'],
        data () {
            return {
                items:[
                    {id:1,lv:0,label:"Node 1",leaf:false,children:[
                        {id:2,lv:1,label:"Node 2",leaf:true},
                        {id:3,lv:1,label:"Node 4",leaf:true},
                        {id:4,lv:1,label:"Node 3",leaf:false,children:[
                            {id:5,lv:2,label:"Node 5",leaf:true},
                            {id:6,lv:2,label:"Node 6",leaf:true}
                        ]}
                    ]}
                ]
            }
        },
        mounted () {
          this.$store.commit('setNode',{});
        },
        methods: {
            getChangeNode(value,node){
                console.log(value,JSON.stringify(node));
            },
            selectedOne(){
                this.selected=true;
                this.$store.commit('setNode',this.node);
            },
        },
        components: {
            'mdTreeNode':mdTreeNode
        }
    }

</script>

<style scoped>
    #mdTree{
        width:100%;
        margin: 5px;
        padding: 5px;
        border: 1px solid #80CBC4
    }
</style>