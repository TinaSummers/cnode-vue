<template>
<div>
	<div class="user-info">
		<img :src='user.avatar_url'>
		<p>{{user.loginname}}</p>
	</div>
	<dl class="user-total">
		<dt>github帐号：<span class="highlight">{{user.githubUsername}}</span></dt>
		<dt>积分：<span class="highlight">{{user.score}}</span></dt>
	</dl>
	<dl class="user-sort">
		<dd :class="{active:tab}" @click="changeTab(1)">最近参与</dd>
		<dd :class="{active: !tab}" @click="changeTab(2)">最新发布</dd>
	</dl>
	<ul class="topic-list" v-if="tab" v-for='item1 in user.recent_replies' key="one">
		<li>
			<router-link :to="{ name: 'user', params: { name: item1.author.loginname }}"><img :src='item1.author.avatar_url'></router-link>
			<router-link :to="{ name: 'article' ,params: {itemid: item1.id}}"><div>{{item1.title}}</div></router-link>
			<p><span>{{item1.author.loginname}}</span><span class="fr">{{getDate(item1.last_reply_at)}}</span></p>
		</li>
	</ul>
	<ul class="topic-list" v-else v-for='item2 in user.recent_topics' key="two">
		<li>
			<img :src='item2.author.avatar_url'>
			<router-link :to="{ name: 'article', params: {itemid: item2.id}}"><div>{{item2.title}}</div></router-link>
			<p><span>{{item2.author.loginname}}</span><span class="fr">{{getDate(item2.last_reply_at)}}</span></p>
		</li>
	</ul>
</div>
</template>
<script>
	export default{
		data() {
			return {
				user: [],
				tab: true
			}
		},
		created: function() {
				this.$http.get('/api/v1/user/'+this.$route.params.name).then(res=>{
					this.user = res.data.data;
					console.info(res.data);
				})
		},
		methods: {
			changeTab: function (flag) {
				if("1" == flag){
					this.tab = true;
				}else {
					this.tab = false;
				}
			},
			getDate: function (time) {
				var tmp = new Date(new Date(time).toJSON());
				var year = tmp.getFullYear();
				var month = tmp.getMonth()+1;
				var day = tmp.getDate();
				var hour = tmp.getHours();
				var min = tmp.getMinutes();
				var sec = tmp.getSeconds();
				return year+"-"+this.padStart2(month)+"-"+this.padStart2(day)+" "+this.padStart2(hour)+":"+this.padStart2(min)+":"+this.padStart2(sec)
			},
			padStart2: function(obj){
				var str = obj.toString();
				return (str.length == 2)?str:("0"+str);
			}
		}
	}
</script>
<style>
	.user-info{background-color:#f0f0f0;text-align:center;}
	.user-info img{width:6rem;margin:3% auto 0;border-radius:50%;border:3px solid yellowgreen;}
	.user-info p{font-size:15px;color:#000;}
	.user-total{overflow:hidden;font-size:13px;text-align:center;}
	.user-total dt{float:left;width:50%;box-sizing:border-box;padding:15px 0;background-color:#f0f0f0;}
	.highlight{color:yellowgreen;}
	.user-sort{overflow:hidden;}
	.user-sort dd{float:left;width:50%;padding:10px 0;box-sizing:border-box;border-bottom:1px solid #ccc;text-align:center;}
	.user-sort dd+dd{border-left:1px solid #ccc;}
	.user-sort .active{color:yellowgreen;border-bottom:2px solid yellowgreen;}
	.topic-list li{padding:8px;border-bottom:1px solid #eee;}
	.topic-list li img{float:left;width:3rem;border-radius:50%;margin-right:10px;}
	.topic-list li div{font-size:16px;color:#000;font-weight:bold;line-height:1.8;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}
	.topic-list .fr{float:right;color:yellowgreen;}
</style>