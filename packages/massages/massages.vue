<template>
      <div class="y-message" v-if="visited">
           <Y-dialog>
                  <div :class="['y-message-content',{
                         'is-show':visited
                  }]">
                        <div class="y-message-content-title">{{title}}</div>
                        <div class="y-message-content-text"><slot></slot></div>
                        <div class="y-message-content-bar">
                               <span><Y-button @click="onHandleClick(false)" plain>取消</Y-button></span>
                               <span><Y-button @click="onHandleClick(true)" type='primary'>确定</Y-button></span>
                              
                        </div>
                  </div>
          </Y-dialog> 
     </div>
</template>

<script>
export default {
    name:'Y-masssages',
    data(){
         return{
               title:'',
               visited:false
         }
    },
    methods:{
         onHandleClick(hand){
               this.defaultCallbacks(hand);
               this.visited=false;
         }
    },
    mounted(){
          this.$nextTick(()=>{
               this.visited=true;
          })
    }
}
</script>
<style lang="less" scoped>
.box{
           padding: 10px 10px;
           box-sizing: border-box; 
}
.y-message{ 
     
     &-content{
          display: flex;
          flex-direction: column;
          vertical-align: middle;
          background: #fff ;
          width: 400px;
          display: inline-block;
          box-shadow: 0 2px 12px 0 rgba(20, 20, 20, 0.315);
          border-radius: 3px;
 
          &-title{
              width: 100%;
              font-size: 16px;  
              text-align: left;
              font-weight: bold;
              border-bottom:  1px solid #dcdfe6;
              padding: 8px 10px;
              box-sizing: border-box;
          }
          &-text{
               width: 100%;
                // font-style: italic;
                color: #777;
                font-size: 13px;
                text-align: left;
                .box;
          }
          &-bar{
               display: flex;
               justify-content: flex-end;
               .box;
               &>span{
                    margin: 0 5px;
               }
          }
     }
}
</style>
