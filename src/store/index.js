import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import { initData, search, getDetailData, getAll } from './util'

const transformStruct = (data)=>{
    if(data &&　data.chapters && data.chapters.length > 0 ){
        const { chapters, ...other } = data;
        console.log(data)
        let contents = {}
        let tree = [];
        chapters.map(item=>{
            const { id, title, content, serial_no } = item;
            tree.push({id, title:`${serial_no} ${title}` });
            contents[id] = content
        });
        let result = {
            contents,
            tree,
        }
        return result;
    }
    return null;
}

const moduleMain = {
    state:{
        selectType:"1",
        inputValue:"",
        secondType:"",
        list:[],
        page_index:1,
        page_size:10,
        total_count:0
    },
    mutations:{
        UPDATE_SELECT(state, {opt}){
            state.selectType = opt;
        },
        UPDATE_INPUT(state, {inputValue}){
            state.inputValue = inputValue;
        },
        UPDATE_SECOND_TYPE(state, {secondType}){
            state.secondType = secondType;
        },
        UPDATE_LIST(state, opt){
            state.list =opt.list
            state.page_index =opt.page_index
            state.page_size =opt.page_size
            state.total_count =opt.total_count
        },
        UPDATE_PAGE(state, opt){
            if(opt && opt.page_index){
                state.page_index =opt.page_index
            }
        },

    },
    actions:{
        updateInputValue({ commit }, inputValue){
            commit({type:"UPDATE_INPUT", inputValue})
        },
        updateSelect({commit}, opt){
            commit({type:"UPDATE_SELECT", opt})
        },
        updateSelectSecondType({ commit }, secondType){
            commit({type:"UPDATE_SECOND_TYPE", secondType})
        },
        search({commit, state, rootState}){
            const { inputValue, selectType } = state;
            const { activeItem } = rootState;
            if(activeItem && activeItem.id){
                let params = {
                    query:inputValue,
                    category_id:activeItem.id,
                    mandatory:true
                };
                if(selectType == 1) delete params.mandatory
                search(params).then(({data})=>{
                    data = data.data;
                    console.log(data);
                    if(typeof data=='object'){
                        commit({type:"UPDATE_LIST", ...data})
                    }
                })
            }
        },
        updatePageIndex({commit}, args={}){
            commit("UPDATE_PAGE", args)
        }
    },
    namespaced:true
}

const moduleDetail  = {
    state:{
        currentKey:undefined,//
        contents:null, //所有内容，对象
        tree:[], //左边列表，数组
        current:null //当前文章
    },
    mutations:{
        SET_DETAIL(state, opt){
            state.contents  = opt.contents,
            state.tree  = opt.tree,
            state.current  = opt.current;
        },
        SET_KEYS(state, opt = {}){
            const { id } = opt;
            if(id){
                state.tree = state.tree.map( item => {
                    if(item.id == state.currentKey){
                        item.active = false
                    }
                    if(item.id == id){
                        item.active = true
                    }
                    return item;
                });
                state.currentKey = id;
            }
        },
        CLEAN_KEYS(state){
            state.currentKey = undefined,
            state.tree = []
        }
    },
    actions:{
        getDetail({commit}, args={}){
            const { current } =  args
            if(current){
                const { id } = current ;
                getDetailData(id).then(({data})=>{
                    data = data.data;
                    const result = transformStruct({...data});
                    if(result){
                        commit("SET_DETAIL", { ...result, current })
                    }else {
                        commit("SET_DETAIL", { ...result, current, tree:[] })
                    }
                });
            }
        },
        show({commit}, args={}){
            const { id } = args;
            commit("SET_KEYS", { id})
        },
        clean({commit}, args={}){
            commit("CLEAN_KEYS", { currentKey:null})
        }
    },
    namespaced:true
}

const store =  new Vuex.Store({
    state(){
        return {
            activeItem:"all",
            isDetail:false,
            current:undefined,
            data:[],
            total:0,
            initPanel:[]
        }
    },
    mutations:{
        CHANGE_STATUS(state, todo){
            state.activeItem = todo
            state.isDetail = false;
        },
        SET_MENU(state, todo){
            state.total = todo.total;
            state.data = todo.data;
        },
        TOGGLE_DETAIL(state, {toggle}){
            state.isDetail = toggle
        },
        SET_PANEL(state, { params }){
           state.initPanel = params
        }
    },
    actions:{
        initData({commit}){
            initData().then(({data})=>{
                data = data.data;
                let total = 0;
                data.map(item=>{
                    total += item.count
                })
                commit("SET_MENU", {total, data})
                getAll(data, (params)=>{
                    commit("SET_PANEL", {params})
                   // console.log(params)
                });
            },(r)=>{
                console.log(r)
            });
        },
        changeStatue({commit, dispatch}, args){
            commit("CHANGE_STATUS", args)
            dispatch('moduleMain/updatePageIndex',{page_index:1})
            dispatch("moduleMain/search")
        },
        toggleDetail({commit, dispatch}, args){
            commit("TOGGLE_DETAIL",args)
            const {current} = args
            dispatch("moduleDetail/getDetail",{current:{...current}})
            dispatch("moduleMain/search")
        }
    },
    modules:{
        moduleMain,moduleDetail
    }
})

export default store;
