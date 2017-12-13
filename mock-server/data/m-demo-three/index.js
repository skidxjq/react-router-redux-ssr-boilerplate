const forceRequire = require('require-reload')
const path = require('path')
const fs = require('fs')
const Interface = require('../Interface')

module.exports = class Demo extends Interface {
  constructor(...props) {
    super(...props)
  }
  /**
   * [isParamsValidate description]
   * @param  {[IncomingMessage]}  req [the request handler]
   * @return {Boolean}     [is validated or not]
   */
  isParamsValidate(req) {
    //you can add your business logical here
    //such as vaildation
    if(req.query.type){
      return true
    }
    return false
  }

  /**
   * [render ]
   * @return {[type]} the returned data be used in response
   * @desc you can call res.send and res.json etc here
   */
  render() {
    const {
      isParamsValidate,
      req,
      map,
      getData
    } = this
  
    if (isParamsValidate(req)) {
      var options = Object.keys(map.keys)
      var selected
      
      selected = map.default ? map.default : map[options[0]]
      console.log(selected)
      return getData(__dirname, selected)
    } else {
      return {
        'code': -1,
        'msg': 'there is no parameter [type]',
        'data': {}
      }
    }
  }
}