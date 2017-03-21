<template>
    <div>
        <div class='mdTreeNode'  :style="{ paddingLeft: lvleft+'px',}" :class="{selected:selected}" @click="selecteNode" >
            <span class="icon-span no-select">
                <md-icon v-show="!isleaf"  v-html="isexpand" @click.native="expandNode">&#xE313;</md-icon>
            </span>

            <label class="tree-node-label" v-html="node.label"></label>
        </div>
            <div class="tree-node-children" v-show="expandflag" v-if="!isleaf">
                    <mdTreeNode v-for="(c,index) in node.children"  :node="c"  ></mdTreeNode>
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
                expandflag:Boolean(this.expand)||true
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
            },
            selected(){
                return (this.node.id&&this.node.id==this.$store.state.tree.node.id)?true:false
            }
        },
        methods: {
            selecteNode(){
                this.selected=true;
                this.$store.tree.commit('setNode',this.node);
            },
            expandNode() {
                if(!this.isleaf){
                    this.expandflag=!this.expandflag;
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
    .mdTreeNode:hover {
        background: #80CBC4;
    }
    .icon-span {
        float: left;
        width: 26px;
        height: 26px;
        cursor: default;
    }
    .tree-node-label{
        float: left;
    }
    .tree-node-checkbox {
        top: -9px;
        margin-left: 8px;
    }
    .selected{
        background:#00897B
    }

</style>