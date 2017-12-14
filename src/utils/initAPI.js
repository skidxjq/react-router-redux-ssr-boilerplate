/**
 * 初始化接口请求
 * @param {object} types 要分发的 Action type 集合，结构 {start:'',success:'',failure:''}
 * @param {string} api 接口地址
 * @param {string} callType 请求类型，暂时只提供 get 和 post
 * @param {object} meta 要分发的 Action meta 信息
 * @param {object} body 要传递给后台的数据
 * @param {function} shouldCallAPI 决定是否真实调用接口的函数,传入的参数为整个应用的 State。
 * @returns {{typeCollection: *, api: *, callType: *, meta, body: {}, shouldCallAPI: (function(*): boolean)}}
 */
export function initAPI (types, api, callType, {
  meta,
  body = {},
  shouldCallAPI = (state) => true
} = {}) {
  return {
    types,
    api,
    callType,
    meta,
    body,
    shouldCallAPI
  }
}

export default initAPI
