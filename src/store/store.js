/**
 *应用级状态管来
 */
import Vue from 'vue'
import Vuex from 'vuex'
import tree from './modules/tree'

Vue.use(Vuex)

/*
应用初始状态
需要整个应用的中使用的数据可记录在这里
*/
const state = {
  emp:{}
}

/*
定义所需的 mutations,更改 Vuex 的 store 中的状态的唯一方法是提交 mutation
store.commit('mutation名字',payload对应参数对象)
mutations中不要使用异步操作，尽量精简
*/
const mutations = {
  emp(state,emp){
    state.emp=emp;
  }
}
/*
 Action 提交的是 mutation，而不是直接变更状态。
 Action 可以包含任意异步操作  store.dispatch('resetPassport')
*/
const actions = {
}

/*
 可使用this.$store.getters.getActivePassport
 也可$store在任何组件中获取state中的数据 this.$store.state.passport  获取passport
*/

const getters = {
}

/*
 创建 store 实例,以下每个属性都可以单独提成一个文件
*/
export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters,
    modules:{
        tree  //store.state.a // -> moduleA 的状态
    }
})
