<template>
	<div class="toptab">
		<div class="left"><span>open</span></div>
		<span><img width="20em" height="auto" src="../../assets/logo.png">{{ msg }}</span>
		<div class="right"><router-link to="login"><i class="iconfont icon-shenfenzheng"></i></router-link></div>
	</div>
</template>

<script>
export default {
  name: 'tab',
  data () {
    return {
      msg: '全部'
    }
  }
}
</script>

<style>
	.toptab{position:fixed;width:100%;top:0;line-height:3;text-align:center;border-bottom:1px solid yellowgreen;background-color:white;}
	.toptab img{vertical-align:middle;}
	.toptab .left{position:absolute;left:3%;top:0;}
	.toptab .right{position:absolute;right:3%;top:0;}
	.toptab  a:hover{text-decoration:none;}
	.toptab .right i{font-size:30px;color:#999;line-height:42px;}
	.toptab .right img{width:30px;height:30px;border-radius:50%;}
</style>