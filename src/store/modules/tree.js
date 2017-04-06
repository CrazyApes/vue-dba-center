/**
 * 模块级状态管理
 */
export default {
  state: {
        node:{}
  },
  mutations: {
    setNode(state,node){
        state.node=node;
    }
  },
  actions:{
    setNodeAsync(context,node){
        context.commit({
            type:'setNode',
            node:node
        })
    }
  },
  getters:{
    node (state) {
      return state.node;
    }
  }
}