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
                {name:"员工管理",path:"/content/employeeTable"},
                {name:"客户管理",path:"/content/customerTable"},
                {name:"价格模板",path:"/content/addPriceDome"}
            ]
        },
        shuffle(){
            this.list=_.shuffle(this.list);
        },
        getApi(path){
            this.$router.push({path:path});
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
        font-size: 18px;
        transition: transform .5s;
    }

    .flip-list-move {
        transition: transform .5s;
    }
    .fundation-card{
        width: 150px;
        height: 150px;
        margin: 5px 20px;
        font-size: 16px;
        cursor: pointer;
        user-select: none;
        line-height: 150px  ;
        vertical-align: middle;
        text-align: center;
        border-radius: 5%;
    }
</style>