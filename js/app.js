var React = require('react');
var ProductData = require('./ProductData');
var CartAPI = require('./utils/CartAPI')
var FluxCartApp = require('./components/FluxCartApp.react');

// Load Mock Product Data into localStorage
ProductData.init();
CartAPI.getProductData();

React.render(
<FluxCartApp />, document.getElementById('flux-cart')
);
