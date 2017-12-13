import {
  push
} from 'react-router-redux'


export default function callAPIMiddleware({
  dispatch,
  getState
}) {
  return function (next) {
    return function (action) {
      const {
        types,
        callType = 'GET',
        shouldCallAPI = () => true,
        api,
        data = {},
        successFn = () => {},
        failureFn = () => {}
      } = action
      let {
        body
      } = action
      const state = getState()
      if (!types) {
        // 普通 action：传递
        return next(action)
      }

      if (!Array.isArray(types) ||
        types.length !== 3 || !types.every(type => typeof type === 'string')
      ) {
        throw new Error('Expected an array of three string types.')
      }

      if (!shouldCallAPI(state)) {
        return
      }

      // const [apiRequestType, apiSuccessType, apiFailureType] = ['API_REQUEST', 'API_SUCCESS', 'API_FAILURE']
      const [requestType, successType, failureType] = types

      // 触发自定义事件开始
      dispatch({
        type: requestType,
        payload: body,
        data
      })

      let fetching
      if (callType === 'post') {
        fetching = fetch(api, {
          method: 'post',
          credentials: 'include',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(body)
        })
      } else {
        const toString = Object.keys(body).map(function (key) {
          return encodeURIComponent(key) + '=' + encodeURIComponent(body[key])
        }).join('&')
        fetching = fetch(`${api}?${toString}`, {
          method: 'get',
          credentials: 'include',
          headers: {
            'Accept': 'application/json'
          }
        })
      }
      return fetching.then(res => res.json())
        .then(res => {
          switch (res.code) {
            case -3:
              notification.error({
                message: '错误提示',
                description: res.msg
              })
              return Promise.reject(res)
            case -2:
              // session 失效，重新登录，需要重定向到 税友
              // TODO 跳转到税友登录页面
              // if (process.env.NODE_ENV === 'api' || process.env.NODE_ENV === 'development' ) {
              // localStore.set('openLogin', {
              //   loginFormOpen: true
              // })
              // localStore.remove('userInfo')
              // dispatch(push('/home'))
              // // }
              // notification.error({
              //   message: '错误提示',
              //   description: '登录超时，请重新登录'
              // })
              // dispatch({
              //   type: failureType,
              //   data: data,
              //   payload: {
              //     ...res
              //   }
              // })
              return Promise.reject(res)
            case -1:
              // 请求失败
              // dispatch(showToast(res.msg))
              notification.error({
                message: '错误提示',
                description: res.msg
              })
              return Promise.reject(res)
            case 0:
              // 请求成功

              return Promise.resolve(res)
              // case 1:
              //   // 请求成功，需要重定向
              //   dispatch(push(redirect[res.redirect]))
              // return Promise.resolve(res)
            default:
              return Promise.resolve(res)
          }
        })
        .then(
          res => {
            dispatch({
              type: successType,
              data: data,
              payload: {
                ...res
              }
            })
            successFn(dispatch, res)
            return Promise.resolve(res)
          },
          err => {
            dispatch({
              type: failureType,
              data: data,
              payload: {
                ...err
              }
            })
            failureFn(dispatch, err)
            // notification.error({
            //   message: '错误提示',
            //   description: '请求超时，请检查网络环境'
            // })
            return Promise.reject(err)
          }
        )
    }
  }
}