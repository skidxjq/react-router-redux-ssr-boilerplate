switch (process.env.NODE_ENV) {
  case 'production':
    module.exports = require('./_prod.js')
    break
  case 'api':
  case 'development':
    module.exports = require('./_dev.js')
    break
  default:
    break
}