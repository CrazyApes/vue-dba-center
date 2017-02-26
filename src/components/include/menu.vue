<template>
     <div id="menu">
      <md-list>
        <md-list-item class="">
          <md-icon>whatshot</md-icon>
          <span>News</span>

          <md-list-expand>
            <md-list>
              <md-list-item @click.native="turn('/content/main')" class="md-inset">首页</md-list-item>
              <md-list-item @click.native="turn('/content/userTable')" class="md-inset">Americas</md-list-item>
              <md-list-item @click.native="turn('/content/main')" class="md-inset">Europe</md-list-item>
            </md-list>
          </md-list-expand>
        </md-list-item>
        <md-list-item>
          <md-icon>videogame_asset</md-icon>
          <span>Games</span>
          <md-list-expand>
            <md-list>
              <md-list-item @click.native="turn('/content/main')" class="md-inset">Console</md-list-item>
              <md-list-item class="md-inset">PC</md-list-item>
              <md-list-item class="md-inset">Phone</md-list-item>
            </md-list>
          </md-list-expand>
        </md-list-item>

        <md-list-item>
          <md-icon>video_library</md-icon>
          <span>Video</span>

          <md-list-expand>
            <md-list>
              <md-list-item class="md-inset">Humor</md-list-item>
              <md-list-item class="md-inset">Music</md-list-item>
              <md-list-item class="md-inset">Movies</md-list-item>
              <md-list-item class="md-inset">TV Shows</md-list-item>
            </md-list>
          </md-list-expand>
        </md-list-item>
      </md-list>



     </div>
</template>
<script>
    export default{
      name:'menu',
      data () {
        return {
          menuList:[
            {path:'/content/userTable'}
          ],
        }
      },
      methods: {
        turn(e){
          this.$router.push({path:e});
        }
      }
    }
</script>
<style scoped>
  #menu{
    overflow: auto;
    position: absolute;
    top:100px;
    width: 240px;
    left:0;
    bottom:40px;
    background: fixed;
  }
</style>