<template>
      <div class="y-title" @click="handClick">
                  <a :href="url"><slot></slot></a>
      </div>
</template>

<script>
export default {
  name:'Y-title',
  props:{
       url:{
             type:String,

       }
  },
  data(){
       return{
            types:''
       }
  },
  methods:{
        handClick(event){
              this.$emit('click',event)
        }
  }
}
</script>
<style lang="less" scoped>
.y-title{
     font-size: 2rem;
    
     font-weight: 600;
     letter-spacing:10px;
     background: linear-gradient(45deg, #00a0e9, #10d39d, #00a0e9, #10d39d);
     background-clip: text;
     animation: ran 3s linear infinite;
     font-family: century gothic,texgyreadventor,stheiti,sans-serif;
     a{
            color: transparent;
            text-decoration: none;
     }
     
} 
@keyframes ran {
  from {
      backgroud-position: 0 0;
  }
  to {
      background-position: 1000px 0;
  }
}
</style>