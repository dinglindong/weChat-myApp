//index.js
//获取应用实例
const app = getApp();

Page({

  /**
 * 生命周期函数--监听页面初次渲染完成
 */
  onReady: function () {
    //获得dialog组件
    this.dialog = this.selectComponent("#dialog");
  },

  onLoad: function (options) {
    var pages = getCurrentPages()    //获取加载的页面

    var currentPage = pages[pages.length-1]    //获取当前页面的对象

    var url = currentPage.route    //当前页面url

    var options = currentPage.options    //如果要获取url中所带的参数可以查看options
    
    console.log(currentPage);
  },
  showDialog() {
    this.dialog.showDialog();
  },

  //取消事件
  _cancelEvent() {
    console.log('你点击了取消');
    this.dialog.hideDialog();
  },
  //确认事件
  _confirmEvent() {
    console.log('你点击了确定');
    this.dialog.hideDialog();
  },
  onShareAppMessage: function () {
    return {
      "title": "分享转发666",
      "path": "pages/discover/discover"
    }
    // console.log('只有定义了该函数右上角才有"转发"按钮样式');
    // 方法内返回一个Object{title:'',path:''}
  }
})