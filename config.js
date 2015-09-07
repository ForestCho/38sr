
var path = require('path');
var config = {
	site_name: '38sr.com',
	cookie_name: '38srweb',
	cookie_path: '/',
	session_secret: '38srweb',
	
	index: {
		list_article_size : 5,
		list_new_user_size :9,
		list_hot_user_size :9
	},
	
	site:{
 		name: '38锶',
  		description: '38锶',
		keywords: '心情,小清新,有点意思,囧事,爆料',
  		author: 'caosl158'
	},

	mailhost: {
		host:"smtp.38sr.com",
		secureConnection:true,
		port:465,
		auth: {
			user:"service@38sr.com",
			pass: "CAOsl910417"
		}
	}, 
	upyun:{
		bat:  "srpic",
		opname:  "caosl158",
		oppwd:  "caosl910417", 
		photourl:  "http://srpic.b0.upaiyun.com/photo/",
		cimgurl:  "http://srpic.b0.upaiyun.com/cimg/",
		siteurl:  "http://srpic.b0.upaiyun.com/site/",
		mryjurl:  "http://srpic.b0.upaiyun.com/mryj/"
			
	},
 	upload_img_dir: path.join(__dirname, 'public','userimg'),
 	rela_upload_img_dir: path.join('/userimg'),

	site_link:[
		{
			text:"Shulen`s Blog",
			link:"http://blog.38sr.com"
		},
		{
			text:"DigitalOcean",
			link:"https://www.digitalocean.com/?refcode=0f682e48abe3"
		},	
		{
			text:"羊城通余额查询",
			link:"http://www.38sr.com/yangchengtongv"
		}

	]
}


exports.config = config;