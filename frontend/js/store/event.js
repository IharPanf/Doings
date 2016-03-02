var assign = require('object-assign');
var types = require('../constants/ActionTypes');
var createStore = require('redux').createStore;

var initialState = [{
    text: 'Use Redux',
    marked: false,
    id: 0
}];

function configureStore(state, action) {
    state = state || initialState;
    switch (action.type) {
        case types.ADD_NEW:
            console.log('ADD_NEW');
            return [{
                id: (state.length === 0) ? 0 : state[0].id + 1,
                marked: false,
                text: action.text
            }].concat(state);

        case types.DELETE_EVENT:
            console.log('DELETE_EVENT');
            return {};

        case types.EDIT_EVENT:
            console.log('EDIT_EVENT');
            return state.map(function (event) {
                return event.id === action.id ? assign({}, todo, {text: action.text}) : event
            });
        default:
            return state;
    }
}

module.exports = createStore(configureStore, initialState);
