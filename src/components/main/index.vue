<template>
        <div id='index'>

            <span class="md-display-1">模块列表</span><md-button class="md-raised md-accent" @click.native="shuffle()" md-tooltip="随便玩">fun</md-button>
            <transition-group name="flip-list" tag="ul">
                <li v-for="item in list"  :key="item.name" class="fundation-card">{{item.name}}</li>
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
        this.shuffle();
    },
    methods: {
        fetchData(){
            for(var i=0;i<15;i++){
                this.list.push({
                    name:'用户列表'+i
                })
            }
        },
        shuffle(){
            this.list=_.shuffle(this.list);
        }
    }
}
</script>

<style scoped>
    #index{
        box-sizing: content-box;
        padding: 20px;
        background: burlywood;
    }
    #index ul{
        list-style: none;
    }
    #index ul li{
        float:left;
    }
    #index ul li:hover{
        transform: scale(1.2) ;
        transition: transform .5s;
    }
    .flip-list-move {
        transition: transform 1s;
    }
    .fundation-card{
        width: 100px;
        height: 100px;
        margin: 20px 20px;
        color: white;
        background:#634598;
        line-height: 100px;
        vertical-align: middle;
        text-align: center;
        border-radius: 100%;
    }
</style>