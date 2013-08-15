import Vue from 'vue'
import Vuex from 'vuex'
import { SSL_OP_COOKIE_EXCHANGE } from 'constants';

Vue.use(Vuex);

let store = new Vuex.Store({
	// 三大将
	state:{
		userInfo:{},
		username:null,
		token:null,
	},
	// 修改state的唯一方法 是提交mutations
	mutations:{
		saveToken:function(state, userToken){
			state.username = userToken.username;
			state.token = userToken.token
			Cookie.set('username', userToken.usernme, "20min")
			Cookie.set('token', userToken.token, "20min")
		},
		clearToken : function(state){
			state.username = null
			state.token = null
			Cookie.remove('username')
			Cookie.remove('token')
		},
		getUserInfo(state,user){
			state.userInfo = user;
			console.log(state.userInfo);
		},
		accountLogout(state){
			state.userInfo = {}
		}
	},
	actions:{
		getUserInfo({commit},user){
			commit('getUserInfo',user);
		},
		accountLogout({commit}){
			commit('accountLogout')
		}
	}
});
export default store;