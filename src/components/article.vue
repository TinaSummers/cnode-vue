<template>
	<div class="article">
		<h3>{{list.title}}</h3>
		<div class="userinfo">
			<router-link :to="{name: 'user' , params: {name: list.author.loginname}}"><img :src="list.author.avatar_url"></router-link>
			<div class="info">
				<p><span>{{list.author.loginname}}</span><span class="fr sort">{{list.tab | countSort(list.top , list.good)}}</span></p>
				<p><span>{{getDate(list.create_at)}}</span><span class="fr">{{list.visit_count}}&nbsp;次浏览</span></p>
			</div>
		</div>
		<div class="content" v-html="list.content"></div>
		<div class="replay-num"><span class="num">{{list.reply_count}}</span>条回复</div>
		<ul class="replay-list">
			<li v-for="item in list.replies">
				<div class="author-info">
					<router-link :to="{name: 'user' , params: {name: item.author.loginname}}">
						<img :src="item.author.avatar_url">
						<span>{{item.author.loginname}}</span>
					</router-link>
					<span class="lightseagreen">&nbsp;·&nbsp;发表于{{getDate(item.create_at)}}</span>
					<span class="fr"><i class="iconfont icon-zan"></i>&nbsp;{{item.ups.length}}</span>
				</div>
				<div class="author-content" v-html="item.content"></div>
			</li>
		</ul>
	</div>
</template>
<script>
	export default{
		data() {
			return{
				list:[]
			}
		},
		created: function () {
			this.$http.get('/api/v1/topic/'+this.$route.params.itemid).then(res=>{
				this.list = res.data.data;
				console.info(res.data);
			})
		},
		filters: {
			countSort: function (tab,top,good) {
				var tag = top?'置顶':(good?'精华':1);
				if (1 == tag) {
					return tag=="ask"? '问答' : '分享';
				}else{
					return tag;
				}
			}
		},
		methods: {
			getDate: function (time) {
				var tmp = new Date(new Date(time).toJSON());
				var year = tmp.getFullYear();
				var month = tmp.getMonth()+1;
				var day = tmp.getDate();
				var hour = tmp.getHours();
				var min = tmp.getMinutes();
				var sec = tmp.getSeconds();
				return year+"-"+this.padStart2(month)+"-"+this.padStart2(day)+" "+this.padStart2(hour)+":"+this.padStart2(min)+":"+this.padStart2(sec);
			},
			padStart2: function(obj){
				var str = obj.toString();
				return (str.length == 2)?str:("0"+str);
			}
		}
	}
</script>
<style>
	.lightseagreen{color:lightseagreen;}
	.article h3{padding:4% 3%;background-color:lightgray;}
	.userinfo{padding:2% 3%;overflow:hidden;}
	.userinfo img{float:left;width:3rem;height:3rem;margin-right:8px;border-radius:50%;}
	.userinfo .info{font-size:13px;}
	.userinfo .info p:first-child{line-height:2;}
	.fr{float:right;}
	.userinfo .sort{float:right;line-height:normal;margin-top:2px;padding:2px 3px;border-radius:3px;background-color:yellowgreen;color:#fff;}
	.userinfo .info p:last-child{color:#808080;}
	.content{padding:3% 3% 8%;}
	.replay-num{padding:2% 3%;border-top:1px solid #eee;border-bottom:1px solid #eee;}
	.replay-num .num{color:yellowgreen;margin-right:3px;}
	.replay-list li{padding:3%;border-bottom:1px solid #eee;background-color:#fcfcfc;}
	.replay-list .author-info img{width:2rem;height:2rem;vertical-align:middle;border-radius:50%;border:1px solid lightsteelblue;}
	.replay-list .author-info .fr{margin-top:5px;color:#909090;}
	.replay-list .author-info .fr .iconfont{font-size:20px;}
	.replay-list .author-info .fr .iconfont:hover{color:#666;}
	.replay-list .author-content{padding:2% 0;}
	.markdown-text blockquote{margin:0;}
	.markdown-text code{white-space:normal;}
	.markdown-text img{width:100%;}
	.replay-list .markdown-text img{max-width:8rem;}
</style>