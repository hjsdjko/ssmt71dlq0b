import VueRouter from 'vue-router'

//引入组件
import Index from '../pages'
import Home from '../pages/home/home'
import Login from '../pages/login/login'
import Register from '../pages/register/register'
import Center from '../pages/center/center'
import Storeup from '../pages/storeup/list'
import News from '../pages/news/news-list'
import NewsDetail from '../pages/news/news-detail'
import payList from '../pages/pay'

import yonghuList from '../pages/yonghu/list'
import yonghuDetail from '../pages/yonghu/detail'
import yonghuAdd from '../pages/yonghu/add'
import jingdianfenleiList from '../pages/jingdianfenlei/list'
import jingdianfenleiDetail from '../pages/jingdianfenlei/detail'
import jingdianfenleiAdd from '../pages/jingdianfenlei/add'
import jingdianxinxiList from '../pages/jingdianxinxi/list'
import jingdianxinxiDetail from '../pages/jingdianxinxi/detail'
import jingdianxinxiAdd from '../pages/jingdianxinxi/add'
import menpiaodinggouList from '../pages/menpiaodinggou/list'
import menpiaodinggouDetail from '../pages/menpiaodinggou/detail'
import menpiaodinggouAdd from '../pages/menpiaodinggou/add'
import jiudianxinxiList from '../pages/jiudianxinxi/list'
import jiudianxinxiDetail from '../pages/jiudianxinxi/detail'
import jiudianxinxiAdd from '../pages/jiudianxinxi/add'
import jiudianyudingList from '../pages/jiudianyuding/list'
import jiudianyudingDetail from '../pages/jiudianyuding/detail'
import jiudianyudingAdd from '../pages/jiudianyuding/add'
import lvyougonglveList from '../pages/lvyougonglve/list'
import lvyougonglveDetail from '../pages/lvyougonglve/detail'
import lvyougonglveAdd from '../pages/lvyougonglve/add'
import newstypeList from '../pages/newstype/list'
import newstypeDetail from '../pages/newstype/detail'
import newstypeAdd from '../pages/newstype/add'
import aboutusList from '../pages/aboutus/list'
import aboutusDetail from '../pages/aboutus/detail'
import aboutusAdd from '../pages/aboutus/add'
import systemintroList from '../pages/systemintro/list'
import systemintroDetail from '../pages/systemintro/detail'
import systemintroAdd from '../pages/systemintro/add'
import discussjingdianxinxiList from '../pages/discussjingdianxinxi/list'
import discussjingdianxinxiDetail from '../pages/discussjingdianxinxi/detail'
import discussjingdianxinxiAdd from '../pages/discussjingdianxinxi/add'
import discussjiudianxinxiList from '../pages/discussjiudianxinxi/list'
import discussjiudianxinxiDetail from '../pages/discussjiudianxinxi/detail'
import discussjiudianxinxiAdd from '../pages/discussjiudianxinxi/add'
import discusslvyougonglveList from '../pages/discusslvyougonglve/list'
import discusslvyougonglveDetail from '../pages/discusslvyougonglve/detail'
import discusslvyougonglveAdd from '../pages/discusslvyougonglve/add'

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
	return originalPush.call(this, location).catch(err => err)
}

//配置路由
export default new VueRouter({
	routes:[
		{
      path: '/',
      redirect: '/index/home'
    },
		{
			path: '/index',
			component: Index,
			children:[
				{
					path: 'home',
					component: Home
				},
				{
					path: 'center',
					component: Center,
				},
				{
					path: 'pay',
					component: payList,
				},
				{
					path: 'storeup',
					component: Storeup
				},
				{
					path: 'news',
					component: News
				},
				{
					path: 'newsDetail',
					component: NewsDetail
				},
				{
					path: 'yonghu',
					component: yonghuList
				},
				{
					path: 'yonghuDetail',
					component: yonghuDetail
				},
				{
					path: 'yonghuAdd',
					component: yonghuAdd
				},
				{
					path: 'jingdianfenlei',
					component: jingdianfenleiList
				},
				{
					path: 'jingdianfenleiDetail',
					component: jingdianfenleiDetail
				},
				{
					path: 'jingdianfenleiAdd',
					component: jingdianfenleiAdd
				},
				{
					path: 'jingdianxinxi',
					component: jingdianxinxiList
				},
				{
					path: 'jingdianxinxiDetail',
					component: jingdianxinxiDetail
				},
				{
					path: 'jingdianxinxiAdd',
					component: jingdianxinxiAdd
				},
				{
					path: 'menpiaodinggou',
					component: menpiaodinggouList
				},
				{
					path: 'menpiaodinggouDetail',
					component: menpiaodinggouDetail
				},
				{
					path: 'menpiaodinggouAdd',
					component: menpiaodinggouAdd
				},
				{
					path: 'jiudianxinxi',
					component: jiudianxinxiList
				},
				{
					path: 'jiudianxinxiDetail',
					component: jiudianxinxiDetail
				},
				{
					path: 'jiudianxinxiAdd',
					component: jiudianxinxiAdd
				},
				{
					path: 'jiudianyuding',
					component: jiudianyudingList
				},
				{
					path: 'jiudianyudingDetail',
					component: jiudianyudingDetail
				},
				{
					path: 'jiudianyudingAdd',
					component: jiudianyudingAdd
				},
				{
					path: 'lvyougonglve',
					component: lvyougonglveList
				},
				{
					path: 'lvyougonglveDetail',
					component: lvyougonglveDetail
				},
				{
					path: 'lvyougonglveAdd',
					component: lvyougonglveAdd
				},
				{
					path: 'newstype',
					component: newstypeList
				},
				{
					path: 'newstypeDetail',
					component: newstypeDetail
				},
				{
					path: 'newstypeAdd',
					component: newstypeAdd
				},
				{
					path: 'aboutus',
					component: aboutusList
				},
				{
					path: 'aboutusDetail',
					component: aboutusDetail
				},
				{
					path: 'aboutusAdd',
					component: aboutusAdd
				},
				{
					path: 'systemintro',
					component: systemintroList
				},
				{
					path: 'systemintroDetail',
					component: systemintroDetail
				},
				{
					path: 'systemintroAdd',
					component: systemintroAdd
				},
				{
					path: 'discussjingdianxinxi',
					component: discussjingdianxinxiList
				},
				{
					path: 'discussjingdianxinxiDetail',
					component: discussjingdianxinxiDetail
				},
				{
					path: 'discussjingdianxinxiAdd',
					component: discussjingdianxinxiAdd
				},
				{
					path: 'discussjiudianxinxi',
					component: discussjiudianxinxiList
				},
				{
					path: 'discussjiudianxinxiDetail',
					component: discussjiudianxinxiDetail
				},
				{
					path: 'discussjiudianxinxiAdd',
					component: discussjiudianxinxiAdd
				},
				{
					path: 'discusslvyougonglve',
					component: discusslvyougonglveList
				},
				{
					path: 'discusslvyougonglveDetail',
					component: discusslvyougonglveDetail
				},
				{
					path: 'discusslvyougonglveAdd',
					component: discusslvyougonglveAdd
				},
			]
		},
		{
			path: '/login',
			component: Login
		},
		{
			path: '/register',
			component: Register
		},
	]
})
