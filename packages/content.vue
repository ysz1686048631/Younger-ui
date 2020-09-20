<template>
     <main class="y-container-content">
          <slot></slot>
     </main>
</template>

<script>
export default {
    name:'Y-content',
    props:{
         width:{
             type:String
         }
    }
}
</script>
<style lang="less" scoped>

</style>