const initState = {
  toast: {
    show: false,
    content: '请求出错',
    icon: '',
    timeout: 3000
  },
  loading: {
    show: false,
    content: '加载中',
    icon: 'loading',
    timeout: -1
  },
  notification: {
    show: false,
    closable: false,
    content: ''
  }
}

export default function (state = initState, action) {
  const type = action.type
  const payload = action.payload
  const meta = action.meta
  switch (type) {

    default: return state
  }
}