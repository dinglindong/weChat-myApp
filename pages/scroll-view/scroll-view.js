var order = ['demo1', 'demo2', 'demo3']
Page({
  data: {
    toView: 'green',
    images: ['//img50.allinmd.cn/v3/discover/entrance7.png', '//img50.allinmd.cn/v3/discover/entrance1.png', '//img50.allinmd.cn/v3/discover/entrance8.png', '//img50.allinmd.cn/v3/discover/entrance4.png', '//img50.allinmd.cn/v3/discover/entrance3.png', '//img50.allinmd.cn/v3/discover/entrance6.png','//img50.allinmd.cn/v3/discover/entrance5.png']
  },
  upper: function(e) {
    console.log(e)
  },
  lower: function(e) {
    console.log(e)
  },
  scroll: function(e) {
    console.log(e)
  },
  scrollToTop: function(e) {
    this.setAction({
      scrollTop: 0
    })
  },
  tap: function(e) {
    for (var i = 0; i < order.length; ++i) {
      if (order[i] === this.data.toView) {
        this.setData({
          toView: order[i + 1],
          scrollTop: (i + 1) * 200
        })
        break
      }
    }
  },
  tapMove: function(e) {
    this.setData({
      scrollTop: this.data.scrollTop + 10
    })
  }
})
