//index.js
//获取应用实例
const app = getApp()
const comm = require('../../utils/comm.js');
Page({
  onMyEvent: function (e) {
    console.log(e)
  },
  data: {
    message: 'Hello MINA!',
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    text:"init data",
    num:0,
    array:[
      {
        msg:'1'
      },
      {
        msg:'2'
      },
      {
        text:'数组显示'
      },
    ],
    object:{
      text:'init Object data'
    },
    color: 'red'
  },
  //事件处理函数
 
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    // console.log(getCurrentPages()[0].route);
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  onReady: function () {
    // console.log('只读可以吗？');
    // Do something when page ready.
  },
  onShow: function () {
    // console.log('页面显示执行可以吗？');
    // Do something when page show.
  },
  onHide: function () {
    // console.log('页面隐藏执行可以吗？');
    // Do something when page hide.
  },
  onUnload: function () {
    // console.log('页面卸载可以吗？');
    // Do something when page close.
  },
  onPullDownRefresh: function () {
    console.log('监听用户下拉动作可以吗？');
    this.setData({
      motto: '下拉完成'
    })
    // Do something when pull down.
  },
  onReachBottom: function () {
    console.log('上拉触底事件的处理函数可以吗？');
    this.setData({
      motto: '上滑完成'
    })
    // Do something when page reach bottom.
  },
  onShareAppMessage: function () {
    return {
      "title":"分享转发666",
      "path": "pages/discover/discover"
    }
    // console.log('只有定义了该函数右上角才有"转发"按钮样式');
    // 方法内返回一个Object{title:'',path:''}
  },
  onPageScroll: function () {
    // console.log('滚动触发事件的处理函数可以吗？');
    // Do something when page scroll
  },
  onTabItemTap(item) {
    // console.log('该问题暂时无法解决，无报错无展示');
    // console.log(item.index)
    // console.log(item.pagePath)
    // console.log(item.text)
  },
  getUserInfo: function(e) {
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  viewTap(){
    console.log('页面自定义事件，已经执行了！');
  },
  changeNum(){
    console.log(this.data.num);
    this.data.num = 1;
    this.setData ({
      num:this.data.num
    })
  },
  changeItemInArray(){
    this.setData({
      'array[2].text': 'changed data'
    })
  },
  changeItemInObject: function () {
    this.setData({
      'object.text': 'changed data'
    });
  },
  addNewField: function () {
    this.setData({
      'newField.text': 'new data'
    })
    comm.sayHello('丁林冬');
    comm.sayGoodbye('丁林冬');
  },
  jump_view(){
    wx.navigateTo({
      url: '../demo_view/demo_view'
    })
  },
  jump_wxs(){
    wx.navigateTo({
      url: '../demo_wxs/index',
    })
  },
  jump_layer(){
    wx.navigateTo({
      url: '../demo_layer/layer',
    })
  },
  jump_rquest(){
    wx.navigateTo({
      url: '../demo_request/request',
    })
  },
  scrollPage(){
    wx.navigateTo({
      url: '../scroll-view/scroll-view',
    })
  }
})
