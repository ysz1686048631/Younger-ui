import '../styles/style.css'
import Notification from './noitify/main.js'
import Messages from './massages/main.js';
const install  = (Vue)=>{
     Vue.prototype.$notify = Notification; //挂载 通知组件
     Vue.prototype.$Messages = Messages;
     //全局组件
    // 直接注册位全局组件就可以在其他组件内部调用
    
     //以上引入全局组件的方法比较复杂耗费性能
     //element-ui采用的将所有的组件一一引入并加入到组件中去
     //使用require的context遍历引入
     const requireComponent = require.context(".",true,/\.vue/);
     requireComponent.keys().forEach(element => {
          let config = requireComponent(element)
          Vue.component(config.default.name,config.default);
     });
}
export default  {install}