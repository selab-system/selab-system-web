// VueX
import router from "@/router";
import Vue from "vue";
import Vuex from "vuex"

Vue.use(Vuex)

// 用Vuex.Store 对象来记录token
const store = new Vuex.Store({
    state() {
        return {
            // 存储token
            token: "",
            // isLoggedIn: false,
            roleId: "1",
            // 存入userId
            userId: "4",
            // groupId 小组Id
            groupId: "",
        }
    },
    getters: {
        getToken(state) {
            // 没token把它先缓存了
            return state.token || localStorage.getItem("token")
        }
    },
    mutations: {
        // 修改token，并将token存入localstorage和store
        setToken(state, token) {
            //  store里存储
            state.token = token
            // localstorage存储
            localStorage.setItem("token", token)
            console.log("store,localstorage保存token成功");
        },
        // 删除token 
        delToken(state) {
            // 分别去除store和localstorage里的token
            state.token = ""
            localStorage.removeItem("token")
        },
        setUser(state, roleId) {

            state.roleId = roleId
            console.log(roleId);
        },
        deleteUser(state, roleId) {
            state.roleId = ""
        },
        setUserId(state, userId) {
            state.userId = userId
            console.log(userId);
        },
        deleteUserId(state, userId) {
            state.userId = ""
        },
        setGroupId(state, groupId) {
            state.groupId = groupId
            console.log(groupId);
        },
        deleteGroupId(state, groupId) {
            state.groupId = ""
        }
    },
})

export default store