import {
  UPDATE_HOME_NEWS
} from './HomeAction'
const initialState = getInitialState()
export default function (state = initialState, action) {
  const type = action.type
  const payload = action.payload
  const meta = action.meta
  switch (type) {
    case UPDATE_HOME_NEWS: 
      return {
        ...state,
        news: payload.news
      }  
    default: return state
  }
}

function getInitialState() {
  var isBrowser = typeof window !== 'undefined'
  if (isBrowser) {
    console.log('isBrowser')
    var HomeData = require('./home.getData')
    return {
      news: HomeData.news
    }
  }
  return {
    news: []
  }
}