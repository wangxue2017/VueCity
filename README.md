## 环境配置
```The scaffold
npn install vue-cli -g
```
```Creating the Project
vue init webpack vue-book
```
```Install dependencies
cd vue-book
npm install
```
```run dev// package.json->scripts->dev
npm run dev
```
```
npm install less less-loader --save-dev
npm install axios swiper vue-lazyload vue-scroller --save
```
## src 解析
- containers : 页面级组件
- components : 插件级组件
- router : 路由
- api :axios 代替ajax 获取数据
## mock 解析
- server.js : 服务器
- Slider.js : 轮播图
## 项目思路
- 页面级组件：首页(home)、列表(list)、收藏(collect)、添加(add)
- 配置路由：注意配置404路由
```
// 1.路由切换每次都会发送请求：保存缓存页面
keep-alive
```
- 插件组件：通用底部(Tab),通用头部(MHeader),首页轮播图(Slider),首页Loading(Loading)
- 调试服务器：只提供接口
```
// 配置代理表: config->index.js->proxyTable
// axios ：专门做ajax的
```
- Home轮播图
```
 // Home.vue 中不能直接渲染slider，可能数据没有传递过来数据已经传递完毕导致轮播图不能使用；
<div v-if="sliders.length">
  <Slider :data="sliders"></Slider>
</div>
```
- List 图片懒加载
```
server -> api -> List
```
- Add 添加
```
Add -> api -> Add -> server
// 1. 点击添加按钮，list不会立即显示数据，需要刷新页面
vue-scroller 组件
```
- DELETE 删除
```
// 先获取所有的内容，过滤掉id相同的一项，在返回新的内容
```
- Update 修改
```
// 1.根据id获取到当前需要被更改的内容，如果keep-alive执行，依然调用 activated(){}
```
## 知识点
父传子, 流
