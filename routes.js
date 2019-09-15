const routes = module.exports = require('next-routes')()

routes
  .add('index', '/')
  .add('player', '/player/:player', 'player')
//     .add('benefit_category', '/:category(gastronomia|turismo|ropa-y-accesorios|salud-y-bienestar|entretenimiento|hogar-y-servicios|buscar)', 'benefits/list')
//     .add('login', '/login', 'auth/login')
//     .add('register', '/zona-usuario/crear', 'auth/register')
//     .add('recovery', '/usuario/restablecer-contrasena', 'auth/recovery')
//     .add('confirm_recovery', '/zona-usuario/cambiar-contrasena/:user_hash', 'auth/confirmRecovery')
//     .add('welcome', '/zona-usuario/bienvenido/:user_hash', 'auth/welcome')
//     .add('account', '/user/account', 'me/account')
//     .add('about', '/quienes-somos', 'static/about')
//     .add('faq', '/preguntas-frecuentes', 'static/faq')
//     .add('allies', '/aliados', 'static/allies')
//     .add('privacy', '/aviso-de-privacidad', 'static/privacy')
//     .add('contactus', '/contactenos', 'contactus/contactus')
// /* .add('channel', '/:slug/:id', 'channel')
// .add('podcast', '/:slugChannel.:idChannel/:slug.:id', 'podcast') */
