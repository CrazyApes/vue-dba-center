<template>
    <div id='addPriceDome'>
        <md-layout md-gutter class="content-body">
            <md-layout md-flex="20" md-middle-flex="100">
                <md-tree :data="tree"></md-tree>
            </md-layout>
            <md-layout md-flex="30" md-align="center">
                <form class="domeform" novalidate @submit.stop.prevent="submit">
                    <span class="md-display-1">表单</span>
                    <md-input-container>
                        <label>模板名称</label>
                        <md-input required type="text"></md-input>
                    </md-input-container>
                    <md-input-container>
                        <label for="movie">Movie</label>
                        <md-select name="movie" id="movie" v-model="movie">
                        <md-option value="fight_club">Fight Club</md-option>
                        <md-option value="godfather">Godfather</md-option>
                        <md-option value="godfather_ii">Godfather II</md-option>
                        <md-option value="godfather_iii">Godfather III</md-option>
                        <md-option value="godfellas">Godfellas</md-option>
                        <md-option value="pulp_fiction">Pulp Fiction</md-option>
                        <md-option value="scarface">Scarface</md-option>
                        </md-select>
                    </md-input-container>
                    <md-input-container>
                        <label>年龄</label>
                        <md-input type="number"></md-input>
                    </md-input-container>
                    <md-input-container :class="{'md-input-invalid':isPhone}">
                        <md-icon>phone</md-icon>
                        <label>联系电话</label>
                        <md-input type="tel" v-model="phone"></md-input>
                        <span class="md-error" v-html="phoneMsg"></span>
                    </md-input-container>
                    <md-switch v-model="checked8"  name="my-test8">Default</md-switch>
                    <div>
                        <md-radio v-model="radio3"  name="my-test-group3" md-value="1" class="md-primary">帅哥</md-radio>
                        <md-radio v-model="radio3"  name="my-test-group3" md-value="2" class="md-accent">美女</md-radio>
                    </div>

                    <md-input-container class="md-input-invalid">
                        <label>模板备注</label>
                        <md-textarea></md-textarea>
                        <span class="md-error">Textarea validation message</span>
                    </md-input-container>
                    <md-button class="md-raised md-accent">SAVE</md-button>
                </form>
            </md-layout>
        </md-layout>
    </div>
</template>

<script>
    import mdTree from '../import/mdTree'
    export default {
        name: 'addPriceDome',
        methods: {
            createNode(){
                this.$http.post("/api/templates/createNode",{param:{
                    parentId:"1",
                    customerId:"",
                    currentLevel:""
                }}).then((response)=>{
                    //成功
                    console.log(response);
                },(response)=>{
                    console.log(response);
                })
            }
        },
        data() {
            return {
                phoneMsg:"",
                phone:'',
                radio3: "2",
                movie:"",
                checked8:true,
                tree:[
                    {id:1,lv:0,label:"供应商",leaf:false,children:[
                        {id:2,lv:1,label:"贴板",leaf:false,children:[
                            {id:7,lv:2,label:"整套门",leaf:true},
                            {id:8,lv:2,label:"单面套",leaf:true},
                            {id:9,lv:2,label:"2面套",leaf:true}
                        ]},
                        {id:3,lv:1,label:"贴皮",leaf:true}
                    ]}
                ]
            }
        },
        computed: {
            isPhone(){
                return Boolean(this.phoneMsg);
            }
        },
        watch: {
            phone:function(value){
                this.phoneMsg=(value=='0'?"请输入正确的电话号码":"");
            }
        },
        mounted() {

        },
        components: {
            "md-tree": mdTree
        }
    }

</script>

<style scoped>
    .content-body {
        width: 98%;
        margin: 1% 1% auto 1%;
        min-height: 500px;
        min-width: 800px;
        max-height: 95%;
    }
    
    .domeform {
        width: 80%;
        min-width: 350px;
    }
</style>