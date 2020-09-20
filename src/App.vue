<template>
  <div id="app">
    <Y-badge dot='12' max='10'>消息</Y-badge>
    <Y-badge dot='9' max='10'>消息</Y-badge>
     <Y-badge dot='1' max='10'>消息</Y-badge>
     <Y-badge dot='new' max='10'>消息</Y-badge>
     <Y-badge dot='hot' max='10'>消息</Y-badge>
    <Y-button type="primary" plain round @click="openMessage">Messsage</Y-button>
    <Y-button type="danger" plain round>点击</Y-button>
    <Y-button type="warning" plain round>点击</Y-button>
    <Y-button type="info" icon='sousuo' iconPos='left'>点击</Y-button>
    <Y-button type="success" icon='loading' iconPos='right'>点击</Y-button>
    <Y-icon icon='wrong' size='50'></Y-icon>
    <Y-button type="primary" plain icon='wrong' circle></Y-button>
    <Y-input v-model="input1" placeholder='请输入内容' search ></Y-input>
    <Y-input v-model="input1" placeholder='请输入内容' search @search='handSearch'></Y-input>
    <Y-button @click="onHaldefun" type="info" plain round>提交</Y-button>
    <Y-link type="success" disabled>链接</Y-link>
    <Y-link type="danger" disabled>链接</Y-link>
    <Y-link type="warning" disabled>链接</Y-link>

    <Y-link type="primary" underline @click="funlink">链接</Y-link>
    <Y-link  href='www.baidu.com' type="info" disabled>链接</Y-link>
     <Y-menu 
     activeIndex='2'
     @selectIndex='handleClick'  
     >
          <Y-menu-item index='1' disabled>菜单1</Y-menu-item>
          <Y-menu-item index='2'>
                <Y-icon icon='sousuo'></Y-icon>菜单2
          </Y-menu-item>
            <Y-menu-item index='3'>
                <Y-icon icon='sousuo'></Y-icon>菜单3
          </Y-menu-item>
          <Y-menu-item>
              <Y-input v-model="input1" placeholder='请输入内容' closeable></Y-input>
          </Y-menu-item>
          <!-- slot 映射父组件中的 slot 标签 -->
          <template slot="actions">
                 <Y-avatar @click="funca" url='https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2156833431,1671740038&fm=26&gp=0.jpg' size='medium' corner='square' ></Y-avatar>
                 <Y-icon icon='Loading'></Y-icon>
          </template>
     </Y-menu>
     <Y-avatar url='https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2156833431,1671740038&fm=26&gp=0.jpg' size='small' corner='circle'></Y-avatar>
     <Y-avatar url='https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2156833431,1671740038&fm=26&gp=0.jpg' size='medium' corner='square' border></Y-avatar>
     <Y-avatar @click="funca" url='https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2156833431,1671740038&fm=26&gp=0.jpg' size='large' corner='circle' border></Y-avatar>
      <Y-button @click="opennotic">消息</Y-button>
      <Y-button @click="opennotic1" type='success'>成功</Y-button>
      <Y-button @click="opennotic2" type='danger'>错误</Y-button>
      <Y-button @click="opennotic3" type='warning'>警告</Y-button>


      <div style="text-align:center;margin:20px 0">
        <Y-title url='https://www.typora.io/'>Young-UI</Y-title>
      </div>
      <div class="time">
        <Y-timeline endText='完结'>
          <Y-timeline-item v-for="(item,index) in times" :key="index" :time="item.time" :barIcon='item.icon' barColor='#008c8c'>
                    {{ item.msg }}
              </Y-timeline-item>
          </Y-timeline>
      </div>
      <div style="text-align:center;margin:20px 0">
        <Y-title url='https://www.typora.io/'>布局1</Y-title>
      </div>
     <Y-container class="container">
        <Y-header class="header">header</Y-header>
          <Y-container>
                <Y-aside class="aside" width='200'>aside</Y-aside>
                <Y-content class="content">content</Y-content>
          </Y-container>
        <Y-footer class="footer">footer</Y-footer>
     </Y-container>
     
    <div style="text-align:center;margin:20px 0">
        <Y-title>布局2</Y-title>
      </div>
     <Y-container class="container" pop='1'>
           <Y-header class="header">header</Y-header>
           <Y-container class="container" pop='2'>
                <Y-aside class="aside" width='200'>aside</Y-aside>
                <Y-container class="container" pop='3'>
                  <Y-content class="content">content</Y-content>
                  <Y-footer class="footer">footer</Y-footer>
                </Y-container> 
          </Y-container> 
     </Y-container> 
    <div style="text-align:center;margin:20px 0">
        <Y-title url='https://www.typora.io/'>布局3</Y-title>
      </div>
    <Y-container class="container">
          <Y-container class="container">
              <Y-aside class="aside" width='200'>aside</Y-aside>
                <Y-container class="container" pop='3'>
                  <Y-header class="header">header</Y-header>
                  <Y-content class="content">content</Y-content>
                  <Y-footer class="footer">footer</Y-footer>
                </Y-container> 
         </Y-container>
    </Y-container>
    <Y-card
       url='https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png'
    >
       <div class="content">
            蜜汁小汉堡，吃了就管饱 蜜汁小汉堡，吃了就管饱   蜜汁小汉堡，吃了就管饱   蜜汁小汉堡，吃了就管饱      
       </div>
       <div class="cardbar">
           <span class="trade">
              <Y-icon  icon='trade'></Y-icon>
              <p>200</p>
           </span>
            <Y-button plain type='success'>购买</Y-button>
      </div>
    </Y-card>
  </div>
</template>

<script>
export default {
  name:'App',
  data(){
     return{
          input1:'aa',
          count:0,
          times:[
              {
                 msg:'asdasd',
                 time:'2020/9/17',
                 icon:'wrong'
              },{
                 msg:'asdasd阿松大阿松大SAd',
                 time:'2020/9/18'
              },{
                 msg:'asda阿松大松大松大sdasd asd',
                 time:'2020/9/19'
              }
          ]
     }
  },
  mounted(){
    console.log(this.$store);
  },
  methods:{
     openMessage(){
            this.$Messages({
                  title:'提示',
                  message:'这个是html',
                  callback:hand=>{
                     this.$notify({
                        title: '提示1',
                        message: `你点击的是${hand}`,
                        type:'info'
                     });
                     
                  }
            })
     },
     handSearch(data){
           console.log(data)
     },
     onHaldefun(){
        console.log(this.input1)
     },
     getvalue(data){
       console.log(data)
     },
     funlink(){
       console.log('aa')
     },
     handleClick(data){
        console.log(data)
     },
     funca(){
       console.log('ss')
     },
     opennotic(){
       
        this.$notify({
          title: '提示1',
          message: `这是一条不会自动关闭的消息`,
          type:'info'
        });
     }, opennotic1(){
       
        this.$notify({
          title: '提示2',
          message: `这是一条不会自动关闭的消息`,
          type:'success'
        });
     }, opennotic2(){
       
        this.$notify({
          title: '提示3',
          message: `这是一条不会自动关闭的消息`,
          type:'error'
        });
     }, opennotic3(){
       
        this.$notify({
          title: '提示',
          message: `这是一条不会自动关闭的消息`,
          type:'warning'
        });
     }
  }
}
</script>
<style lang="less" scoped>
.time{
  width: 200px;
  margin: 0 auto;
}
.cardbar{
   display: flex;
   flex-direction: row;
   justify-content: space-between;
   align-items: center;
   .trade{
      display: flex;
      flex-direction: row;
      align-items: center;
      font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
      p{
         margin-left: 10px;
      }
   }
}
.content{
    font-size: 13px;
    padding: 5px 0;
}
.container{
     .content{
          background: rgb(101, 139, 101);
          text-align: center;
          line-height: 140px;
     }
    .header{
       background: darkseagreen;
       text-align: center;
       line-height: 40px;
    }
    .aside{
       background: darkslategrey;
        text-align: center;
       line-height: 150px;
    }
    .container{
       background: seagreen;
       text-align: center;
       line-height: 40px;
    }
    .footer{
       background: darkseagreen;
       text-align: center;
       line-height: 40px;
    }
}

</style>