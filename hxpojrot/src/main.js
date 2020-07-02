import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
	//全局引入
import Axios from "axios"
Vue.prototype.$axios = Axios
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueI18n from 'vue-i18n'

Vue.use(ElementUI);

Vue.config.productionTip = false
Vue.use(VueI18n)


new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
