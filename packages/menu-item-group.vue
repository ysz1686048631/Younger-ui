<template>
        <ul class="y-menu-lists">
                 <slot></slot>
         </ul>
</template>

<script>
export default {
name:'Y-menu-group',
inject:['rootMenu']
}
</script>
<style lang="less" scoped>
.padding(@tb,@lr)
{
    padding:@tb @lr;
}
.margin(@tb,@lr)
{
    margin:@tb @lr;
}
.y-menu-lists{
          display: flex;
          flex-direction: row;
          align-content: center;
          align-items: center;
          .padding(1px,2px);
          border-bottom: 1px solid #ccc; 
     }
</style>