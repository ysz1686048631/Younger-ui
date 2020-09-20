<template>
         <div :class="['y-input',search&&isInput?'flex':'']">
                <span>
                  <input 
                :class="['y-input-inner',disabled?'notAllow':'']" 
                type="text" 
                @compositionstart="handleCompositionStart"
                @compositionupdate="handleCompositionUpdate"
                @compositionend="handleCompositionEnd"
                @input="handleInput"
               :placeholder="placeholder?placeholder:''" 
               :disabled="disabled"
               :required="required"
               
               ref="input"
               > 
                  </span> 
                <span @click="onSearchvalue" v-if="search&&isInput&&!disabled" class="closebar">
                     <Y-icon icon='wrong'></Y-icon>
                </span>
                
             
               
         </div>
</template>

<script>
export default {
    name:'Y-input',
    data(){
            return{
                 isComposing: false,
                 isInput:false
            }
    },
    props:{
          placeholder:{
                   type:String
          },
          disabled:{
                   type:Boolean,
                   default:false
          },
          value:{
                   type:String
          },
          required:{
               type:Boolean,
               default:false
          },
          search:{
               type:Boolean,
               default:false
          }   
    },
    computed:{
        nativeInputValue() {
                //判断输入是否为空
                return this.value === null || this.value === undefined ? '' : String(this.value);
      },
    },
    mounted() {
        //     初始化数据
        this.setNativeInputValue();
        const input = this.getInput(); //首先获取数据并赋值
       
        if(input.value.length>0){
              this.isInput=true;
             
        }else{
              this.isInput=false;
        }
         
    },
    methods:{
       handleCompositionStart() {
        this.isComposing = true;
      },
      handleCompositionUpdate(event) {
        const text = event.target.value;
        const lastCharacter = text[text.length - 1] || '';
      
      },
      handleCompositionEnd(event) {
        if (this.isComposing) {
          this.isComposing = false;
          this.handleInput(event);
        }
      }, 
      // 获取input输入框     
       getInput() {
        return this.$refs.input;
      }, 
      //设置input的value
      setNativeInputValue() {
        const input = this.getInput(); //首先获取数据并赋值
        
        
        if (!input) return;
        if (input.value === this.nativeInputValue) return;
        input.value = this.nativeInputValue;
      },
      //清除
      onSearchvalue(){
        const input = this.getInput();
     
        this.$emit('onSearch',input.value);
      },
      // 触发input 事件时
       handleInput(event){
        if(event.target.value.length>0){
             this.isInput = true;
        }else{
           this.isInput = false;
        }
        //  this.isComposing 为true 说明用户还未输入完
        //  这里仿照element 来写的组件 ，其原理是当用户输入完数据后才会返回新的数据 做了类似于一个防抖的操作
        //  并没有在input元素上使用的是v-model / :value 等数据绑定， 使用的ref来处理数据      
        if (this.isComposing) return;
        if (event.target.value === this.nativeInputValue) return;
        //触发y-input 的input 的事件  //者里是本身调用是本身的input 
        //调用的父组件中的Y-input中 input 方法      
        this.$emit('input', event.target.value);

        this.$nextTick(this.setNativeInputValue);
      },      
    }
}
</script>

<style lang="less" scoped>
.flex{
   display: flex;
   flex-direction:row;
   align-items: center;
   position: relative;
   width: 180px;
   .closebar{
         position: absolute;
         right: -15px;  
         width: 25px;
   }
  
}
   .y-input{
            .notAllow{
               cursor: not-allowed;
            }
            span{
              display: inline-block;
            }
            &-inner{
                  
                   padding: 6px 0;
                   padding-left: 10px; 
                   padding-right: 30px;
                   border: none; 
                   border: 1px solid #dcdfe6;
                   border-radius: 4px;
                   font-size: 13px;
                   font-weight: 100;
                   &:focus{
                           outline-style: none;
                           border-color:#409eff; 
                           
                   }
            }
   }
</style>