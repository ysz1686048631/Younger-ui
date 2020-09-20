<template>   
         <a :class="['y-link',`y-link-${type}`,{
             'is-disabled':disabled,
             'is-underline':underline
         }]" :href="href" @click="handlefun" v-if="$slots.default">
           <slot></slot>
         </a>   
</template>

<script>
export default {
   name:'Y-link',
   props:{
        href:{
             type:String
        },
        type:{
             type:String,
             default:"info",
        },
        disabled:{
            type:Boolean
        },
        underline:{
            type:Boolean
        }
   },
   methods:{
        handlefun(evet){
           
            if(!this.disabled){
                 if(!this.href){
                       this.$emit('click',evet) 
                 }
            }
            
        }
   }
}
</script>
<style lang="less" scoped>
@primary: #409EFF;
@success: #67C23A;
@warning: #E6A23C;
@danger: #F56C6C;
@info: #909399;
@colors:{
      primary:@primary;
      success:@success;
      info:@info;
      warning:@warning;
      danger:@danger
}
.is-disabled{
     cursor: not-allowed !important;
     opacity: 0.5 !important;
}
.is-underline{
     &:hover{
          text-decoration: underline !important;
     }
}
.y-link{
    font-size: 13px;
    font-weight: 500;
    cursor: pointer;
    text-decoration: none;
    padding: 1px 1px;
    each(@colors,{
            &-@{key}{
                 color: @value;
            }
    }) 
    
}
</style>