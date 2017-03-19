<template>
    <div class='mdTreeNode'  :style="{ paddingLeft: lvleft+'px'}">
        <span class="icon-span">
            <md-icon v-show="!isleaf" @click.native="expandNode" v-html="isexpand">&#xE313;</md-icon>
        </span>
        <md-checkbox v-model="checkbox" class="tree-node-checkbox">
            <label v-html="node.label"></label>
        </md-checkbox>
        <div class="tree-node-children" v-show="expandflag">
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
                distance: 15,
                expandflag:Boolean(this.expand)
            }
        },
        props: ['node','expand'],
        computed: {
            isleaf() {
                return this.node.leaf;
            },
            isexpand() {
                return this.expandflag ? '&#xE313;' : '&#xE315;';
            },
            lvleft() {
                return Number(this.node.lv || 0) * this.distance;
            }
        },
        methods: {
            expandNode() {
                if(!this.isleaf){
                    this.expandflag=!this.expandflag
                }   
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
        margin-left: 8px;
    }
    
    .tree-node-children {
        margin-top: -22px
    }
</style>