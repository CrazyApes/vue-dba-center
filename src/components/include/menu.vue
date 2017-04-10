<template>
     <div id="menu" >
      <md-list >
        <md-list-item  @click.native="turn('/content/main')" >
          <md-icon class="md-size-1x">home</md-icon>
          <span >首页</span>
        </md-list-item>
        <template v-for="item in menuList">
                <md-list-item   @click.native="turn(item.path)" class="md-inset">{{item.name}}</md-list-item>
        </template>
      </md-list>
     </div>
</template>
<script>
    export default{
      name:'menu',
      props: ['show'],
      data () {
        return {
          menuList:[]
        }
      },
      mounted () {
        this.fetchData();
      },
      methods: {
        fetchData(){
          this.menuList=[
            {name:'员工管理',path:'/content/employeeTable'},
            {name:'客户管理',path:'/content/customerTable'},
            {name:'价格模板',path:'/content/addPriceDome'}
          ];
        },
        turn(e){
          this.$router.push({path:e});
        }
      }
    }
</script>
<style>
  #menu{
    overflow: auto;
    position: absolute;
    top:100px;
    width: 240px;
    left:0;
    bottom:40px;
    background: #009688;
  }


</style>