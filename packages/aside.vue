<template>
     <aside class="y-aside" :style="{'width':`${width}px`}">
           <slot></slot>
     </aside>
</template>

<script>
export default {
    name:'Y-aside',
    props:{
         width:{
             type:String
         }
    }
}
</script>
