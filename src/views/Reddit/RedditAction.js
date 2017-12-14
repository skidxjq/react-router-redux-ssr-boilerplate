import initAPI from '../../utils/initAPI'
import createAsyncAction from '../../utils/createAsyncAction'

function REDDIT_URL(category) {
  return `https://www.reddit.com/r/${category}.json`
  // return `/outer/www.reddit.com/r/${category}.json`
}
export const GetRedditNewsActionList = createAsyncAction('REDDIT:GET_REDDIT_NEWS')
export function getReddietNews(category) {
  return initAPI(GetRedditNewsActionList, REDDIT_URL(category), 'get', {
    body: '',
    meta: {
      category
    }
  })
};