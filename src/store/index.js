import Vue from "vue";
import Vuex from "vuex";
import persistedstate from "vuex-persistedstate"


const files = require.context("./modules", false, /\.js$/)
const modules = {}

files.keys().forEach(key => {
  modules[key.replace(/(\.\/|\.js)/g, "")] = files(key).default
})
Vue.use(Vuex);

export default new Vuex.Store({
  modules,
  plugins: [persistedstate()]
});