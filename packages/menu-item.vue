<template>
       <li :class="['y-menu-item',{
              'is-active':active,
              'is-disabled':disabled
       }]" ref="y-menu-item" @click="onActive"><slot></slot></li>
</template>

<script>
export default {
    name:'Y-menu-item',
    inject:[ 'rootMenu' ],
    data(){
         return{
               // isActive:null
         }
    },
    props:{
          index:{
                type:String,
                default:null,
               
          },
          disabled:{
                type:Boolean
          }
    },
    mounted(){
         //将子组件存入父组件
          this.rootMenu.additem(this)
          if(this.index===this.rootMenu.defaultIndex){
                 this.isActive = true;
          }
    },
    computed:{
          //设置 高亮组件
       active(){
            //  console.log(Number(this.index),Number(this.rootMenu.defaultIndex))
             return Number(this.index) === Number(this.rootMenu.defaultIndex);
       },
    },
    methods:{
          //  点击改变索引 
         onActive(){
               
               if(this.rootMenu.items[Number(this.index)]==undefined) return;
               if(this.disabled) return;
               this.rootMenu.defaultIndex=this.index; 
               this.rootMenu.updataselect(this.index);//将索引传递给父级 在传递给使用者
         }
    }
}
</script>

<style lang="less" scoped>

.y-menu-item{
     list-style: none;
     font-size: 14px;
     color: #333;
     font-family: Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,SimSun,sans-serif;
     padding: 2.1em 1.5em;
     border-bottom: 2px solid transparent;
     &.is-active{
         border-bottom: 2px solid #007fff;   
     }
     &.is-disabled{
          opacity: 0.5;
          cursor:not-allowed;
     }
     cursor: pointer;
     &:hover{
          color: #777;
     }
}
</style>