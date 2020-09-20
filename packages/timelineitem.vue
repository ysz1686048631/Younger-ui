<template>
      <div class="y-time-item">
                   <div class="bar" :style="{'border':`1px solid ${barColor}` }"><span v-if="!barIcon" :style="{'background':`${barColor}`}"></span>
                       <Y-icon v-if="barIcon" :icon='barIcon' :color='barColor'></Y-icon>
                   </div>
                    <div class="content">
                        <span><slot></slot></span>
                    </div>
                 <span class="y-time-item-time">{{ time }}</span>
           </div>
</template>

<script>
export default {
   name:'Y-timeline-item',
   props:{
        time:{
             type:String,
        },
        barIcon:{
            type:String,
            default:'',
            validator(type){
                  if(type&&!["wrong","success"].includes(type)){
                    console.error("type类型必须为"+["wrong","success"].join("、"))
                  }
                  return true;
            },
        },
        barColor:{
            type:String
        }
   }
}
</script>
<style lang="less" scoped>
         
        .y-time-item{
              display: flex;
              flex-direction: column;
              position: relative;
              padding: 10px 10px;
              border-left: 2px solid #777;
              margin: .8rem 0;
              &-time{
                   font-size: 13px;
                   color: #777;
                    margin-top: 5px;
              }
              .bar{
                    width: 15px;
                    height: 15px;
                    display:flex;
                    justify-content: center;
                    position: absolute;
                    top: -23px;
                    left: -12px;
                    
                    padding: 2px 2px;
                    border-radius: 50%;
                    cursor: pointer;
                    
                   span{
                        width: 100%;
                        height: 100%;
                        background: #ff6e6d;
                        display: inline-block;
                        border-radius: 50%;
                      
                   }
              }
              .content{
                //    box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
                   background: rgba(219, 219, 219, 0.26);
                   padding: 5px 5px;
                   border-radius: 5px;
                   &>span:nth-of-type(1){
                   font-size: 13px;
                  
                 }
              }


        }         
</style>