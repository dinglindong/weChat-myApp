// pages/demo_view/event/event.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },
  tapName(event){
    console.log(event);
  },
  handleTap1(event){
    console.log('最外层');
    console.log(event.type);

  },
  handleTap2(){
    console.log('中间层');
  },
  handleTap3(){
    console.log('内里层');
  },
  bindViewTap(event){
    console.log(event);
    console.log(event.currentTarget.dataset.alphaBeta);
    console.log(event.currentTarget.dataset.alphabeta);
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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