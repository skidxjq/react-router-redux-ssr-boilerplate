switch (process.env.NODE_ENV) {
  case 'development':
    module.exports = require('./config.development')
    break
  case 'production':
    module.exports = require('./config.production')
    break
  default:
    module.exports = require('./config.development')
    break
}
