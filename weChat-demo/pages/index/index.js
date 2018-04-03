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
    //可以获取当前页面的路径
    console.log(this.route);
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
  //监听下拉刷新函数
  onPullDownRefresh: function () {
    console.log('监听用户下拉动作可以吗？');
    this.setData({
      motto: '下拉完成'
    })
  },
  //监听上滑加载数据函数
  onReachBottom: function () {
    console.log('上拉触底事件的处理函数可以吗？');
    this.setData({
      motto: '上滑完成'
    })
  },
  //开启左上角分享功能
  onShareAppMessage: function () {
    return {
      "title":"分享转发666",
      "path": "pages/discover/discover"
    }
  },
  //监听页面滚动
  onPageScroll: function () {
    console.log('滚动触发事件的处理函数可以吗？');
  },
  onTabItemTap(item) {
    // console.log('该问题暂时无法解决，无报错无展示');
    // console.log(item.index)
    // console.log(item.pagePath)
    // console.log(item.text)
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
  },
  video(){
    wx.navigateTo({
      url: '../multimedia/multimedia',
    })
  },
  audio(){
    wx.navigateTo({
      url: '../audio/audio',
    })
  }

})
