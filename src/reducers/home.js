const initialState = getInitialState()
export default function (state = initialState, action) {
  const type = action.type
  const payload = action.payload
  const meta = action.meta
  switch (type) {
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