const routes = module.exports = require('next-routes')()

// se definen rutas a usar
routes
  .add('index', '/')
  .add('character', '/character/:player/:character', 'character')
