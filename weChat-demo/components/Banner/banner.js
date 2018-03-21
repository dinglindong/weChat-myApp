// components/Banner/banner.js
Component({
  /**
   * 组件的属性列表
   */
  externalClasses: ['my-class'],
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  properties: {
    innerText:{
      type:String,
      value:'default value',
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    someDate:{

    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    customMethod:function(){

    },
    onTap: function () {
      var myEventDetail = {a:1} // detail对象，提供给事件监听函数
      var myEventOption = {ss:222} // 触发事件的选项
      this.triggerEvent('myevent', myEventDetail, myEventOption)
    }
  }
})
