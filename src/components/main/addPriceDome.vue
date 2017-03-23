<template>
    <div id='addPriceDome'>
        <md-layout md-gutter class="content-body">
            <md-layout md-flex="20" md-middle-flex="100">
                <md-tree></md-tree>
            </md-layout>
            <md-layout md-flex="30" md-align="center">
                <form class="domeform" novalidate @submit.stop.prevent="submit">
                    <span class="md-display-1">表单</span>
                    <md-input-container>
                        <label>模板名称</label>
                        <md-input type="text"></md-input>
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
                    <md-input-container>
                        <md-icon>phone</md-icon>
                        <label>联系电话</label>
                        <md-input type="tel"></md-input>
                    </md-input-container>
                    <md-switch  md-theme="orange" name="my-test8">Default</md-switch>
                    <div>
                        <md-radio v-model="radio3" id="my-test7" name="my-test-group3" md-value="1" class="md-warn">帅哥</md-radio>
                        <md-radio v-model="radio3" id="my-test8" name="my-test-group3" md-value="2" class="md-warn">美女</md-radio>
                    </div>

                    <md-input-container>
                        <label>模板备注</label>
                        <md-textarea></md-textarea>
                    </md-input-container>
                    <md-button class="md-raised md-accent">SAVe</md-button>
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

        },
        data() {
            return {
                radio3: "2",
                movie:""
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