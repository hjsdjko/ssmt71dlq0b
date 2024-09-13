<template>
<div>
	<div :style='{"padding":"16px 20px","margin":"16px auto","borderColor":"#eee","borderRadius":"30px","background":"#ffffff","borderWidth":"0px","width":"86%","borderStyle":"solid"}' class="breadcrumb-preview">
		<el-breadcrumb :separator="'>'" :style='{"fontSize":"16px","lineHeight":"1","justifyContent":"flex-start","display":"flex"}'>
			<el-breadcrumb-item class="item1" to="/"><a>首页</a></el-breadcrumb-item>
			<el-breadcrumb-item class="item2" v-for="(item, index) in breadcrumbItem" :key="index"><a>{{item.name}}</a></el-breadcrumb-item>
		</el-breadcrumb>
	</div>
	<div v-if="centerType" :style='{"padding":"16px 20px","margin":"16px auto","borderColor":"#eee","borderRadius":"30px","background":"#ffffff","borderWidth":"0px","width":"86%","borderStyle":"solid"}'>
		<el-button size="mini" @click="backClick">返回</el-button>
	</div>
	<div class="list-preview" :style='{"padding":"0 7%","margin":"0px auto","overflow":"hidden","alignItems":"flex-start","flexWrap":"wrap","background":"#fafafa","display":"block","width":"100%","position":"relative","justifyContent":"space-between"}'>
    <el-form :inline="true" :model="formSearch" class="list-form-pv" :style='{"padding":"12px 6px","margin":"172px 0 0","borderColor":"#ddd","alignItems":"center","display":"flex","clear":"both","float":"right","justifyContent":"center","borderRadius":"12px","flexWrap":"wrap","background":"#fff","borderWidth":"0 0 0px","width":"380px","borderStyle":"solid","height":"auto","order":"1"}'>
      <el-form-item :style='{"width":"100%","margin":"0 0 10px"}'>
	    <div class="lable" v-if="true" :style='{"width":"120px","padding":"0 0 0 0px","lineHeight":"42px","textAlign":"right","display":"inline-block"}'>用户名：</div>
        <el-input v-model="formSearch.nickname" placeholder="用户名" @keydown.enter.native="getList(1, curFenlei)" clearable></el-input>
      </el-form-item>
      <el-form-item :style='{"width":"100%","margin":"0 0 10px"}'>
	    <div class="lable" v-if="true" :style='{"width":"120px","padding":"0 0 0 0px","lineHeight":"42px","textAlign":"right","display":"inline-block"}'>评论内容：</div>
        <el-input v-model="formSearch.content" placeholder="评论内容" @keydown.enter.native="getList(1, curFenlei)" clearable></el-input>
      </el-form-item>
	  <el-button v-if=" true " :style='{"cursor":"pointer","border":"0","padding":"0px 15px","margin":"0px 20px 0 0px","color":"#fff","display":"inline-block","outline":"none","borderRadius":"30px","background":"#1e3c4f","width":"100px","fontSize":"14px","lineHeight":"36px","height":"36px"}' type="primary" @click="getList(1, curFenlei)"><i v-if="true" :style='{"color":"#fff","margin":"0 10px 0 0","fontSize":"14px"}' class="el-icon-search"></i>查询</el-button>
	  <el-button v-if="btnAuth('discussjiudianxinxi','新增')" :style='{"cursor":"pointer","border":"0px solid #ddd","padding":"0px 15px","margin":"0px 0px 0 0","color":"#fff","display":"inline-block","outline":"none","borderRadius":"30px","background":"#1c6a6d","width":"100px","fontSize":"14px","lineHeight":"36px","height":"36px"}' type="primary" @click="add('/index/discussjiudianxinxiAdd')"><i v-if="true" :style='{"color":"#fff","margin":"0 10px 0 0","fontSize":"14px"}' class="el-icon-circle-plus-outline"></i>添加</el-button>
    </el-form>
	<div class="select2" :style='{"width":"100%","padding":"10px 0","margin":"10px 0 0","background":"#fff","height":"auto","order":"2"}'>
	  <div :style='{"padding":"0 20px","margin":"4px 0","borderColor":"#eee","background":"none","borderWidth":"0 0 1px","width":"100%","position":"relative","borderStyle":"dashed","height":"auto"}' class="list" v-for="(item,index) in selectOptionsList" :key="item">
	    <div :style='{"padding":"0 5px","color":"#555","textAlign":"right","display":"inline-block","width":"auto","lineHeight":"32px","fontSize":"14px"}' class="label">{{item.name}}：</div>
	    <div :style='{"width":"auto","display":"inline-block","height":"auto"}' class="item-body">
	      <div class="item" @click="selectClick2(item,-1)" :class="item.check ==-1 ? 'active' : ''">全部</div>
	      <div class="item" @click="selectClick2(item,index1)" :class="item.check == index1 ? 'active' : ''" v-for="item1,index1 in item.list" :key="item1">{{item1}}</div>
	    </div>
	  </div>
	</div>
	<div class="sort_view" :style='{"padding":"10px 20px","margin":"26px 0 0","overflow":"hidden","borderRadius":"12px","top":"0","textAlign":"right","background":"#fff","width":"calc(100% - 400px)","position":"","float":"left","order":"5"}'>
		<el-button :style='{"border":"0","padding":"4px 15px","margin":"0 5px","borderRadius":"4px","background":"#ededed"}' @click="sortClick('clicknum')">
			<span :style='{"margin":"0 2px 0 0","lineHeight":"20px","fontSize":"14px","color":"#333"}' class="icon iconfont icon-xiaoliang17" v-if="sortType!='clicknum'"></span>
			<span :style='{"margin":"0 2px 0 0","lineHeight":"20px","fontSize":"14px","color":"#333"}' class="icon iconfont icon-xiaoliang13" v-else-if="sortType=='clicknum'&&sortOrder=='desc'"></span>
			<span :style='{"margin":"0 2px 0 0","lineHeight":"20px","fontSize":"14px","color":"#333"}' class="icon iconfont icon-xiaoliang13" v-else-if="sortType=='clicknum'&&sortOrder=='asc'"></span>
			<span :style='{"color":"#333","lineHeight":"20px","fontSize":"14px"}'>点击量</span>
		</el-button>
	</div>
	<div class="list" :style='{"minHeight":"900px","padding":"20px 0","margin":"0px 0 0","borderRadius":"0px","background":"none","width":"calc(100% - 400px)","float":"left","order":"6"}'>
		
		<!-- 样式四 -->
		<div :style='{"width":"100%","padding":"0 0 0 2%","flexWrap":"wrap","background":"none","display":"flex","height":"auto"}' class="list list4 index-pv1">
		  <div v-for="(item, index) in dataList" :key="index" @click.stop="toDetail(item)" :style='{"width":"31.3%","margin":"0 2% 30px 0","overflow":"hidden","position":"relative","background":"#fff","height":"480px"}' class="item">
			<div class="content">
		      <div :style='{"padding":"30% 10px 20px 0","borderColor":"#ddd","color":"inherit","alignItems":"center","display":"block","textIndent":"2em","overflow":"hidden","borderWidth":"0 1px 0 0","width":"48%","lineHeight":"30px","fontSize":"inherit","borderStyle":"dashed","height":"100%"}'>{{item.content}}</div>
		      <div class="info" :style='{"padding":"30% 0 0 0px","overflow":"hidden","alignItems":"flex-start","flexWrap":"wrap","display":"block","width":"48%","height":"100%"}'>
				<div v-if="item.price" :style='{"padding":"0 0 0 20px","lineHeight":"40px","fontSize":"14px","color":"#fff"}' class="price"><span :style='{"fontSize":"12px"}'>￥</span>{{item.price}}</div>
				<div :style='{"width":"100%","padding":"0 0 0 20px","borderColor":"#ddd","borderStyle":"dashed","borderWidth":"0 0 0px"}'>
		          <span class="icon iconfont icon-shijian21" :style='{"margin":"0 2px 0 0","lineHeight":"40px","fontSize":"inherit","color":"inherit"}'></span>
		          <span :style='{"color":"inherit","lineHeight":"40px","fontSize":"inherit"}'>{{item.addtime}}</span>
		        </div>
		      </div>
		    </div>
		  </div>
		</div>
	</div>

	
	<el-pagination
	  background
	  id="pagination"
	  class="pagination"
	  :pager-count="7"
	  :page-size="pageSize"
	  prev-text="上一页"
	  next-text="下一页"
	  :hide-on-single-page="false"
	  :layout='["prev","pager","next"].join()'
	  :total="total"
	  :style='{"padding":"5px 0","margin":"20px auto","color":"#333","textAlign":"left","width":"100%","clear":"both","lineHeight":"40px","fontWeight":"500","height":"40px"}'
	  @current-change="curChange"
      @size-change="sizeChange"
	  @prev-click="prevClick"
	  @next-click="nextClick"
	></el-pagination>

  </div>
  <el-dialog title="预览图" :visible.sync="previewVisible" width="50%">
  	<img :src="previewImg" alt="" style="width: 100%;">
  </el-dialog>
</div>
</template>

<script>
  export default {
    //数据集合
    data() {
      return {
		selectIndex2: 0,
		selectOptionsList: [],
	    layouts: '',
		swiperIndex: -1,
        baseUrl: '',
        breadcrumbItem: [
          {
            name: '酒店信息评论表'
          }
        ],
        formSearch: {
          nickname: '',
          content: '',
        },
        fenlei: [],
		feileiColumn: '',
        dataList: [],
        total: 1,
        pageSize: 9,
        totalPage: 1,
        curFenlei: '全部',
        isPlain: false,
        indexQueryCondition: '',
        timeRange: [],
		centerType:false,
		previewImg: '',
		previewVisible: false,
		sortType: 'id',
		sortOrder: 'desc',
      }
    },
    async created() {
		if(this.$route.query.centerType){
			this.centerType = true
		}
		this.baseUrl = this.$config.baseUrl;
      this.getFenlei();
      this.getList(1, '全部');
    },
    //方法集合
    methods: {
		selectClick2(row,index) {
			row.check = index
			if(index == -1){
				this.formSearch[row.tableName] = ''
			}else {
				this.formSearch[row.tableName] = row.list[index]
			}
			this.getList()
		},
		add(path) {
			let query = {}
			if(this.centerType){
				query.centerType = 1
			}
			this.$router.push({path: path,query:query});
		},
      getFenlei() {
      },
      getList(page, fenlei, ref = '') {
        let params = {page, limit: this.pageSize};
        let searchWhere = {};
        if (this.formSearch.nickname != '') searchWhere.nickname = '%' + this.formSearch.nickname + '%';
        if (this.formSearch.content != '') searchWhere.content = '%' + this.formSearch.content + '%';
			let user = JSON.parse(localStorage.getItem('sessionForm'))
		if (this.sortType) searchWhere.sort = this.sortType
		if (this.sortOrder) searchWhere.order = this.sortOrder
        this.$http.get(`discussjiudianxinxi/${this.centerType?'page':'list'}`, {params: Object.assign(params, searchWhere)}).then(res => {
          if (res.data.code == 0) {
            this.dataList = res.data.data.list;
            this.total = Number(res.data.data.total);
            this.pageSize = Number(res.data.data.pageSize);
            this.totalPage = res.data.data.totalPage;
          }
        });
      },
	  sortClick(type){
		  if(this.sortType==type){
			  if(this.sortOrder == 'desc'){
				  this.sortOrder = 'asc'
			  }else{
				  this.sortOrder = 'desc'
			  }
		  }else{
			  this.sortType = type
			  this.sortOrder = 'desc'
		  }
		  this.getList(1, '全部')
	  },
      curChange(page) {
        this.getList(page);
      },
      prevClick(page) {
        this.getList(page);
      },
      sizeChange(size){
        this.pageSize = size
        this.getList(1);
      },
      nextClick(page) {
        this.getList(page);
      },
	  imgPreView(url){
		  this.previewImg = url
		  this.previewVisible = true
	  },
      toDetail(item) {
		  let params = {
			  id: item.id
		  }
		  if(this.centerType){
			  params.centerType = 1
		  }
        this.$router.push({path: '/index/discussjiudianxinxiDetail', query: params});
      },
	btnAuth(tableName,key){
		if(this.centerType){
			return this.isBackAuth(tableName,key)
		}else{
			return this.isAuth(tableName,key)
		}
	},
	backClick() {
		this.$router.push({path: '/index/center'});
	},
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
	.list-preview .list-form-pv .el-input {
		width: auto;
	}

	.breadcrumb-preview .el-breadcrumb /deep/ .el-breadcrumb__separator {
		margin: 0 9px;
		color: #ccc;
		font-weight: 500;
	}
	
	.breadcrumb-preview .el-breadcrumb .item1 /deep/ .el-breadcrumb__inner a {
		color: #999;
		display: inline-block;
	}
	
	.breadcrumb-preview .el-breadcrumb .item2 /deep/ .el-breadcrumb__inner a {
		color: #999;
		display: inline-block;
	}
	
	.category-1 .item {
		cursor: pointer;
		border: 0px solid #ddd;
		padding: 0 10px;
		margin: 0 12px 12px 0;
		color: #333;
		display: inline-block;
		font-size: 14px;
		line-height: 40px;
		border-radius: 4px;
		background: #ededed;
		width: auto;
		text-align: center;
		min-width: 100px;
	}
	
	.category-1 .item:hover {
		border: 0px solid #ddd;
		color: #fff;
		background: #1e3c4f;
		width: auto;
		font-size: 14px;
		line-height: 40px;
	}
	
	.category-1 .item.active {
		border: 0px solid #ddd;
		color: #fff;
		background: #1e3c4f;
		width: auto;
		font-size: 14px;
		line-height: 40px;
	}
	
	.category-2 .item {
		cursor: pointer;
		border-radius: 4px;
		margin: 0 0 10px 0;
		color: #999;
		background: #efefef;
		width: 100%;
		font-size: 14px;
		line-height: 36px;
		text-align: center;
	}
	
	.category-2 .item:hover {
		cursor: pointer;
		border-radius: 4px;
		margin: 0 0 10px 0;
		color: #999;
		background: #efefef;
		width: 100%;
		font-size: 14px;
		line-height: 36px;
		text-align: center;
	}
	
	.category-2 .item.active {
		cursor: pointer;
		border-radius: 4px;
		margin: 0 0 10px 0;
		color: #999;
		background: #efefef;
		width: 100%;
		font-size: 14px;
		line-height: 36px;
		text-align: center;
	}
	
	.category-3 .item {
		cursor: pointer;
		padding: 0;
		margin: 0 0 26px;
		color: #333;
		display: flex;
		border-color: #ddd;
		line-height: 30px;
		flex-wrap: wrap;
		border-radius: 0px;
		background: none;
		width: 15%;
		justify-content: center;
		border-width: 0 1px 0 0;
		align-items: center;
		border-style: solid;
		text-align: center;
		height: 80px;
	}
	
	.category-3 .item:hover {
		border-radius: 0;
		padding: 0;
		color: #333;
		background: none;
		width: 15%;
		line-height: 30px;
	}
	
	.category-3 .item.active {
		border-radius: 0;
		padding: 0;
		color: #333;
		background: none;
		width: 15%;
		line-height: 30px;
	}
	
	.list-form-pv .el-input /deep/ .el-input__inner {
		border: 1px solid #ddd;
		border-radius: 30px;
		padding: 0 10px;
		margin: 0;
		outline: none;
		color: #333;
		width: 160px;
		font-size: 14px;
		line-height: 36px;
		height: 36px;
	}
	
	.list-form-pv .el-select /deep/ .el-input__inner {
	}
	
	.list-form-pv .el-date-editor /deep/ .el-input__inner {
		border: 1px solid #ddd;
		border-radius: 30px;
		padding: 0 30px;
		margin: 0;
		outline: none;
		color: #333;
		display: inline-block;
		width: 160px;
		font-size: 14px;
		line-height: 36px;
		height: 36px;
	}
	
	.list .index-pv1 .animation-box {
		transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
		z-index: initial;
	}
	
	.list .index-pv1 .animation-box:hover {
		transform: rotate(0deg) scale(1.02) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
		-webkit-perspective: 1000px;
		perspective: 1000px;
		transition: 0.3s;
		z-index: 1;
	}
	
	.list .index-pv1 .animation-box img {
		transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
	}
	
	.list .index-pv1 .animation-box img:hover {
		transform: rotate(0deg) scale(1.05) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
		-webkit-perspective: 1000px;
		perspective: 1000px;
		transition: 0.3s;
	}
	
	#pagination.el-pagination /deep/ .el-pagination__total {
		margin: 0 10px 0 0;
		color: #666;
		font-weight: 400;
		display: inline-block;
		vertical-align: top;
		font-size: 13px;
		line-height: 28px;
		height: 28px;
	}
	
	#pagination.el-pagination /deep/ .btn-prev {
		border: none;
		border-radius: 2px;
		padding: 0 6px;
		margin: 0 5px;
		color: #666;
		background: #fff;
		display: inline-block;
		vertical-align: top;
		font-size: 13px;
		line-height: 28px;
		min-width: 35px;
		height: 28px;
	}
	
	#pagination.el-pagination /deep/ .btn-next {
		border: none;
		border-radius: 2px;
		padding: 0 6px;
		margin: 0 5px;
		color: #666;
		background: #fff;
		display: inline-block;
		vertical-align: top;
		font-size: 13px;
		line-height: 28px;
		min-width: 35px;
		height: 28px;
	}
	
	#pagination.el-pagination /deep/ .btn-prev:disabled {
		border: none;
		cursor: not-allowed;
		border-radius: 2px;
		padding: 0 6px;
		margin: 0 5px;
		color: #C0C4CC;
		background: #fff;
		display: inline-block;
		vertical-align: top;
		font-size: 13px;
		line-height: 28px;
		height: 28px;
	}
	
	#pagination.el-pagination /deep/ .btn-next:disabled {
		border: none;
		cursor: not-allowed;
		border-radius: 2px;
		padding: 0 6px;
		margin: 0 5px;
		color: #C0C4CC;
		background: #fff;
		display: inline-block;
		vertical-align: top;
		font-size: 13px;
		line-height: 28px;
		height: 28px;
	}
	
	#pagination.el-pagination /deep/ .el-pager {
		padding: 0;
		margin: 0;
		display: inline-block;
		vertical-align: top;
	}
	
	#pagination.el-pagination /deep/ .el-pager .number {
		cursor: pointer;
		padding: 0 4px;
		margin: 0 5px;
		color: #666;
		display: inline-block;
		vertical-align: top;
		font-size: 13px;
		line-height: 28px;
		border-radius: 2px;
		background: #fff;
		text-align: center;
		min-width: 30px;
		height: 28px;
	}
	
	#pagination.el-pagination /deep/ .el-pager .number:hover {
		cursor: pointer;
		padding: 0 4px;
		margin: 0 5px;
		color: #fff;
		display: inline-block;
		vertical-align: top;
		font-size: 13px;
		line-height: 28px;
		border-radius: 2px;
		background: #8e9da6;
		text-align: center;
		min-width: 30px;
		height: 28px;
	}
	
	#pagination.el-pagination /deep/ .el-pager .number.active {
		cursor: default;
		padding: 0 4px;
		margin: 0 5px;
		color: #FFF;
		display: inline-block;
		vertical-align: top;
		font-size: 13px;
		line-height: 28px;
		border-radius: 2px;
		background: #8e9da6;
		text-align: center;
		min-width: 30px;
		height: 28px;
	}
	
	#pagination.el-pagination /deep/ .el-pagination__sizes {
		display: inline-block;
		vertical-align: top;
		font-size: 13px;
		line-height: 28px;
		height: 28px;
	}
	
	#pagination.el-pagination /deep/ .el-pagination__sizes .el-input {
		margin: 0 5px;
		width: 100px;
		position: relative;
	}
	
	#pagination.el-pagination /deep/ .el-pagination__sizes .el-input .el-input__inner {
		border: 1px solid #DCDFE6;
		cursor: pointer;
		padding: 0 25px 0 8px;
		color: #606266;
		display: inline-block;
		font-size: 13px;
		line-height: 28px;
		border-radius: 3px;
		outline: 0;
		background: #FFF;
		width: 100%;
		text-align: center;
		height: 28px;
	}
	
	#pagination.el-pagination /deep/ .el-pagination__sizes .el-input span.el-input__suffix {
		top: 0;
		position: absolute;
		right: 0;
		height: 100%;
	}
	
	#pagination.el-pagination /deep/ .el-pagination__sizes .el-input .el-input__suffix .el-select__caret {
		cursor: pointer;
		color: #C0C4CC;
		width: 25px;
		font-size: 14px;
		line-height: 28px;
		text-align: center;
	}
	
	#pagination.el-pagination /deep/ .el-pagination__jump {
		margin: 0 0 0 24px;
		color: #606266;
		display: inline-block;
		vertical-align: top;
		font-size: 13px;
		line-height: 28px;
		height: 28px;
	}
	
	#pagination.el-pagination /deep/ .el-pagination__jump .el-input {
		border-radius: 3px;
		padding: 0 2px;
		margin: 0 2px;
		display: inline-block;
		width: 50px;
		font-size: 14px;
		line-height: 18px;
		position: relative;
		text-align: center;
		height: 28px;
	}
	
	#pagination.el-pagination /deep/ .el-pagination__jump .el-input .el-input__inner {
		border: 1px solid #DCDFE6;
		cursor: pointer;
		padding: 0 3px;
		color: #606266;
		display: inline-block;
		font-size: 14px;
		line-height: 28px;
		border-radius: 3px;
		outline: 0;
		background: #FFF;
		width: 100%;
		text-align: center;
		height: 28px;
	}

	.list4 .item .image {
				object-fit: cover;
				display: block;
				width: 100%;
				transition: 0.3s;
				height: 100%;
			}

	.list4 .item:hover .image {
				transform: scale(1);
			}
	
	.list4 .item .content {
				cursor: pointer;
				padding: 20px;
				color: #fff;
				left: 0;
				bottom: -100%;
				background: rgba(142,157,167,.9);
				display: flex;
				width: 100%;
				font-size: 14px;
				position: absolute;
				transition: 0.3s;
				height: 100%;
			}
	
	.list4 .item:hover .content {
				bottom: 0;
			}
	
	.select2 .list .item-body .item {
				padding: 0 5px;
				color: #666;
				display: inline-block;
				font-size: 14px;
				line-height: 32px;
			}
	.select2 .list .item-body .item:hover {
				color: #275bb2;
				background: none;
			}
	.select2 .list .item-body .item.active {
				color: #275bb2;
				background: none;
			}
</style>
