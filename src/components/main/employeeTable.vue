<template>
    <div id='userTable'>
        <md-card class="content-form">
             <md-card-header-text>
                <div class="md-title table-title"><md-icon>&#xE8A3;</md-icon>员工列表</div>
                    <md-input-container class="inline-select ">
                            <label for="status">Status</label>
                            <md-select name="status"  v-model="searchForm.status">
                            <md-option value="0">在职</md-option>
                            <md-option value="1">离职</md-option>
                            </md-select>
                    </md-input-container>
                    <md-input-container class="inline-form">
                            <label>姓名</label>
                            <md-input type="text" v-model="searchForm.keywords"></md-input>
                    </md-input-container>
                    <md-button class="md-primary md-raised inline-button">查询</md-button>
            </md-card-header-text>
        </md-card>
        <md-table-card class="content-body">
            </md-table-alternate-header>
            <md-table  @select="selectRows">
                <md-table-header>
                    <md-table-row>
                        <md-table-head>
                            姓名
                        </md-table-head>
                        <md-table-head>
                            roleTitle
                        </md-table-head>
                        <md-table-head>
                            sex
                        </md-table-head>
                        <md-table-head>
                            status
                        </md-table-head>
                        <md-table-head>
                            操作
                        </md-table-head>
                    </md-table-row>
                </md-table-header>
                <md-table-body>
                    <md-table-row v-for="(item,rowIndex) in tableData" :key="rowIndex" :md-item="item" md-selection>
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
                            </md-layout>
                        </md-table-cell>
                    </md-table-row>
                </md-table-body>
            </md-table>
            <md-page style="min-height: 60px;font-size: 14px" md-size="5" :md-total="total" md-page="1" md-label="Rows" md-separator="of"
                :md-page-options="[5, 10, 25, 50]" @pagination="onPagination">
            </md-page>
        </md-table-card>
        <!--表格卡片结束-->
        <md-dialog ref="formDialog">
            <md-dialog-title style="width:500px;">Customer Info</md-dialog-title>
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
                <md-button class="md-primary " @click.native="close">Cancel</md-button>
                <md-button class="md-primary " @click.native="save">Save</md-button>
            </md-dialog-actions>
        </md-dialog>
        <!--自定义对话框-->
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
                searchForm:{
                    keywords:'',
                    status:''
                },
                selectItem: {},
                editform: {},
                tableData: [],
                size:5,
                page:1,
                selectData: [],
                total: 8888
            }
        },
        methods: {
            fetchData(page = 1, size = this.size) {
                console.log(page, size);
                var param={page:page,size:size};
                this.$http.get('/api/employees',{params:param}).then((response) => {
                    // 响应成功回调
                    console.log(response);
                    this.tableData=response.data.content;
                    this.total=response.data.totalElements;
                }, (response) => {
                    // 响应错误回调
                    this.$message.info(response.body);
                    console.log(response);
                });
            },
            edit(e) {
                this.selectItem = this.tableData[e];
                this.editform = JSON.parse(JSON.stringify(this.selectItem));
                this.$refs['formDialog'].open();
            },
            save() {
                console.log(this.editform);
                this.selectItem = this.editform;
                this.$refs['formDialog'].close();
            },
            close(e) {
                if (e) {
                    this.$refs['formDialog'].close();
                }
            },
            onPagination(pagination) {
                console.log(pagination);
                this.page=pagination.page;
                this.size=pagination.size;
                if (pagination.page*pagination.size <=this.total) {
                    this.fetchData(pagination.page,pagination.size);
                }
            },
            selectRows(e) {
                var selected = [];
                for (var a in e) {
                    selected[a] = e[a];
                }
                console.log(selected);
            }
        },
        created() {
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