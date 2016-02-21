var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var FluxCartConstants = require('../constants/FluxCartConstants');
var _ = require('underscore');

//Define initial data
var _product = {}, _selected = null;

//mothod to load product data from mock API
function loadProductData(data){
    _product = data[0];
    _selected = data[0].variants[0];
}

//method to set the currently selected product variation
function setSelected(index){
    _selected = product.variants[index];
}

var ProductStore = _.extend({}, EventEmitter.prototype, {});
