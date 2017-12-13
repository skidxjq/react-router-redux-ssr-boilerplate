/**
 * 生成异步操作所需要的三个 Action
 * @export
 * @param {string} prefixActionType Action 的前戳
 * @returns {object} 三个Action，第一个为起始操作Action，第二个为成功，第三个为失败
 */
export default function (prefixActionType) {
  const start = `${prefixActionType}:start`
  const success = `${prefixActionType}:success`
  const failure = `${prefixActionType}:failure`
  return {start, success, failure}
}
