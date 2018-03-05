<template>
	<ul class="text-list">
		<li v-for="item in list">
			<router-link :to="{ name: 'user', params: { name: item.author.loginname }}">
				<img :src='item.author.avatar_url' :title='item.author.loginname'>
			</router-link>
			<div class="content">
				<router-link :to="{ name: 'article', params: { itemid: item.id }}"><h4>{{item.title}}</h4></router-link>
				<p><span class="num">{{item.reply_count}}/{{item.visit_count}}</span><span class="list-tab" :class="item.tab | makeColor(item.top)">{{item.top? '置顶' : item.tab}}</span></p>
			</div>
			<div>
				<p class="last-time">{{getDate(item.last_reply_at)}}</p>
			</div>
		</li>
	</ul>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      list: []
    }
  },
  created: function () {
  	this.$http.get('/api/v1/topics').then(res=>{
  		this.list = res.data.data;
  		console.info(res.data);
  	})
  },
  filters: {
  	makeColor: function (name,top) {
  		if(top){return ;}
  		switch(name){
  			case 'ask': return 'list-tab-ask';
  			case 'share': return 'list-tab-share';
  			default: return;
  		}
  	}
  },
  methods: {
  	getDate: function (time) {
				var tmp = new Date(new Date(time).toJSON());
				var year = tmp.getFullYear();
				var month = tmp.getMonth()+1;
				var day = tmp.getDate();
				return year+"-"+this.padStart2(month)+"-"+this.padStart2(day);
			},
			padStart2: function(obj){
				var str = obj.toString();
				return (str.length == 2)?str:("0"+str);
			}
  }
}
</script>

<style>
.text-list li{display:flex;justify-content:space-between;align-items:center;padding:3%;border-top:1px solid lightgreen;}
.text-list .content{flex:1;padding:0 5px;line-height:1.8;overflow:hidden;}
.text-list .content h4{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}
.text-list .content .num{margin-right:5px;color:#909090;font-size:12px;}
.text-list li img{width:50px;height:50px;border-radius:50%;}
.list-tab{padding:2px 4px;border-radius:3px;color:white;background-color:yellowgreen;}
.list-tab-ask{color:white;background-color:lightsteelblue;}
.list-tab-share{color:#999;background-color:#e5e5e5;}
.last-time{font-size:12px;color:#aaa;}
</style>