Page({
  data: {
    animationData: {},
    showView:true
  },
  onShow: function () {
    var animation = wx.createAnimation({
      duration: 1000,
      timingFunction: 'ease-in-out',
      delay:400,
      transformOrigin: "50% 50%",
    })
    this.animation = animation

    // animation.rotate(360).step()

    // this.setData({
    //   animationData: animation.export()
    // })

    setTimeout(function () {
      animation.translate(200).step().translateY(300).step().rotate(180).scale(2, 2).step().rotate(0).scale(0.5, 0.5).step()
      this.setData({
        animationData: animation.export()
      })
    }.bind(this), 1000)
  },
  onReady: function () {
    //获得dialog组件
    // this.dialog = document.getElementById("#dialog");
  },
  onTap() {
    this.animation.translate(0).scale(2, 2).step()
    this.setData({
      animationData: this.animation.export()
    })
  },
  onChangeShowState(){
    this.setData({
      showView:false
    });
  },
  rotateAndScale: function () {
    // 旋转同时放大
    this.animation.rotate(45).scale(2, 2).step()
    this.setData({
      animationData: this.animation.export()
    })
  },
  rotateThenScale: function () {
    // 先旋转后放大
    this.animation.rotate(45).step()
    this.animation.scale(2, 2).step()
    this.setData({
      animationData: this.animation.export()
    })
  },
  rotateAndScaleThenTranslate: function () {
    // 先旋转同时放大，然后平移
    this.animation.rotate(45).scale(2, 2).step()
    this.animation.translate(100, 100).step({ duration: 1000 })
    this.setData({
      animationData: this.animation.export()
    })
  }
})