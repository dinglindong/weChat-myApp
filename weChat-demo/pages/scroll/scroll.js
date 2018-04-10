//js
Page({
  data: {
    lastX: 0,     //滑动开始x轴位置
    lastY: 0,     //滑动开始y轴位置
    text: "客服",
    currentGesture: 0, //标识手势
    isShow:false
  },
  //滑动移动事件
  handletouchmove: function (event) {
    console.log('触发移动事件')
    var currentX = event.touches[0].pageX
    var currentY = event.touches[0].pageY
    var tx = currentX - this.data.lastX
    var ty = currentY - this.data.lastY
    var text = ""
    //左右方向滑动
    if (Math.abs(tx) > Math.abs(ty)) {
      if (tx < 0){

      }
        //text = "向左滑动"
      else if (tx > 0){}
        //text = "向右滑动"
    }
    //上下方向滑动
    else {
      if (ty < 0){text = "我隐藏了UP"
        this.setData({
          isShow: true
        })
      }  else if (ty > 0){
        text = "我隐藏了DWON"
        this.setData({
          isShow: true
        })
      }
       
    }

    //将当前坐标进行保存以进行下一次计算
    this.data.lastX = currentX
    this.data.lastY = currentY
    this.setData({
      text: text,
    });
  },

  //滑动开始事件
  handletouchtart: function (event) {
    console.log('开始滑动')
    this.data.lastX = event.touches[0].pageX
    this.data.lastY = event.touches[0].pageY
  },
  //滑动结束事件
  handletouchend: function (event) {
    console.log('结束滑动')
    this.data.currentGesture = 0;
    this.setData({
      isShow: false
    });
  },
})