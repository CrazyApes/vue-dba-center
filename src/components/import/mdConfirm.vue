<template>
    <div id='mdComfirm'>
        <md-dialog-confirm :md-title="confirm.title" :md-content-html="confirm.contentHtml" :md-ok-text="confirm.ok" :md-cancel-text="confirm.cancel"
            @open="onOpen" @close="onClose" ref="dialog5">
        </md-dialog-confirm>
    </div>
</template>

<script>
    export default {
        name: 'mdComfirm',
        data() {
            return {
                confirm: {
                    title: this.title,
                    contentHtml: this.content,
                    ok: '确认',
                    cancel: '取消'
                }
            }
        },
        props: [title,content],
        methods: {
            onOpen() {
                console.log('Opened');
            },
            onClose(type) {
                console.log('Closed', type);
                return type;
            }
        }
    }

</script>

<style scoped>

</style>