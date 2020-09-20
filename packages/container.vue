<template>
       <section :class="['y-container',{
            'is-column':isSoilder
        }]">
                <slot></slot>
       </section>
</template>

<script>
export default {
     name:'Y-container',
     data(){
         return{
              isSoilder:false
         }
     },
     props:{
          pop:{
               type:String
          }
     },
     mounted(){
        /**
         * 当 <Y-container/> 外部的父级是 <Y-container/> 那子集的<Y-container/> 的排列方式就会变成行，如果<Y-container/>子集包含Y-
         * 内部组件：
         * <Y-header>
         * <Y-aside>
         * <Y-content>
         * <Y-footer>
         */
        this.isColumn();
         
     },
     methods:{
          isColumn(){
               let isCol=[];
               this.$children.forEach((child)=>{
                    isCol.push(child.$options.name)
                    
               })
               if(isCol.includes('Y-header')||isCol.includes('Y-footer')){
                       
                      this.isSoilder = false;
               }else{
                      this.isSoilder = this.$parent.$options.name=='Y-container'?true:false;
               }
              
                
          }
     }
}
</script>

<style lang="less" scoped>
.y-container{
     &.is-column{
          flex-direction: row;
     }
}
</style>