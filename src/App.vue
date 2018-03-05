<template>
  <div id="app">
    <tab></tab>
    <router-view/>
  </div>
</template>

<script>
import tab from '@/components/common/tab'
export default {
  name: 'app',
  components: { tab }
}
</script>
<style src="@/assets/icon/iconfont.css"></style>
<style>
body,div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,input,button,textarea,p{margin:0;padding:0;}
body{background:#fff;color:#555;font-size:14px;font-family:"Microsoft YaHei",Verdana,Arial,Helvetica,sans-serif;}
a{color:#555; text-decoration:none;}
a:hover{text-decoration:underline;}
img{border:none;}
ol,ul,li{list-style:none;}
a,div,header,span,input{-webkit-tap-highlight-color:rgba(255,255,255,0);outline:none;}
input[type="submit"],input[type="button"],button{-webkit-appearance:none;}
#app{
	padding-top:42px;
}
</style>
