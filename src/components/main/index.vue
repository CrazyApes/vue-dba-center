<template>
        <div id='index'>

            <span class="md-display-1">模块列表</span><md-button class="md-raised md-accent" @click.native="shuffle()" md-tooltip="随便玩">fun</md-button>
            <transition-group name="flip-list" tag="ul">
                <li v-for="item in list"  :key="item.name" class="fundation-card" @click="getApi(item.path)">{{item.name}}</li>
            </transition-group>

        </div>
</template>

<script>
export default {
    name: 'index',
    data () {
        return {
            list:[]
        }
    },
    mounted () {
        this.fetchData();
    },
    methods: {
        fetchData(){
            this.list=[
                {name:"客户分页",path:"/customers?page=1&size=1"},
                {name:"客户信息",path:"/customers/1"},
                {name:"员工分页",path:"/employees?page=1&size=1"},
                {name:"员工信息",path:"/employees/1"},
                {name:"角色分页",path:"/roles?page=1&size=1"}

            ]
        },
        shuffle(){
            this.list=_.shuffle(this.list);
        },
        getApi(path){
            this.$red.ajax(this,'get','/api'+path,null,function(status,data){
                console.log(status,data);
            })

        }
    }
}
</script>

<style scoped>
    #index{
        box-sizing: content-box;
        padding: 20px;
    }
    #index ul{
        list-style: none;
    }
    #index ul li:nth-child(5n+1){
        color: white;
        background:#00695C
    }
    #index ul li:nth-child(5n+2){
        color: white;
        background:#00796B
    }
    #index ul li:nth-child(5n+3){
        color: white;
        background:#00897B
    }
    #index ul li:nth-child(5n+4){
        color: white;
        background:#009688
    }
    #index ul li:nth-child(5n+5){
        color: white;
        background:#26A69A
    }

    #index ul li{
        float:left;
        transform: scale(1) ;
        transition: transform .5s;
    }
    #index ul li:hover{
        transform: scale(1.2) ;
        transition: transform .5s;
    }

    .flip-list-move {
        transition: transform .5s;
    }
    .fundation-card{
        width: 100px;
        height: 100px;
        margin: 5px 5px;

        cursor: pointer;

        line-height: 100px;
        vertical-align: middle;
        text-align: center;
        border-radius: 5%;
    }
</style>