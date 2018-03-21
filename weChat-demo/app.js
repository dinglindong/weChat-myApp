//app.js
App({
  onLaunch: function (options) {
    // console.log(options);
    // console.log('初始化小程序执行onLaunch方法,并且只执行一次！');
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  onShow: function (options){
    // console.log(options);
    // console.log('当小程序从后台进入前台显示，会触发当前方法onShow');
  },
  onHide:function(){
    // console.log('当小程序前台进入后台，触发onHide');
  },
  onError:function(){
    // console.log('小程序脚本错误，或者调用API失败的时候触发');
  },
  globalData: {
    userInfo: null
  }
})