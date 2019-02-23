import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


const moduleA = {
    state:{
        name:"m_name",
        count:9
    },
    mutations:{
        increment(state, {amount}){
            state.name = amount;
        }
    },
    getters:{
        doubleCount(state){
            let t = `${state.name} *** -`
            return t;
        }
    },
    actions:{
        gain({state, commit, rootState}){
            commit({type:"increment", amount:new Date()})
        },
        someAction:{
            root:true,
            handler(namespacedContext, payload){
                console.log(namespacedContext, payload)
            }
        }
    },
    namespaced:true
}

const state = {
    todos:[{ title: 'Todo A', project: 'Project A', done: false, }, { title: 'Todo B', project: 'Project B', done: true, }, { title: 'Todo C', project: 'Project C', done: false, }, { title: 'Todo D', project: 'Project D', done: false, }],
    newTodo:null
}
const mutations = {
    ADD_TODO(state){
        state.todos.push({
            title: 'Todo'+Math.random(), project: 'Project '+Math.random(), done: false,
        })
    },
    REMOVE_TOD(state, todo){
        let index = state.todos.indexOf(todo);
        state.todos.splice(index, 1)
    }
}
const actions = {
    addTodo({commit}){
        commit("ADD_TODO")
    },
    removeTodo({commit}, todo){
        commit("REMOVE_TOD", todo)
    },
    gain(){
        console.log(90)
    }
}
const store =  new Vuex.Store({
    state,
    mutations,
    actions,
    modules:{
        a:moduleA
    }
})

export default store;

function createPlugin(options = {}) {
    return function (store) {
        const namespace = options.namespace || ''
        store.dispatch(namespace + 'pluginAction')
    }
}
const myplug = store=>{
    store.subscribe((mutations, state)=>{
        //每次mutations 调用后都会调用

    });
}