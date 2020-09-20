<template>
       <div class="y-menu">
             <ul class="y-menu-lists">
                   <slot></slot>
             </ul>
             <ul class="actions">
                 
                    <slot name="actions"></slot>
             </ul> 
       </div>
    
</template>

<script>
export default {
   name:'Y-menu',
   data(){
        return{
              defaultIndex:1,
              items:{}
        }
   },
   props:{
        activeIndex:{
             type:String
             
        }
   },
   provide(){
         return {
                rootMenu:this
         }
   },
   
   mounted(){
         this.updataindex();
         this.regindex();
         this.updataselect(Number(this.activeIndex));
   },
   methods:{
          //更改索引
          updataindex(){
              this.defaultIndex=Number(this.activeIndex);
           
          },
          //添加子组件
          additem(item){
               this.$set(this.items, item.index, item);
           
          },
          regindex(){
                if(this.items[this.activeIndex]==undefined){
                      console.error('activeIndex 的值无效')
                      return false;
                }  
          },
          updataselect(val){
                 this.$emit('selectIndex',val)
          }
   }

   
}
</script>
<style lang="less" scoped>
.padding(@tb,@lr)
{
    padding:@tb @lr;
}
.margin(@tb,@lr)
{
    margin:@tb @lr;
}
@mheight:80px;
.y-menu{
     
     display: flex;
     flex-direction: row;
     justify-content: space-between;
      border-bottom: 1px solid #ccc; 
      height:@mheight;
     &-lists{
          display: flex;
          flex-direction: row;
          align-content: center;
          align-items: center;
          .padding(1px,2px);
          .margin(0, 0)
     }
     .actions{
           display: flex;
           flex-direction: row;
           align-content: center;
           align-items: center;
          .padding(0,15px)
      
     }
}
</style>