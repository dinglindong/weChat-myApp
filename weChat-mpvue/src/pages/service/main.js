/**
 * Create By DingLindong on 2018/3/22
 */
import Vue from 'vue'
import App from './index'

const app = new Vue(App);
app.$mount();

export default{
  config: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'CAOS2018客服',
    navigationBarTextStyle: 'black',
    disableScroll:true
  }
}
