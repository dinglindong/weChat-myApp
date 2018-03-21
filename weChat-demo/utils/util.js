/*
* author： Wei xin
* feature： 获取格式化的时间用 util.formatTime(new Date)
*
*/
const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

/*----------------------------------------------------------------------------------------------------------------------------------*/

/*
* author： Lindong Ding
* feature： 获取当前页面的url和带参数的url,微信给我们暴露的getCurrentPages对象util.getCurrentPages()
*
*/

/*获取当前页url*/
function getCurrentPageUrl() {
  var pages = getCurrentPages()    //获取加载的页面
  var currentPage = pages[pages.length - 1]    //获取当前页面的对象
  var url = currentPage.route    //当前页面url
  return url
}

/*获取当前页带参数的url*/
function getCurrentPageUrlWithArgs() {
  var pages = getCurrentPages()    //获取加载的页面
  var currentPage = pages[pages.length - 1]    //获取当前页面的对象
  var url = currentPage.route    //当前页面url
  var options = currentPage.options    //如果要获取url中所带的参数可以查看options

  //拼接url的参数
  var urlWithArgs = url + '?'
  for (var key in options) {
    var value = options[key]
    urlWithArgs += key + '=' + value + '&'
  }
  urlWithArgs = urlWithArgs.substring(0, urlWithArgs.length - 1)

  return urlWithArgs
}

/*----------------------------------------------------------------------------------------------------------------------------------*/

/* 将超出长度的字符串加。。。
* @param str
* @param len
* @returns { string }
*/
function getStrLen(str, len) {
  if (typeof str != 'undefined') {
    var strlen = 0,
      s = ''
    for (var i = 0; i < str.length; i++) {
      s = s + str.charAt(i)
      if (str.charCodeAt(i) > 128) {
        strlen = strlen + 2
        if (strlen >= len) {
          return s.substring(0, s.length - 1) + '...'
        }
      } else {
        strlen = strlen + 1
        if (strlen >= len) {
          return s.substring(0, s.length - 2) + '...'
        }
      }
    }
    return s
  }
}

module.exports = {
  formatTime: formatTime,
  getCurrentPageUrl: getCurrentPageUrl,
  getCurrentPageUrlWithArgs: getCurrentPageUrlWithArgs,
  getStrLen: getStrLen
}
