<template>
      <div class="y-badge">
                  <Y-button :type='type' @click="onHandleClick"><slot></slot></Y-button>
                  <span v-if="dot!='0' || dot!='new' || dot!='hot'">
                        {{ Number(dot) > Number(max)?`${max}+`:dot }}
                  </span>
                  <span v-if="dot=='new' || dot=='hot'">
                        {{ dot }}
                  </span>  
     </div>
</template>

<script>
export default {
    name:'Y-badge',
    props:{
          max:{
                 default:'',
                 type:String
          },
          dot:{
                 type:String,
                 default:'',
                 validator(type){
                   console.log(typeof(type));
                  return true;
            },
         
          },
            type:{
                  type:String,
                  default:''
           }
    },
    methods:{
         onHandleClick(hand){
               this.$emit('click',hand)
         }
    },
}
</script>
<style lang="less" scoped>
.box{
     padding: 10px 10px;
     box-sizing: border-box; 
}
.y-badge{
     position: relative;
     display: inline-block;
     margin: 0 10px;
     &>span{
          padding: 1px 4px;
          font-size: 8px;  
          color: blue;
          position: absolute;
          right: -12px;
          top: -7px;
          background: red;
         
         
          text-align: center;
          border-radius: 10px;
          border: 2px solid #fff;
          color: #fff;
     }

}
</style>
