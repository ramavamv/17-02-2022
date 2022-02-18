const restaurant = require('./index-restaurant.js');


restaurant.emit('pedido', { detalhes: 'pastel' });