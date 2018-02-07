function sayHello(name) {
  console.log('hello es5 '+name+'!')
  console.log(`Hello es6 ${name} !使用的是模板字符串`)
}
function sayGoodbye(name) {
  console.log('Goodbye es5 '+name+'!')
  console.log(`Goodbye es6 ${name} !使用的是模板字符串`)
}

module.exports = {
  sayHello,
  sayGoodbye
}