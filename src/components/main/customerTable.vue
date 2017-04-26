<template>
    <div id='userTable'>
        <md-card class="content-form">
            <md-card-header-text>
                <div class="md-title table-title">客户列表</div>
            </md-card-header-text>
            <md-card-content>
                <form @submit.stop.prevent="submit">
                    <md-input-container class="inline-form">
                        <label>关键字</label>
                        <md-input type="text" name="keywords" v-model="searchform.keywords" @keypress.native.enter="search()"></md-input>
                    </md-input-container>
                    <md-button class="md-primary md-raised inline-button" @click.native="search()">检索</md-button>
                    <md-button class="md-accent md-raised inline-button" @click.native="add()">添加客户</md-button>
                </form>
            </md-card-content>
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
                    <md-table-row v-for="(item,rowIndex) in tableData" :key="rowIndex" :md-item="item">
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
                                <md-button class="md-icon-button md-raised" @click.native="edit(item)">
                                    <md-icon>edit</md-icon>
                                </md-button>
                                <md-button class="md-icon-button md-raised" @click.native="del(item)">
                                    <md-icon>delete</md-icon>
                                </md-button>
                            </md-layout>
                        </md-table-cell>
                    </md-table-row>
                </md-table-body>
            </md-table>
            <md-page style="min-height: 60px;font-size: 14px" :md-size="size" :md-total="total" :md-page="page" md-label="Rows" md-separator="of"
                :md-page-options="[5, 10, 25, 50]" @pagination="onPagination">
            </md-page>
        </md-table-card>
        <!--表格卡片结束-->
        <md-dialog ref="formDialog">
            <md-dialog-title style="width:500px;">
                <span class="md-title" style="font-size: 24px;font-weight: 400;">  员工信息  </span>
            </md-dialog-title>
            <md-dialog-content style="width:400px;margin-left:50px;">
                <form @submit.stop.prevent="submit" ref="aform" v-show="addFlag">
                    <md-input-container>
                        <label>用户名</label>
                        <md-input type="text" name="ausername" v-model="addform.username"></md-input>
                    </md-input-container>
                    <md-input-container>
                        <label>密码</label>
                        <md-input type="text" name="apassword" v-model="addform.password"></md-input>
                    </md-input-container>
                    <md-input-container>
                        <label>姓名</label>
                        <md-input type="text" name="aname" v-model="addform.name"></md-input>
                    </md-input-container>
                </form>
                <form @submit.stop.prevent="submit" ref="dform" v-show="!addFlag">
                    <md-input-container>
                        <label>姓名</label>
                        <md-input type="text" name="dname" v-model="editform.name"></md-input>
                    </md-input-container>
                    <md-input-container>
                        <label for="dsex">性别</label>
                        <md-select name="dsex" v-model="editform.sex">
                            <md-option value="MALE">男</md-option>
                            <md-option value="FEMALE">女</md-option>
                            <md-option value="SECRET">保密</md-option>
                        </md-select>
                    </md-input-container>
                    <md-input-container>
                        <label for="dstatus">员工状态</label>
                        <md-select name="dstatus" v-model="editform.status">
                            <md-option value="ACTIVE">在职</md-option>
                            <md-option value="INACTIVE">离职</md-option>
                        </md-select>
                    </md-input-container>
                    <md-switch v-model="editPassword" name="edpassword">是否修改密码</md-switch>
                    <transition enter-active-class="animated bounceIn">
                        <md-input-container v-show="editPassword">
                            <label>密码</label>
                            <md-input type="text" name="dpassword" v-model="editform.password"></md-input>
                        </md-input-container>
                    </transition>
                </form>
            </md-dialog-content>
            <md-dialog-actions>
                <md-button class="md-primary md-raised" @click.native="save">Save</md-button>
                <md-button class="md-primary " @click.native="$refs['formDialog'].close()">Cancel</md-button>
            </md-dialog-actions>
        </md-dialog>
        <!--自定义对话框结束-->
        <md-snackbar ref="snackbar">
            <span v-html="message"></span>
            <md-button class="md-accent md-raised" @click.native="$refs.snackbar.close()">close</md-button>
        </md-snackbar>
        <!--自定义snackbar结束-->
    </div>
</template>

<script>
    import mdPagination from "../import/mdPagination.vue";

    export default {
        name: 'userTable',
        components: {
            "md-page": mdPagination
        },
        data() {
            return {
                searchform: {
                    keywords: '',
                    status: ''
                },
                addFlag: false,
                editPassword: false,
                editform: {},
                addform: {
                    username: '',
                    password: '',
                    name: ''
                },
                tableData: [],
                size: 5,
                page: 1,
                total: 0,


                pageform: {},
                message: '',//消息snake
            }
        },
        methods: {
            del(e) {
                if (confirm('确认删除员工：' + e.name)) {
                    this.$red.ajax(this,'delete','/api/' + e.id,null,(status,data)=>{
                        if(status){
                            this.fetchData(this.page, this.size);
                            this.sendMessage('员工：' + e.name + '&emsp;已经删除!');
                        }else{
                            this.sendMessage(data);
                        }
                    })
                }
            },
            add() {
                this.addFlag = true;
                this.addform = {};
                this.$refs['aform'].reset();
                this.$refs['formDialog'].open();
            },
            edit(e) {
                this.addFlag = false;
                this.editform = Object.assign({}, e);
                this.$refs['formDialog'].open();
            },
            save() {

            },
            onPagination(pagination) {
                this.page = pagination.page;
                this.size = pagination.size;
                this.fetchData(pagination.page, pagination.size);
            },
            sendMessage(message) {
                this.message = message;
                this.$refs.snackbar.open();
            },
            search() {
                this.pageform=this.$red.cut(this.searchform);
                this.fetchData();
            },
            fetchData(page = 1, size = this.size, params = this.pageform) {
                let maxPage=Math.ceil(this.total/this.size);
                this.page=page>maxPage&&page!=1?maxPage:page;
                this.$red.ajax(this,'get','/api/customers',{ page: this.page, size: size, ...params },(status,data)=>{
                    if(status){
                        this.tableData = data.content;
                        this.total = data.totalElements;
                    }else{
                        this.sendMessage(data);
                    }
                });
            },
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
        cursor: default;
    }
    
    .content-body {
        width: 98%;
        margin: 0px 1% auto 1%;
        max-height: 95%;
    }
    
    .table-title {
        padding: 10px 10px;
    }
    
    .inline-form {
        width: 250px;
        margin-left: 50px;
        top: -10px;
        display: inline-block;
    }
    .inline-select {
        width: 250px;
        margin-left: 50px;
        display: inline-block;
    }
    .inline-button {
        margin-top: 10px;
    }
</style>