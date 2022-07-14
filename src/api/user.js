import request from '@/utils/request'
/**
 *
 * @param {登录页面} data指手机号与密码
 * @returns
 */
export function login (data) {
  return request({
    url: '/sys/login',
    method: 'post',
    data
  })
}
/**
 *
 * @returns 获取用户信息
 */
export function getInfo () {
  return request({
    url: '/sys/profile',
    method: 'post'

  })
}

/** *
 *
 * 获取用户的基本信息  现在写它 完全是为了显示头像
 * **/
export function getUserDetailById (id) {
  return request({
    url: `/sys/user/${id}`
  })
}

/**
 *
 * @returns 登出信息
 */
export function logout () {
  return request({
    url: '/vue-admin-template/user/logout',
    method: 'post'
  })
}
