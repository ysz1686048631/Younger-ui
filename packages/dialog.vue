<template>
      <div class="y-dialog">
             <slot></slot>
      </div>
</template>

<script>
export default {
   name:'Y-dialog'
}
</script>
<style lang="less" scoped>
.y-dialog{
     position: fixed;
     top: 0;
     left: 0;
     background: rgba(163, 163, 163, 0.596);
     width: 100vw;
     height: 100vh;
     display: flex;
     align-items: center;
     justify-content: center;
    
}
</style>
