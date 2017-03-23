<template>
    <div id='login'>
        <md-layout md-gutter md-align="center">
                <form novalidate @submit.stop.prevent="submit" class="login-form">
                    <span class="md-display-2 login-title">系统入口</span>
                    <md-input-container>
                        <md-icon>account_circle</md-icon>
                        <label>用户名</label>
                        <md-input type="text" v-model="username"></md-input>
                    </md-input-container>
                    <md-input-container md-has-password>
                        <md-icon>lock_outline</md-icon>
                        <label>密码</label>
                        <md-input type="password" v-model="password"></md-input>
                    </md-input-container>
                    <md-layout md-flex="80" md-flex-offset="20">
                        <md-button style="width:200px;height:50px;" @click.native="login()" class="md-raised md-accent">Login</md-button>
                    </md-layout>
                </form>
        </md-layout>
    </div>
</template>

<script>
    export default {
        name: 'login',
        data() {
            return {
                isRemeber: false,
                username: '',
                password: ''
            }
        },
        methods: {
            login() {
                var param = {
                    username: this.username,
                    password: this.password
                }
                console.log(param);
                this.$router.push({ path: '/content/main' });
            }
        }
    }

</script>

<style scoped>
    #login {
        position: absolute;
        width: 100%;
        top: 0px;
        bottom: 0px;
    }
    .login-form{
        margin-top: 200px;
        width: 400px;
        box-sizing: content-box;
        padding: 50px 50px 40px  ;
        background:rgba(219, 216, 219, 0.8);
    }
</style>