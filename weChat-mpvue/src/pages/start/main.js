/**
 * Create By DingLindong on 2018/3/21
 */
import Vue from 'vue'
import App from './index'

const app = new Vue(App)
app.$mount()

export default {
  config: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: '唯小程序',
    navigationBarTextStyle: 'black',
    disableScroll:true
  }
}



