<template>
     <button v-if="this.$slots.default||icon" :class="['y-button',`y-icon-${iconPos}`,
         type?'y-button-' + type : '',
         {
              'is-plain':plain,
              'is-round':round,
              'is-circle':this.$slots.default&&!round?false:circle  
         }
         
       ]"
       @click="handleClick">
           <Y-icon :icon='icon' class="icon" :color="plain?'#606266':'#fff'" v-if="icon && !loading"></Y-icon>
           <span v-if="this.$slots.default">           
                <slot></slot>
           </span>
     </button>
</template>

<script>
export default {
    name:'Y-button',
     props:{
        type:{
            type:String,
            default:"info",
            validator(type){
                  if(type&&!["warning","success","danger","info","primary"].includes(type)){
                    console.error("type类型必须为"+["warning","success","danger","info","primary"].join("、"))
                  }
                  return true;
            },
           
        },
      plain:{
            type:Boolean||String,
            default:false,
      },
      round:{
            type:Boolean||String,
            default:false,
      },
      icon:{
            type:String
      },
      iconPos:{
             type:String,
             default:'left',
             
      },
      circle:{
             type:Boolean||String,
             default:false,
      },
      loading:{
             type:String,
      }
       
     },
     methods: {
      handleClick(evt) {
        this.$emit('click', evt);
      }
    }


}
</script>
<style lang="less" scoped>
@default:#ccc;
@primary: #409EFF;
@success: #67C23A;
@warning: #E6A23C;
@danger: #F56C6C;
@info: #909399;
// hover 样式
@primary-hover: #66b1ff;
@success-hover: #85ce61;
@warning-hover: #ebb563;
@danger-hover: #f78989;
@info-hover: #a6a9ad;  

// active 样式
@primary-active: #3a8ee6;
@success-active: #5daf34;
@warning-active: #cf9236;
@danger-active: #dd6161;
@info-active: #82848a;
@opprimary:#ecf5ff;
@opsuccess:#f0f9eb;
@opinfo:#f4f4f5;
@opwarning:#fdf6ec;
@opdanger:#fef0f0;
@active:{
      primary:@primary-active;
      success:@success-active;
      info:@info-active;
      warning:@warning-active;
      danger:@danger-active   
}
@ops:{
      primary:@opprimary;
      success:@opsuccess;
      info:@opinfo;
      warning:@opwarning;
      danger:@opdanger    
}
@color:{
      primary:@primary;
      success:@success;
      info:@info;
      warning:@warning;
      danger:@danger
}   
@hovers:{
      primary:@primary-hover;
      success:@success-hover;
      info:@info-hover;
      warning:@warning-hover;
      danger:@danger-hover
} 
@border-r:20px;
.border(@color){
      border:2px solid @color;
}
.is-round{
       border-radius: @border-r !important;
}

.is-circle{
        padding:11px 12px !important;
        border-radius: 50% !important;
  }
   .y-button{
          background: @default;
          display: inline-flex; 
          justify-content: center;
          vertical-align: middle;
      //     width:50px;
          padding: 6px 18px;
        
          outline-style: none;
          border:none; 
          border-radius: 5px;
          color: #fff;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          font-size: 12px;
          cursor: pointer;
          transition: all .2s ease 0s;
            each(@color,{
                  &-@{key}{
                         background: @value;    
                         color: #fff;
                  
                         
                  }           
            })
          
      
            each(@hovers,{
                  &-@{key}{                
                       border: 1px solid @value;
                       color: #fff;
                          &:focus,&:active {
                              border-color:@value;
                              background-color: @value;
                              outline: none;
                        }
                  }           
            })
            each(@hovers,{
                  &-@{key}:hover{                
                       background: @value;
                       color: #fff; 
                  }           
            })
              each(@ops,{
                  
                  &-@{key}.is-plain{
                        
                         background: @value !important;  
                         
                  }           
            })
            each(@active,{
                  &-@{key}.is-plain{            
                      color: @value; 
                  }           
            })
            each(@active,{
                  &-@{key}.is-plain:hover{                
                       border: 1px solid @value;
                       color: #fff;
                       background: @value !important;   
                  }  
                  &-@{key}.is-plain:focus{
                        border: 1px solid @value;
                        background: @value !important;
                        color: #fff;
                  }         
            })
          
      
                        
   }
.y-icon-left{
        svg{
          order:1
      }
      span{
          order:2
      }
}
.icon+span{
      margin-right:4px
  }
.y-icon-right{
      svg{
          order:2
      }
      span{
          order:1
      }
  }   
</style>