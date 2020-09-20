import Vue from 'vue';
import Main from './notification.vue';
//继承 通知组件实列
//最后需要在 vue 中挂载
const NotificationConstructor = Vue.extend(Main);

let instance;
let instances = [];
let seed = 1;
const Notification = function(options) {
    //创建通知组件实例
    options.onClose = function() {
        /**
         *  通知组件入口文件
         * 
         */
        Notification.close();
        closePosition();
        
    };  
    if(options.message.trim()==''||options.message.length<1){
         console.error('提示内容不能为空，请指定message内容');
    }
  
    //验证 options 内容是否有效
    
    instance = new NotificationConstructor({
        data: options
      });
      if(['success','error','info','warning'].includes(options.type)){
        instance.type = options.type;
        instance.title= options.title;
    }else{
        console.error(`$notify 中属性 type 值必须是 success,error,info,warning 中的一个，不指定有效type 默认为info`);
        return false;
    }
    //通知的内容  
    instance.$slots.default = [options.message];
    options.message = 'REPLACED_BY_VNODE';  
    //挂载
    instance.$mount();
    
    //添加到页面body 中去
    document.body.appendChild(instance.$el);
   
    // 显示为true
    seed+=1;
    instance.id=seed;
    instance.visible = true;  
    
     
    instance.dom = instance.$el;
    instance.dom.style.zIndex=999; 
    let verticalOffset = options.offset || 0;
    //设置位置 根据索引累加位置
    instances.forEach((item,index)=>{
        verticalOffset += item.$el.offsetHeight+16;
    })
    verticalOffset += 16;// 第一个 默认top 0 避免为0 verticalOffset+=16 
    instance.offetsTop = verticalOffset;
    instances.push(instance);
    return instance;
}
    //删除
Notification.close = ()=>{
   
    let len = instances.length;
   
    instances.splice(0,1);
    

}
    // 重新设置位置
var closePosition = ()=>{
    instances.forEach((item,index)=>{
              item.offetsTop -= item.$el.offsetHeight+16;
    })
 }
export default Notification;
