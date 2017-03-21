export const treeModule = {
  state: {
        node:{}
  },
  mutations: {
    setNode(state,node){//store.commit('setNode',{..payload})
        state.node=node;
    }
  },
  actions:{
    setNodeAsync(context,node){//store.dispatch('setNodeAsync',{..payload})
        context.commit({//otherstyle
            type:'setNode',
            node:node
        })
    }
  },
  getters:{
    node (state) {  //store.getters.node
      return state.node;
    }
  }
}