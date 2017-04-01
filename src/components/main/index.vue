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
             this.$http.get('/api'+path).then(response => {
                    // 响应成功回调
                    console.log(response);
                }, response => {
                    // 响应错误回调
                     console.log("error:"+response);
                });
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
        margin: 20px 20px;
        color: white;
        cursor: default;
        background:#634598;
        line-height: 100px;
        vertical-align: middle;
        text-align: center;
        border-radius: 100%;
    }
</style>