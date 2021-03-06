/**
 * 配置编译环境和线上环境之间的切换
 * baseUrl: 域名地址
 * routerMode: 路由模式
 * imgBaseUrl: 图片所在域名地址
 */
let baseUrl = ''
let routerMode = 'hash'
let imgBaseUrl = ''
if (process.env.NODE_ENV === 'development') {
  imgBaseUrl = '//localhost:8001'
  baseUrl = '//localhost:8001'
  // baseUrl = '//192.168.5.192:8001'
} else if (process.env.NODE_ENV === 'production') {
  baseUrl = '//elm.cangdu.org'
  imgBaseUrl = '//elm.cangdu.org/img/'
}
export {
  baseUrl,
  routerMode,
  imgBaseUrl
}
