<template>
    <div class='mdTreeNode' @click="expand" :style="{ paddingLeft: lvleft+'px'}">
        <span class="icon-span"><md-icon v-show="!isleaf" v-html="isexpand">&#xE313;</md-icon></span>
        <md-checkbox v-model="checkbox" class="tree-node-checkbox"><label v-html="label"></label></md-checkbox>
        <div class="tree-node-children" v-show="expend">
            <slot name="childNode"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'mdTreeNode',
        data() {
            return {
                checkbox: false,
                expend: false,
                distance:15
            }
        },
        props: ['leaf','lv','label'],
        computed: {
            isleaf() {
                return this.leaf;
            },
            isexpand() {
                return this.expend ? '&#xE313;' : '&#xE315;';
            },
            lvleft(){
                return Number(this.lv||0)*this.distance;
            }
        },
        methods: {
            expand() {
                this.expend = !this.expend;
            }
        }
    }

</script>

<style scoped>
    .mdTreeNode {
        height: 34px;
        line-height: 34px;
    }
    .icon-span {
        float: left;
        width: 26px;
        height: 26px;
    }
    .tree-node-checkbox {
        top: -9px;
    }
    .tree-node-children{
        margin-top:-9px
    }
</style>