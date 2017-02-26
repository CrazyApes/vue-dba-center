<template>
        <transition enter-active-class="animated slideIn" leave-active-class="animated slideOut">
            <div id='userTable'>
                
            </div>
        </transition>
</template>

<script>
export default {
    name: 'userTable'
}
</script>

<style scoped>
#userTable{
    background:skyblue;
}
</style>