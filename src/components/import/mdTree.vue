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
                items:[]
            }
        },
        mounted () {
          this.items=this.data;
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
    }
</style>