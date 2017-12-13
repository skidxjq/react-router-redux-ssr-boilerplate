// import fetch from 'node-fetch'
const fetch = require('node-fetch')
const HOME_LIST_URL = `http://localhost:55555/m/news/list`
async function getNewsList(req, url = HOME_LIST_URL) {
  const response = await fetch(url)
  const responseData = await response.json()
  // json
  // return json.data.list
  return responseData.data.list
}

// const result = getNewsList().then(obj => console.log(obj))
module.exports = {
  getNewsList
}