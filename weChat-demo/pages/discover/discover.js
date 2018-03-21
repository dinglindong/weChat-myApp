// pages/discover/discover.js
const comm = require('../../utils/util.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    images: [
      '/images/discover/entrance1.png',
      '/images/discover/entrance2.png',
      '/images/discover/entrance3.png',
      '/images/discover/entrance4.png',
      '/images/discover/entrance5.png',
      '/images/discover/entrance8.png',
      '/images/discover/entrance1.png',
      '/images/discover/entrance2.png',
      '/images/discover/entrance3.png',
      '/images/discover/entrance4.png',
      '/images/discover/entrance5.png',
      '/images/discover/entrance8.png',
    ],
    data_list: [
      {
        "isFollow": "",
        "resourceNum": "",
        "picUrl": "https://img04.allinmd.cn/activity/20170830/1503993373800.jpg",
        "itemType": "3",
        "state": 3,
        "itemId": "1503993373800",
        "content": "",
        "recommendTime": "1517380603687",
        "catalogNum": "",
        "browseNum": "",
        "isCollection": "",
        "itemGroup": "",
        "recommendDate": "2018-01-31 14:36:43",
        "itemTitle": "第三届骨科规范化手术视频征集评选",
        "itemUrl": "https://m.allinmd.cn/html/m/activity/1503993373800/activity_index.html?activityId=1503993373800"
      },
      {
        "isFollow": "",
        "resourceNum": "",
        "picUrl": "https://img00.allinmd.cn/col/theme/1511485389223/1511485426645.jpg",
        "itemType": "4",
        "state": 0,
        "itemId": "1511485389223",
        "content": "",
        "recommendTime": "1515053783624",
        "catalogNum": "",
        "browseNum": "",
        "isCollection": "",
        "itemGroup": "4",
        "recommendDate": "2018-01-04 16:16:23",
        "itemTitle": "浙江大学医学院附属邵逸夫医院骨科重磅开讲",
        "itemUrl": "https://m.allinmd.cn/html/m/theme/1511485389223/theme_index.html"
      },
      {
        "isFollow": 0,
        "resourceNum": "",
        "picUrl": "https://img00.allinmd.cn/col/special/image/20171127/1511793531302.png",
        "itemType": "1",
        "state": 0,
        "itemId": "1511776480757",
        "content": "菁英课堂是唯医重磅推出的特色栏目，自开办以来， 邀请了60余位菁英讲师授课，遍及30多家医院， 以专家最擅长的专业知识，共享核心资源，分享多年临床经验。",
        "recommendTime": "1515053722163",
        "catalogNum": "",
        "browseNum": "",
        "isCollection": "",
        "itemGroup": "汇骨科菁英聚天下智慧",
        "recommendDate": "2018-01-04 16:15:22",
        "itemTitle": "菁英课堂",
        "itemUrl": ""
      },
      {
        "isFollow": 0,
        "resourceNum": "",
        "picUrl": "https://img00.allinmd.cn/col/special/image/20171129/1511927187814.png",
        "itemType": "1",
        "state": 0,
        "itemId": "1509082556781",
        "content": "骨科大讲堂是唯医倾力打造的特色品牌栏目，邀请骨科权威专家授课，内容紧追前沿骨科技术热点，多年临床经验悉数分享，是骨科医生的临床秘籍。",
        "recommendTime": "1515053706577",
        "catalogNum": "",
        "browseNum": "",
        "isCollection": "",
        "itemGroup": "骨科医生进阶课堂",
        "recommendDate": "2018-01-04 16:15:06",
        "itemTitle": "骨课大讲堂",
        "itemUrl": ""
      },
      {
        "isFollow": "",
        "resourceNum": 20,
        "picUrl": "http://img04.allinmd.cn/series/attachment/2017/10/19/1508384202430.jpg",
        "itemType": "2",
        "state": 0,
        "itemId": "1499757578112",
        "content": "",
        "recommendTime": "1513315492679",
        "catalogNum": "6",
        "browseNum": "37424",
        "isCollection": "0",
        "itemGroup": "关节",
        "recommendDate": "2017-12-15 13:24:52",
        "itemTitle": "初次全髋关节置换术",
        "itemUrl": ""
      },
      {
        "isFollow": "",
        "resourceNum": 29,
        "picUrl": "http://img04.allinmd.cn/series/attachment/2017/10/19/1508384709218.jpg",
        "itemType": "2",
        "state": 0,
        "itemId": "1499765377977",
        "content": "",
        "recommendTime": "1513315479399",
        "catalogNum": "6",
        "browseNum": "45461",
        "isCollection": "0",
        "itemGroup": "脊柱",
        "recommendDate": "2017-12-15 13:24:39",
        "itemTitle": "脊柱创伤",
        "itemUrl": ""
      },
      {
        "isFollow": "",
        "resourceNum": 22,
        "picUrl": "http://img04.allinmd.cn/series/attachment/2017/10/19/1508384701675.jpg",
        "itemType": "2",
        "state": 0,
        "itemId": "1499765155982",
        "content": "",
        "recommendTime": "1513315475490",
        "catalogNum": "7",
        "browseNum": "37258",
        "isCollection": "0",
        "itemGroup": "脊柱",
        "recommendDate": "2017-12-15 13:24:35",
        "itemTitle": "退变性脊柱疾病",
        "itemUrl": ""
      },
      {
        "isFollow": "",
        "resourceNum": 7,
        "picUrl": "http://img04.allinmd.cn/series/attachment/2017/10/19/1508384692634.jpg",
        "itemType": "2",
        "state": 0,
        "itemId": "1499765057699",
        "content": "",
        "recommendTime": "1511507222368",
        "catalogNum": "5",
        "browseNum": "70519",
        "isCollection": "0",
        "itemGroup": "脊柱",
        "recommendDate": "2017-11-24 15:07:02",
        "itemTitle": "脊柱外科学基础",
        "itemUrl": ""
      },
      {
        "isFollow": "",
        "resourceNum": 32,
        "picUrl": "http://img04.allinmd.cn/series/attachment/2017/10/19/1508384281193.jpg",
        "itemType": "2",
        "state": 0,
        "itemId": "1499761516768",
        "content": "",
        "recommendTime": "1511507176361",
        "catalogNum": "8",
        "browseNum": "53033",
        "isCollection": "0",
        "itemGroup": "关节",
        "recommendDate": "2017-11-24 15:06:16",
        "itemTitle": "髋关节置换微创技术",
        "itemUrl": ""
      },
      {
        "isFollow": "",
        "resourceNum": 21,
        "picUrl": "http://img04.allinmd.cn/series/attachment/2017/10/19/1508385125958.jpg",
        "itemType": "2",
        "state": 0,
        "itemId": "1501652601016",
        "content": "",
        "recommendTime": "1511507140614",
        "catalogNum": "5",
        "browseNum": "103821",
        "isCollection": "0",
        "itemGroup": "创伤",
        "recommendDate": "2017-11-24 15:05:40",
        "itemTitle": "踝关节骨折",
        "itemUrl": ""
      }
    ],
    indicatorDots: true,
    indicatorColor: 'rgba(255, 0, 0, .3)',
    autoplay: true,
    interval: 5000,
    duration: 1000
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(comm.formatTime(new Date));
    //options可以获取当前页面的url里面带的参数
    // console.log(options);
    //获取当前页面内容
    // console.log(getCurrentPages());
    
    // wx.showModal({
    //   title: '提示',
    //   content: '这是一个模态弹窗',
    //   success: function (res) {
    //     if (res.confirm) {
    //       console.log('用户点击确定')
    //     } else if (res.cancel) {
    //       console.log('用户点击取消')
    //     }
    //   }
    // })
    // wx.showToast({
    //   title: 'aaaa成功',
    //   icon: 'none',
    //   duration: 2000,
    //   mask:false
    // })
    this.loading();
  },
  loading(){
    wx.showToast({
      title: '加载中',
      icon: 'loading',
      mask: false
    });
     wx.showToast({
      title: '成功',
      icon: 'success',
      duration: 2000,
      mask:false
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
    wx.showToast({
      title: '下拉加载中',
      icon: 'loading',
      mask: false
    });
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    wx.showToast({
      title: '滚动加载中',
      icon: 'loading',
      mask: false
    });
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})