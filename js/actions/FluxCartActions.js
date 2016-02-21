var AppDispatcher = require('../dispatcher/AppDispatcher');
var FluxCartConstants = require('../constants/FluxCartConstants');

var FluxCartActions= {
    receiveProduct: function(data){
        AppDispatcher.handleAction({
            actionType: FluxCartConstants.RECEIVE_DATA,
            data: data
        })
    },

    selectProduct: function(index){
        App.Dispatcher.handleAction({
            actionType: FluxCartConstants.SELECT_PRODUCT, //TODO: should I create a constant for this
            data: index
        })
    },

};

module.exports = FluxCartActions;