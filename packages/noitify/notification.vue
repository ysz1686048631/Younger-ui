<template>
      <div :class="['y-notification',`y-notification-${type}`,{
            'transition':transition
      }]"
          :style="{
               'top':offetsTop+'px',
          }"
          @mouseenter="clearTimer"
          @mouseleave="startTimer"
          v-show="visible"
         >
         <div class="y-notification-massage">
                <div class="y-notification-massage-title">
                      <span>
                             <Y-icon :icon='icon[type]' :color='color[type]'></Y-icon>
                      </span>
               </div>
               <div class="y-notification-massage-text">
                    <span>{{ title }}</span>
                    <span><slot></slot></span>
               </div>
         </div> 
         
      </div>
</template>

<script>
/**
 * 
 * Notification  仿照Element-UI原理
 * 从该组件的外部main.js文件来创建该组件的实例 并且 添加其他的属性 并在ui库的入口文件下挂载全局使用
 * 
 */
export default {
    name:'Y-notification',
    data(){
         return{
              visible: false,
              title: '',
              message: '',
              position:'top-right',
              offetsTop:0,
              timer:null,
              duration:4000,
              transition:false,
              offetsRight:null,
              closed:false,
              type:'info',
              title:'消息',
              color:{
                    "success":"green",
                    "warning":"darkorange",
                    "error":"red",
                    "info":"black", 
              },
              text:{
                    "success":"成功",
                    "warning":"警告",
                    "error":"错误",
                    "info":"消息", 
              },
              icon:{
                   "success":"success",
                    "warning":"warning",
                    "error":"wrong",
                    "info":"remind1",  
              }
         }
    },
    watch:{
        closed(newVal) {
            if (newVal) {
                this.visible = false;
               //  this.$el.addEventListener('transitionend', this.destroyElement); 
            }
      }   
    },
    created(){
 
        this.transition=true;
        
    },
    mounted(){
         this.startTimer();
    },
    methods:{
        // 过度监听函数 当过度时间到了之后就 closed
        destroyElement() {

        this.$el.removeEventListener('transitionend', this.destroyElement);
        this.closed=true;
    
         },
         clearTimer(){
               clearTimeout(this.timer);
         },
         //关闭
         close(){
              this.closed = true;
              this.onClose();  // 被定义在 main.js 文件中 该组件的 实例下
         },
         // this.closed 通过 closed 的状态来判断是否删除这个dom
         startTimer(){
               this.time = setTimeout(()=>{
                     if (!this.closed) {
                        this.close();
                        this.$el.parentNode.removeChild(this.$el);
                     }  
               },this.duration)
         }
    }
}
</script>
<style lang="less" scoped>
@colors:{
      success:#f0f9eb;
      warning:#fdf6ec;
      error:#fef0f0;
      info:#f4f4f5;
}
@fonts:{
      success:#67c23a;
      warning:#e6a23c;
      error:#f56c6c;
      info:#909399; 
}
.y-notification{
     position: absolute;
     max-width:280px;
     background: #fff;
     right: 20px;
     box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
     border-radius: 5px;
     padding:5px 5px;
     &.transition{
          transition:  all .5s ease-in 0s; 
         
     }
     each(@colors,{
           &-@{key}{
                  background: @value !important;
           }
     })
      each(@fonts,{
           &-@{key}{
                  color: @value !important;
           }
     })
     &-massage{
          display: flex;
          flex-direction:row;
          justify-content: center;
          align-content: center;
          align-items: center;
            &-title{
                 padding: 0 10px;
           } 
           &-text{
                 display: flex;
                 flex-direction: column;
                 
                 &>span:nth-of-type(1){
                 font-size: 14px;
                 font-weight:bold;
               }
          }
     }
}
</style>