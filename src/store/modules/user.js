import { getToken, setToken, removeToken } from '@/utils/auth'

const getDefaultState = () => {
  return {
    token: getToken(),
    name: '',
    avatar: ''
  }
}

const state = getDefaultState()

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_INTRODUCTION: (state, introduction) => {
    state.introduction = introduction
  },
  SET_NAME: (state, name) => {
    state.name = name
  },
  SET_AVATAR: (state, avatar) => {
    state.avatar = avatar
  },
  SET_ROLES: (state, roles) => {
    state.roles = roles
  }
}

const actions = {
  // user login
  login({ commit }) {
    // const { username, password } = userInfo
    return new Promise((resolve) => {
      // login({ username: username.trim(), password: password }).then(response => {
      // const { data } = response
      commit('SET_TOKEN', 'adminToken123123123')
      setToken('adminToken123123123')
      resolve()
      // }).catch(error => {
      //   reject(error)
      // })
    })
  },

  getInfo({ commit }) {
    return new Promise(resolve => {
      commit('SET_NAME', 'admin')
      resolve()
    })
  },

  // remove token
  resetToken({ commit }) {
    return new Promise(resolve => {
      commit('SET_TOKEN', '')
      commit('SET_ROLES', [])
      removeToken()
      resolve()
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
