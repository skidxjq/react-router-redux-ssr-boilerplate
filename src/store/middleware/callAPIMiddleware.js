/**
 * Created by hzyuanqi1 on 2016/9/21.
 */
// import { hideLoading, showLoading, showToast } from '../actions/ui.js'
// import url from '../../config/url.js'
// import uri from '../../utils/uri'
import {
  push
} from 'react-router-redux'

/* global fetch */
// let prevScope = LogAction.scope
export default ({
  dispatch,
  getState
}) => {
  return next => action => {
    if (!action) return false
    const {
      types,
      api,
      callType,
      meta,
      body,
      shouldCallAPI
    } = action
    const state = getState()
    const callTypeList = ['get', 'post']
    if (!api) {
      return next(action)
    }
    // LogAction.setScope('APICall')
    if (types && !(types.start && types.success && types.failure)) {
      throw new Error('Expected types has start && success && failure keys.')
    }
    if (callTypeList.indexOf(callType) === -1) {
      throw new Error(`API callType Must be one of ${callTypeList}`)
    }

    const {
      start,
      success,
      failure
    } = types
    if (!shouldCallAPI(state)) {
      return false
    }

    dispatch({
      type: start,
      payload: {
        ...body
      },
      meta
    })

    // 所有请求接口都带上来源信息
    const bodyWithSource = body

    // 删除未定义的字段
    Object.keys(bodyWithSource).forEach((v) => {
      typeof bodyWithSource[v] === 'undefined' && delete bodyWithSource[v]
    })

    const mapCallTypeToFetch = {
      post: () => fetch(api, {
        method: 'post',
        // credentials 设置为每次请求都带上 cookie
        credentials: 'include',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(bodyWithSource)
      }),
      get: () => {
        const toString = Object.keys(bodyWithSource).map(function (key, index) {
          return encodeURIComponent(key) + '=' + encodeURIComponent(bodyWithSource[key])
        }).join('&')
        return fetch(`${api}?${toString}`, {
          method: 'get',
          headers: {
            'Accept': 'application/json'
          }
        })
      }
    }
    const fetching = mapCallTypeToFetch[callType]()
    // let loadingTimer = setTimeout(() => {
    //   dispatch(showLoading())
    // }, 800)
    // let loadingTimeOutTimer = setTimeout(() => {
    //   getState().ui.loading.show && dispatch(hideLoading())
    //   dispatch(showToast('网络加载超时，请重试":))
    //   throw new Error(`${api} 调用出错`)
    // }, 4000)

    return fetching.then(res => {
        // clearTimeout(loadingTimer)
        // try {
        //   getState().ui.loading.show && dispatch(hideLoading())
        // } catch (err) {
        //   console.error(err)
        // }
        // clearTimeout(loadingTimeOutTimer)
        if (res.ok) {
          try {
            return res.json()
          } catch (err) {
            throw new Error(err)
          }
        } else {
          // dispatch(showToast('请求出错'))
          return Promise.reject(res.text())
        }
      })
      .then(res => {
        dispatch({
          type: success,
          meta,
          payload: {
            ...res.data
          }
        })
        // LogAction.setScope(prevScope)
        return Promise.resolve(res)
      })
      .catch(err => {
        // getState().ui.loading.show && dispatch(hideLoading())
        // LogAction.error('Failed', `接口请求出错,api: ${api},callType: ${callType},body: ${JSON.stringify(body)},res: ${err} || ${JSON.stringify(err)}`)
        // LogAction.setScope(prevScope)
        return Promise.reject(`接口请求出错,api: ${api},callType: ${callType},body: ${JSON.stringify(body)},res: ${err} || ${JSON.stringify(err)}`)
      })

  }
}