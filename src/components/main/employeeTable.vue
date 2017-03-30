<template>
    <div id='userTable'>
        <md-card class="content-form">
             <md-card-header-text>
                <div class="md-title table-title">员工列表</div>
                    <md-input-container class="inline-select ">
                            <label for="status">员工状态</label>
                            <md-select name="status"  v-model="searchform.status">
                            <md-option value="">所有</md-option>
                            <md-option value="ACTIVE">在职</md-option>
                            <md-option value="INACTIVE">离职</md-option>
                            </md-select>
                    </md-input-container>
                    <md-input-container class="inline-form">
                            <label>姓名</label>
                            <md-input type="text" name="keywords" v-model="searchform.keywords" @keypress.native.enter="search()"></md-input>
                    </md-input-container>
                    <md-button class="md-primary md-raised inline-button" @click.native="search()">查询</md-button>
            </md-card-header-text>
        </md-card>
        <md-table-card class="content-body">
            </md-table-alternate-header>
            <md-table>
                <md-table-header>
                    <md-table-row>
                        <md-table-head>姓名</md-table-head>
                        <md-table-head>职责</md-table-head>
                        <md-table-head>性别</md-table-head>
                        <md-table-head>员工状态</md-table-head>
                        <md-table-head>操作</md-table-head>
                    </md-table-row>
                </md-table-header>
                <md-table-body>
                    <md-table-row v-for="(item,rowIndex) in tableData" :key="rowIndex" :md-item="item" >
                        <md-table-cell>
                            {{item.name}}
                        </md-table-cell>
                        <md-table-cell>
                            {{item.role.title}}
                        </md-table-cell>
                        <md-table-cell>
                            {{item.sex}}
                        </md-table-cell>
                        <md-table-cell>
                            {{item.status=='ACTIVE'?'在职':'离职'}}
                        </md-table-cell>
                        <md-table-cell>
                            <md-layout>
                                <md-button class="md-icon-button md-raised" @click.native="edit(rowIndex)">
                                    <md-icon>edit</md-icon>
                                </md-button>
                                <md-button class="md-icon-button md-raised" @click.native="delete(rowIndex)">
                                    <md-icon>delete</md-icon>
                                </md-button>
                            </md-layout>
                        </md-table-cell>
                    </md-table-row>
                </md-table-body>
            </md-table>
            <md-page style="min-height: 60px;font-size: 14px" md-size="5" :md-total="total" :md-page="page" md-label="Rows" md-separator="of"
                :md-page-options="[5, 10, 25, 50]" @pagination="onPagination">
            </md-page>
        </md-table-card>
        <!--表格卡片结束-->
        <md-dialog ref="formDialog">
            <md-dialog-title style="width:500px;">
                <span class="md-title" style="font-size: 24px;font-weight: 400;">  员工信息  </span>
            </md-dialog-title>
            <md-dialog-content style="width:400px;margin-left:50px;">
                <form @submit.prevent="void(0)">
                    <md-input-container>
                        <label>Username</label>
                        <md-input type="text" v-model="editform.username"></md-input>
                    </md-input-container>
                    <md-input-container>
                        <label>Calories</label>
                        <md-input type="text" v-model="editform.calories"></md-input>
                    </md-input-container>
                    <md-input-container>
                        <label>Comments</label>
                        <md-input type="text" v-model="editform.comments"></md-input>
                    </md-input-container>
                </form>
            </md-dialog-content>
            <md-dialog-actions>
                <md-button class="md-primary md-raised" @click.native="save">Save</md-button>
                <md-button class="md-primary " @click.native="close">Cancel</md-button>
            </md-dialog-actions>
        </md-dialog>
        <!--自定义对话框结束-->
        <md-snackbar  ref="snackbar" >
            <span v-html="message"></span>
            <md-button class="md-accent md-raised"  @click.native="$refs.snackbar.close()">close</md-button>
        </md-snackbar>
        <!--自定义snackbar结束-->
    </div>
</template>

<script>
    import mdPagination from "../import/mdPagination.vue";
    export default {
        name: 'userTable',
        components: {
            "md-page":mdPagination
        },
        data() {
            return {
                searchform:{
                    keywords:'',
                    status:''
                },
                pageform:{},
                checkbox:true,
                selectItem: {},
                editform: {
                    username:''

                },
                tableData: [],
                size:5,
                page:1,
                total: 0,
                message:'',
            }
        },
        methods: {
            search(){
                let param={};
                if(this.searchform.status!=""){
                    param.status=this.searchform.status;
                }
                if(this.searchform.keywords!=''){
                    param.keywords=this.searchform.keywords;
                }
                this.pageform=param;
                this.fetchData();
            },
            fetchData(page = 1, size = this.size,params=this.pageform) {
                console.log(page, size,params);
                this.page=page;
                let param={};
                if(params&&params.length==0){
                    param={page:page,size:size};
                }else{
                    param={page:page,size:size,...params};
                }
                this.$http.get('/api/employees',{params:param}).then((response) => {
                    this.tableData=response.data.content;
                    this.total=response.data.totalElements;
                }, (response) => {
                    this.sendMessage(response.body);
                });
            },
            edit(e) {
                this.editform = this.tableData[e];
                this.$refs['formDialog'].open();
            },
            save() {
                console.log(this.editform);
                this.$refs['formDialog'].close();
            },
            close(e) {
                if (e) {
                    this.$refs['formDialog'].close();
                }
            },
            onPagination(pagination) {
                this.page=pagination.page;
                this.size=pagination.size;
                this.fetchData(pagination.page,pagination.size);
            },
            sendMessage(message){
                this.message=message;
                this.$refs.snackbar.open();
            }
        },
        mounted() {
            this.fetchData();
        }
    }

</script>

<style scoped>
    .content-form {
        width: 98%;
        margin: 1% 1% 1% 1%;
        height:140PX;
        cursor: default;
    }
    .content-body {
        width: 98%;
        margin: 0px 1% auto 1%;
        max-height: 95%;
    }
    .table-title{
        padding: 10px 10px;
    }
    .inline-form{
        width:250px;
        margin-left:50px;
        top: -10px;
        display: inline-block;
    }
    .inline-select{
        width:250px;
        margin-left:50px;
        display: inline-block;
    }
    .inline-button{
        margin-top:10px;
    }
    
</style>