
// 自定义指令
export const imageError = {
  // 此方法为直接插入dom中
  // inserted (el, binding) {
  //   el.url = 'http://ihrm.itheima.net/static/img/head.b6c3427d.jpg'
  // },
  // 数据更新的时候就执行
  update (el, binding) {
    // el.src = binding.value
    el.onerror = function () {
      this.src = 'http://ihrm.itheima.net/static/img/head.b6c3427d.jpg'
    }
  }
}
