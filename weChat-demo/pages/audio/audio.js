// audio.js
Page({
  onReady: function (e) {
    this.innerAudioContext = wx.createInnerAudioContext()
    this.innerAudioContext.autoplay = true
    this.innerAudioContext.src = 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E061FF02C31F716658E5C81F5594D561F2E88B854E81CAAB7806D5E4F103E55D33C16F3FAC506D1AB172DE8600B37E43FAD&fromtag=46'
    this.innerAudioContext.onPlay(() => {
      console.log('开始播放')
    })
   
    

    this.innerAudioContext.onError((res) => {
      console.log(res.errMsg)
      console.log(res.errCode)
    })
  },
  data: {
    src: '',
    time:''
  },
  audioPlay: function () {
    this.innerAudioContext.play()
  },
  audioPause: function () {
    console.log(1111)
    this.innerAudioContext.pause()
    this.setData({
      time: this.innerAudioContext.duration
    })
  },
  audio14: function () {
    this.innerAudioContext.seek(14)
  },
  audioStart: function () {
    this.innerAudioContext.seek(0)
  }
})