import {
  GetRedditNewsActionList
} from './RedditAction'



const initialState = {
  isFetching: false,
  category: 'nodejs',
  list: [{
    data: {
      title: '暂无数据'
    }
  }]
}

export default function (state = initialState, action) {
  const {
    type,
    payload,
    meta
  } = action

  switch (type) {
    case GetRedditNewsActionList.start:
      return {
        ...state,
        isFetching: true
      }
    case GetRedditNewsActionList.success:
      return {
        ...state,
        category: meta.category,
        list: payload.children,
        isFetching: false
      }
    case GetRedditNewsActionList.failure:
      return {
        ...staet,
        isFetching: false
      }
    default:
      return state
  }
}