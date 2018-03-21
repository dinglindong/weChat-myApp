// pages/details/detalis.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    strHtml:'',
    hidden:'',
    dataList:[
      "http://img1.imgtn.bdimg.com/it/u=4253527623,1282030340&fm=27&gp=0.jpg",
      "http://img1.imgtn.bdimg.com/it/u=1359502252,667448733&fm=27&gp=0.jpg",
      "http://img1.imgtn.bdimg.com/it/u=908224686,2536941373&fm=27&gp=0.jpg",
    ],
    scale:'',
    hide:'',
    message:'查看我的头像位置',
    falg:true,
    animationData: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */

  onLoad: function (options) {
    this.init();
    this.canvas(); 
  },
  init() {
    var text = "正在开启冬奥“北京周期”"  //预定文字
    var delay = 5;
    var i = 0
    var self = this;
    var clear = '';
    function printer() {
      self.setData({
        strHtml: text.slice(0, i++)
      })
      if (i > text.length) {
        clearTimeout(clear);
        self.isHide();
      } else {
        clear = setTimeout(printer, delay * 100);
      }
    }
    printer()
  },
  click(){
    const ctx = wx.createCanvasContext('myCanvas')
    var leX = 20,
      leY = 20;
    // var timer = setInterval(function(){

    //   ctx.drawImage("http://img1.imgtn.bdimg.com/it/u=4253527623,1282030340&fm=27&gp=0.jpg", 280, 10, leX, leY)
    //   ctx.draw()
    //   leX += 10;
    //   leY += 10;
    //   if(leX >60){
    //     clearInterval(timer)
    //   }
    // },100)
    var animation = wx.createAnimation({
      duration: 1000,
      timingFunction: 'ease',
    })
    this.animation = animation
    animation.scale(2, 2).translate(-140, 80).step()

    this.setData({
      animationData: animation.export()
    })

    // if(this.data.falg){
    //   this.setData({
    //     hide: true
    //   })
    //   this.setData({
    //     scale: 'transform:scale(2,2.5)',
    //     message: '会看全景',
    //     falg:false
    //   })
    //   this.setData({
    //     hide: false
    //   })
  
    // }else{
    //   this.setData({
    //     hide: true
    //   })
    //   this.setData({
    //     scale: 'transform:scale(1,1)',
    //     message: '查看我的头像位置',
    //     falg: true
    //   })
    //   this.setData({
    //     hide: false
    //   })
    // }
    
   
  },
  canvas(){
    const ctx = wx.createCanvasContext('myCanvas')
    for(var i=0;i<300;i+=20){
      for(var j=0;j<200;j+=20){ 
        ctx.drawImage("http://img1.imgtn.bdimg.com/it/u=908224686,2536941373&fm=27&gp=0.jpg", i, j, 20, 20)
      }
    }
     
      ctx.drawImage("http://img1.imgtn.bdimg.com/it/u=4253527623,1282030340&fm=27&gp=0.jpg", 280, 10, 20, 20)
    
      ctx.draw()
    ///////////////////

    // //使用wx.createContext获取绘图上下文context
    // var context = wx.createContext();
    // context.setStrokeStyle("#00ff00");
    // context.setLineWidth(5);
    // context.rect(0, 0, 200, 200);
    // context.stroke()
    // context.setStrokeStyle("#ff0000");
    // context.setLineWidth(2)
    // context.moveTo(160, 100)
    // context.arc(100, 100, 60, 0, 2 * Math.PI, true);
    // context.moveTo(140, 100);
    // context.arc(100, 100, 40, 0, Math.PI, false);
    // context.moveTo(85, 80);
    // context.arc(80, 80, 5, 0, 2 * Math.PI, true);
    // context.moveTo(125, 80);
    // context.arc(120, 80, 5, 0, 2 * Math.PI, true);
    // context.stroke();

    // //调用wx.drawCanvas，通过canvasId指定在哪张画布上绘制，通过actions指定绘制行为
    // wx.drawCanvas({
    //   canvasId: 'myCanvas',
    //   actions: context.getActions() //获取绘图动作数组
    // });
  },
  isHide(){
    let t = this;
    setInterval(function(){
      t.setData({
        hidden:true
      })
    },1000)
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