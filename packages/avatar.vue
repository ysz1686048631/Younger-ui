<template>
        <div :class="[
            'y-avatar',
            {
                'is-border':corner!='square'&&border
            }
           ]"
          :style="[
            size=='large'?large:'',
            size=='medium'?medium:'',
            size=='small'?small:''
          ]"
           @click="handleClick"
        >
             <div :class="['y-avatar-img',
                  {
                       'is-square':corner=='square',
                       'is-circle':corner=='circle'
                  }
                ]">
              
                <img :src="url" alt="">
             </div> 
        </div>
</template>

<script>
export default {
    name:'Y-avatar',
    data(){
        return{
             large:{width:'50px',height:'50px'},
             medium:{width:'40px',height:'40px'},
             small:{width:'36px',height:'36px'}
        }
    },
    props:{
         url:{
              type:String,
              required: true
         },
         size:{
              type:String,
              required: true
              
         },
         corner:{
              type:String
              
         },
         border:{
              type:Boolean||String,
              default:false,
              
         }
    },
    methods:{
         handleClick(event){
              this.$emit('click',event)
         }
    }
}
</script>
<style lang="less" scoped>

.y-avatar{
     display: inline-block;
      cursor: pointer;
     &.is-border{
          padding: 3px 3px;
          box-sizing: border-box;
          border:1px solid #777;
          border-radius: 50%;
         
         
     }
     &-img{
          width: 100%;
          height: 100%;
            overflow: hidden;
          &.is-circle{
             border-radius: 50%;
              transform: scale(1);
              transition:transform .2s ease-in 0s;
              &:hover{
                  transform: scale(.9);  
              }
          }
          &.is-square{
              border-radius: 5px;
            
          }
          img{
              max-width:100%;
              max-height:100%;
              width:auto;
              height:auto; 
          }
     }
}
</style>