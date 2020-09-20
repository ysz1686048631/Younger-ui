import Vue from 'vue'
import App from './App.vue'
import YYUI from  '../packages'
Vue.config.productionTip = false
// 注册组件
Vue.use(YYUI)
new Vue({
  // 每个子组件，都会拥有一个属性$store
  render: h => h(App),
}).$mount('#app')


