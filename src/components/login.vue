<template>
    <div id='login'>
        <md-layout md-gutter>

            <md-layout md-flex="30" md-flex-offset="35" style="height: 400px;margin-top: 200px;">

                <md-layout md-align="center" md-flex="60" md-flex-offset="20" center>
                        <span class="md-display-2">Headline</span></md-layout>
                <md-layout md-flex="60" md-flex-offset="20">
                    <md-input-container>
                        <md-icon>account_circle</md-icon>
                        <label>Username</label>
                        <md-input type="text" v-model="username"></md-input>
                    </md-input-container>
                    <md-input-container md-has-password>
                        <md-icon>lock_outline</md-icon>
                        <label>Password</label>
                        <md-input type="password" v-model="password"></md-input>
                    </md-input-container>
                    <md-checkbox v-model="isRemeber" name="isRemeber">Remeber password</md-checkbox>
                    <md-layout md-flex="80" md-flex-offset="20">
                        <md-button style="width:200px;" @click.native="login()" class="md-raised md-accent">Login</md-button>
                    </md-layout>
                </md-layout>
               

            </md-layout>

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
                    password: this.password,
                    isRemeber: this.isRemeber
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
</style>