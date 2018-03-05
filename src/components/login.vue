<template>
	<div class="login">
		<dl class="info">
			<dd><input type="text" placeholder="用户名" name="" /></dd>
			<dd><input type="password" placeholder="密码" name="" /></dd>
			<dd class="btn"><input type="button" name="" value="登 录" /></dd>
		</dl>
	</div>
</template>
<script>
export default{

}
</script>
<style>
	.login .info{margin:20% auto;padding:0 5%;}
	.login .info dd{margin:5%;}
	.login .info input{width:100%;height:42px;text-indent:15px;border:none;border-bottom:2px solid yellowgreen;}
	.login .info .btn input{margin-top:8%;border:none;font-size:16px;background-color:yellowgreen;border-radius:5px;color:white;}
	.login .info .btn input:active,.login .info .btn input:hover{opacity:.8;}
</style>