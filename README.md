### 微信小程序

> 这是小程序入门基础篇
  [小程序开发文档]('https://mp.weixin.qq.com/debug/wxadoc/dev/index.html')
  1.首先根据这个文档走一下步骤，申请账号，安装开发工具，在指定盘符创建一个工程文件，启动微信开发者工具，项目目录选择刚才新建的工程文件夹，AppID可以按照如下步骤获取:
  登录 https://mp.weixin.qq.com ，我们可以在菜单 “设置”-“开发设置” 看到小程序的 AppID 了 。
  2.初始化进入开发者工具，里面会生成pages、utils目录，以及相关的配置文件。
    这里介绍下，小程序有几种文件格式，
      wxml模板文件 ==>  页面结构，相当于 html
      wxss文件     ==>  页面样式表，具有 CSS 大部分的特性，
      js文件       ==>  页面逻辑，可以使用小程序内置的API
      wxs文件      ==>  是小程序的一套脚本语言，结合 WXML，可以构建出页面的结构。
      json文件     ==>  页面配置信息，页面路径，window方法，tabBar，networkTimeout
    app.json配置信息，
      app.json文件用来对微信小程序进行全局配置，决定页面文件的路径、窗口表现、设置网络超时时间、设置多 tab 等。
      {
        "pages":[
          "pages/index/index",
          ...
        ],
        "window":{
          "navigationBarTitleText": "Demo"
        },
        "tabBar":{
          "list":[{
            "pagePath":"pages/index/index",
            "text":"首页",
            "iconPath": "images/mainIndex_off.png",           //初始化图片
            "selectedIconPath": "images/mainIndex_on.png"     //选中图片
          },{
            ...
          }]
        },
         "networkTimeout": {
            "request": 10000,
            "downloadFile": 10000
          },
          "debug": true
      }
  
  3.app.js
    App() 函数用来注册一个小程序。接受一个 object 参数，其指定小程序的生命周期函数等。
    App({
      //生命周期函数--监听小程序初始化
      onLaunch: function(options) {
          // 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
      },
      //生命周期函数--监听小程序显示	
      onShow: function(options) {
          // 当小程序启动，或从后台进入前台显示，会触发 onShow
      },
      //生命周期函数--监听小程序隐藏
      onHide: function() {
          // 当小程序从前台进入后台，会触发 onHide
      },
      onError: function(msg) {
          // 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
      },
      globalData: 'I am global data'
    })
    小程序应用生命周期有三个，初始化，显示，隐藏
    getApp()
      全局的 getApp() 函数可以用来获取到小程序实例。
    ```
      // other.js
      var appInstance = getApp()
      console.log(appInstance.globalData) // I am global data
    ```
    index.js文件
    Page
      Page() 函数用来注册一个页面。接受一个 object 参数，其指定页面的初始数据、生命周期函数、事件处理函数等。
      //index.js
    ```
    Page({
      data: {
        text: "This is page data."
      },
      onLoad: function(options) {
        // Do some initialize when page load.
      },
      onReady: function() {
        // Do something when page ready.
      },
      onShow: function() {
        // Do something when page show.
      },
      onHide: function() {
        // Do something when page hide.
      },
      onUnload: function() {
        // Do something when page close.
      },
      onPullDownRefresh: function() {
        // Do something when pull down.
      },
      onReachBottom: function() {
        // Do something when page reach bottom.
      },
      onShareAppMessage: function () {
      // return custom share data when user share.
      },
      onPageScroll: function() {
        // Do something when page scroll
      },
      onTabItemTap(item) {
        console.log(item.index)
        console.log(item.pagePath)
        console.log(item.text)
      },
      // Event handler.
      viewTap: function() {
        this.setData({
          text: 'Set some data for updating view.'
        }, function() {
          // this is setData callback
        })
      },
      customData: {
        hi: 'MINA'
      }
    })
    ```
    页面生命周期
      onLoad: 页面加载

        一个页面只会调用一次，可以在 onLoad 中获取打开当前页面所调用的 query 参数。
      onShow: 页面显示

        每次打开页面都会调用一次。
      onReady: 页面初次渲染完成

        一个页面只会调用一次，代表页面已经准备妥当，可以和视图层进行交互。
        对界面的设置如wx.setNavigationBarTitle请在onReady之后设置。详见生命周期
      onHide: 页面隐藏

      当navigateTo或底部tab切换时调用。
      onUnload: 页面卸载

      当redirectTo或navigateBack的时候调用。
    
    页面相关事件处理函数
      onPullDownRefresh: 下拉刷新

        监听用户下拉刷新事件。
        需要在app.json的window选项中或页面配置中开启enablePullDownRefresh。
        当处理完数据刷新后，wx.stopPullDownRefresh可以停止当前页面的下拉刷新。
      onReachBottom: 上拉触底

        监听用户上拉触底事件。
        可以在app.json的window选项中或页面配置中设置触发距离onReachBottomDistance。
        在触发距离内滑动期间，本事件只会被触发一次。
      onPageScroll: 页面滚动

        监听用户滑动页面事件。
        参数为 Object，包含以下字段：

      onShareAppMessage: 用户转发
        只有定义了此事件处理函数，右上角菜单才会显示“转发”按钮
        用户点击转发按钮的时候会调用
        此事件需要 return 一个 Object，用于自定义转发内容
        title:"转发标题"
        path:"转发路径"

        示例代码
        ```
        Page({
          onShareAppMessage: function () {
            return {
              title: '自定义转发标题',
              path: '/page/user?id=123'
            }
          }
        })
        ```

目录结构如下
  components  //组件集合
  filter      //过滤器集合
  images      //图片集合
  pages       //页面集合
  utils       //工具集合
