<template>
       <div class="y-card">
            <div class="y-card-img">
                     <img :src="url" alt="">
            </div>
            <div class="y-card-text">
                  <slot></slot>
            </div>  
       </div>
</template>

<script>
export default {
   name:'Y-card',
   props:{
        url:{
             type:String
        }
   }
}
</script>
<style lang="less" scoped>
  .y-card{
      background: #fff;
      box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
      border-radius: 5px;
      width:230px;
      margin: 5px 5px;
       &-img{
           overflow: hidden;    
       }
       &-text{
           padding: 10px 10px; 
       }
  } 
</style>
