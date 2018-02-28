// pages/start.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    strHtml: '',
    footer:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // this.init();
  },
  init(){
    var text = "国家主席习近平和亿万中国人民向世界发出邀请"  //预定文字
    var delay = 10;
    var i = 0
    var self = this;
    var clear = '';
    function printer() {
      self.setData({
        strHtml: text.slice(0, i++)
      })
      if (i > text.length) {
        clearTimeout(clear);
        self.videos();
      } else {
        clear = setTimeout(printer, delay * 100);
      }
    }
    printer()
  },
  videos(){
    console.log('asasas');
  },
  bindplay(){
    var flag = true;
    if(flag){
      this.setData({
        footer:true
      })
      flag = false
    }
  },
  jumpStart(){
    wx.navigateTo({
      url: '../details/detalis',
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})