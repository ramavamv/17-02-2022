const EventEmitter = require('events');

class Restaurant extends EventEmitter {}
const restaurant = new Restaurant();

restaurant.on('pedido', pedido => {
  console.log('[RESTAURANT] pedido recebido!', pedido.detalhes);
});


module.exports = restaurant;