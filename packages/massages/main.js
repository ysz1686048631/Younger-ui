import Vue from 'vue';
import Main from './massages.vue';
const MessagesContructor = Vue.extend(Main);
let messageInstance = null;
const Messages = function(options){
      options.defaultCallbacks = function(hand){
          // 将这里的值回调给使用 者 
      if(!options.callback || typeof options.callback!=='function'){
                     console.error('callback必须为函数')
               } 
          options.callback(hand)
      }
      // options 的 拓展方法或者是 属性在创建实例之前创建 这样this 就能被调用
       messageInstance = new MessagesContructor({
            data:options
       }) 
    
     
     // 填充内容
  
      messageInstance.title = options.title;
      messageInstance.$slots.default = [options.message];
      options.message = 'REPLACED_BY_VNODE';  
      //挂载
      messageInstance.$mount();
      //添加到body中去
      document.body.appendChild(messageInstance.$el);
      messageInstance.dom = messageInstance.$el;
      return messageInstance;
}

export default Messages;