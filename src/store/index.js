import Vue from 'vue'
import Vuex from 'vuex'
import Cookie from 'vue-cookies'
import { SSL_OP_COOKIE_EXCHANGE } from 'constants';

Vue.use(Vuex);

let store = new Vuex.Store({
	// 三大将
	state:{
		userInfo:{},
		username:Cookie.get('username'),
		token:Cookie.get('token'),
	},
	// 修改state的唯一方法 是提交mutations
	//添加mutations
	mutations:{
		saveToken:function(state, userToken){
			console.log(userToken)
			console.log('...userToken....')
			state.username = userToken.username;
			state.token = userToken.token
			Cookie.set('username', userToken.username, "20min")
			Cookie.set('token', userToken.token, "20min")
			console.log(state)
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