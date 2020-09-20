<template>
     <svg class="icon" aria-hidden="true" :style="{'height':`${size}px`,'width':`${size}`}" :fill='color'>
         <use :xlink:href="`#icon-${icon}`"></use>
     </svg>
</template>

<script>
import '../styles/icon'
export default {
   name:'Y-icon',
   props:{
        icon:{
            type:String,
            default:'sousuo'
        },
        color:{
            type:String,
        },
        size:{
             type:String
        }

   },
      methods:{
        handleclick(event){
             this.$emit('click',event)
        }
   }
}
</script>

<style>
.icon{
       width: 16px;
       height:16px;
       vertical-align: middle;
       color: aliceblue;
       padding: 1px 1px;
    }
</style>