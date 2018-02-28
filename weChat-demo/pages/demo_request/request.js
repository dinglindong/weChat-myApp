// pages/demo_request/request.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    src:'',
    imgHeight:'',
    imgWidth:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },
  request(){
    wx.request({
      url: 'https://i408jnck.qcloud.la', //仅为示例，并非真实的接口地址
      data: {
        x: '1',
        y: '2'
      },
      method:'POST',
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        console.log('请求成功了')
      }
    })
  },
  mapShow(){
    wx.getLocation({
      type: 'gcj02',
      altitude:true,
      success: function (res) {
        console.log(res.accuracy);
        var latitude = res.latitude
        var longitude = res.longitude
        var speed = res.speed
        var accuracy = res.accuracy
        wx.openLocation({
          latitude: latitude,
          longitude: longitude,
          scale: 28
        })
      }
    });
    // wx.chooseLocation({
    //   success:function(res){
    //     console.log(res)
    //   }
    // })
 
  },
  openPhoto(){
    let t = this;
    wx.chooseImage({
      count: 1, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        var tempFilePaths = res.tempFilePaths
        // console.log(res,11111111111111);
        t.setData({
          src: tempFilePaths
        });
      }
    })
  },
  vuiewPhoto(){
    let t = this;
    wx.previewImage({
      current: 'https://www.baidu.com/img/bd_logo1.png', // 当前显示图片的http链接
      urls: ['https://gss1.bdstatic.com/9vo3dSag_xI4khGkpoWK1HF6hhy/baike/w%3D268%3Bg%3D0/sign=e9449e382d9759ee4a5067cd8ac0242b/94cad1c8a786c9179e80a80cc23d70cf3bc75700.jpg', 'https://www.baidu.com/img/bd_logo1.png', 'https://gss1.bdstatic.com/9vo3dSag_xI4khGkpoWK1HF6hhy/baike/whfpf%3D268%2C152%2C50/sign=aaa5e59e084f78f0805ec9b31f0c3863/9d82d158ccbf6c81d1425722b73eb13532fa4086.jpg','https://baikebcs.bdimg.com/adpic/reci_2018_1_270x150_fabu_2.jpg'] // 需要预览的图片http链接列表
    })
  },
  infoPhoto(){
    let t = this;
    wx.chooseImage({
      success: function (res) {
        t.setData({
          src: res.tempFilePaths
        });
        wx.getImageInfo({
          src: res.tempFilePaths[0],
          success: function (res) {
            t.setData({
              imgHeight: res.height,
              imgWidth: res.width
            });
            console.log(res)
          }
        })
      }
    })
  },
  savePhoto(){
    let t = this;
    wx.saveImageToPhotosAlbum({
      filePath: t.data.src[0],
        success(res) {
          console.log(res)
        }
      })
  },
  saveImg: function () {
    // wx.downloadFile({
    //   url: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
    //   success: function (res) {
    //     let path = res.tempFilePath
    //     wx.saveImageToPhotosAlbum({
    //       filePath: path,
    //       success(res) {
    //         console.log(res)
    //       },
    //       fail(res) {
    //         console.log(res)
    //       },
    //       complete(res) {
    //         console.log(res)
    //       }
    //     })
    //   }, fail: function (res) {
    //     console.log(res)
    //   }
    // })
    wx.getImageInfo({
      src: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      success: function (ret) {
        var path = ret.path;
        wx.saveImageToPhotosAlbum({
          filePath: path,
          success(result) {
            console.log(result)
          }
        })
      }
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