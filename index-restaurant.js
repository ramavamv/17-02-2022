const restaurant = require('./restaurant');

restaurant.emit('pedido', { detalhes: 'pastel' });
/*const EventEmitter = require('events');
require('./user');

class Restaurant extends EventEmitter {}

const restaurant = new Restaurant();

restaurant.on('pedido', pedido => {
  console.log('[RESTAURANT] pedido recebido!', pedido.detalhes);
});*/

//restaurant.emit('pedido', { detalhes: 'pastel' });

//module.exports = restaurant;