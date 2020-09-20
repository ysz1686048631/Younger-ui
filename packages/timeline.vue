<template>
      <div class="y-time">

           <slot></slot>
           <div class="y-time-end" v-if="endText">
                 {{ endText }}
           </div>
      </div>
</template>

<script>
export default {
   name:'Y-timeline',
   props:{
        endText:{
             type:String
        }
   }
}
</script>
<style lang="less" scoped>
  .y-time{
        display: flex;
        flex-direction: column;
     
        &-end{
             font-size: 12px;
             color: #777;
             text-align: center;
        }
  }
</style>