<template>
    <div id='userTable' style="display: flex">
        <md-table-card class="content-body">
            <md-toolbar>
                <span class="md-title" textLable>客户列表</span>
                <md-button class="md-icon-button md-raised">
                    <md-icon>filter_list</md-icon>
                </md-button>
                <md-button class="md-icon-button md-raised" @click.native="chengetable()">
                    <md-icon>search</md-icon>
                </md-button>
            </md-toolbar>
            <md-table-alternate-header md-selected-label="selected">
                <md-button class="md-icon-button md-raised">
                    <md-icon>delete</md-icon>
                </md-button>
                <md-button class="md-icon-button md-raised">
                    <md-icon>more_vert</md-icon>
                </md-button>
            </md-table-alternate-header>
            <md-table @sort="sort" @select="selectRows">
                <md-table-header>
                    <md-table-row>
                        <md-table-head md-sort-by="username">
                            Username
                        </md-table-head>
                        <md-table-head md-sort-by="calories" md-tooltip="种类的话必须使用数字">
                            Calories (g)
                        </md-table-head>
                        <md-table-head>
                            <md-icon>message</md-icon>
                            <span>Comments</span>
                        </md-table-head>
                        <md-table-head>
                            OrderNum
                        </md-table-head>
                    </md-table-row>
                </md-table-header>
                <md-table-body>
                    <md-table-row v-for="(item,rowIndex) in tableData" :key="rowIndex" :md-item="item" md-selection>
                        <md-table-cell>
                            {{item.username}}
                        </md-table-cell>
                        <md-table-cell>
                            {{item.calories}}
                        </md-table-cell>
                        <md-table-cell>
                            {{item.comments}}
                        </md-table-cell>
                        <md-table-cell>
                            {{item.id}}
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
            <md-table-pagination style="min-height: 60px;font-size: 14px" md-size="5" :md-total="total" md-page="1" md-label="Rows" md-separator="of" :md-page-options="[5, 10, 25, 50]"
                @pagination="onPagination">
            </md-table-pagination>
        </md-table-card>
        <!--表格卡片结束-->
        <md-dialog ref="formDialog" >
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
                <md-button class="md-primary md-raised" textLable  @click.native="close">取消</md-button>
                <md-button class="md-primary md-raised" textLable @click.native="save">保存</md-button>
            </md-dialog-actions>
        </md-dialog>
        <!--自定义对话框-->
    </div>
</template>

<script>
    export default {
        name: 'userTable',
       
        data() {
            return {
                selectItem:{},
                editform:{},
                tableData: [],
                selectData:[],
                total:100
            }
        },
        methods: {
            chengetable(){
                console.log('change');
                this.tableData=[];
                for(var a=1;a<10;a++){
                    this.tableData.push({
                        username: 'asdqweqed3'+a,
                        calories: 5001+Math.round(Math.random()*100),
                        comments: 1223,
                        id: a
                    })
                }
                this.total=this.tableData.length;
            }
            ,
            edit(e){
                this.selectItem=this.tableData[e];
                this.editform=JSON.parse(JSON.stringify(this.selectItem));
                this.$refs['formDialog'].open();
            },
            save(){
                console.log(this.editform);
                this.selectItem=this.editform;
                this.$refs['formDialog'].close();
            },
            close(e){
                if(e){
                    this.$refs['formDialog'].close();
                }
            },
            onPagination(pagination) {
                console.log(pagination);
                if(pagination.page>(this.total/pagination.size)){
                    return;
                }
            },
            selectRows(e) {
                var selected=[];
                for(var a in e){
                    console.log(a)
                    selected[a]=e[a];
                }
                console.log(selected);
            },
            sort(e){
                // e={name: "username", type: "desc"};
                console.log(e);
            }

        },
        mounted(){
            this.tableData=[{
                    username: 'asdasdasd3',
                    calories: 5001,
                    comments: 1223,
                    id: 1
                }, {
                    username: 'asdasdasd2',
                    calories: 5002,
                    comments: 15523,
                    id: 2
                }, {
                    username: 'asdasdasd1',
                    calories: 5000,
                    comments: 123,
                    id: 3
                }, {
                    username: 'asdasdasd4',
                    calories: 5000,
                    comments: 12333,
                    id: 4
                }, {
                    username: 'asdasdasd5',
                    calories: 5000,
                    comments: 12223,
                    id: 6
                }];
        }
    }
</script>

<style scoped>
    .content-body{width:98%;margin:1% 1% auto 1%;max-height: 95%;}
</style>