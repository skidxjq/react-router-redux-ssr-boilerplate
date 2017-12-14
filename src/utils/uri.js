/* eslint-disable */
/**
 * Created by kisnows on 2016/11/22.
 */
let params = {},
  matched = [],
  uri

uri = function (key) {
  return params[key]
}

let parseSearch = function (v) {
  if (v.indexOf('?') === 0) {
    v = v.substr(1)
  }
  let search = v.split('&')

  for (let i = 0; i < search.length; i++) {
    let pair = search[i].split('=')
    if (pair[0]) {
      try {
        params[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || '')
      } catch (e) {
        params[pair[0]] = pair[1] || ''
      }
    }
  }
}

if (
  matched = location.href.match(
    new RegExp('^(https?):[/]{2}(?:([^@/:\?]+)(?::([^@/:]+))?@)?([^:/?#]+)(?:[:]([0-9]+))?([/][^?#;]*)?(?:[?]([^?#]*))?(#[^#]*)?$')
  )
) {
  uri.protocal = matched[1]
  uri.username = matched[2] || ''
  uri.password = matched[3] || ''
  uri.hostname = matched[4] || ''
  uri.port = matched[5] || ''
  uri.pathname = matched[6] || '/'
  uri.search = matched[7] || ''
  uri.hash = matched[8] || ''
  uri.origin = uri.protocal + '://' + uri.hostname
  parseSearch(uri.search)
}

export default uri
