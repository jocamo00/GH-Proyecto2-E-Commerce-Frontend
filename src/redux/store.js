import { createStore, applyMiddleware, compose } from "redux";
import reducer from './reducer';
import { save, load } from 'redux-localstorage-simple';


/*const store = createStore(reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());  // llama a la extensión de la store

export default store;*/

const composeEnhancers = 
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const createStoreWithMiddleware = applyMiddleware (
        save(),
)(createStore);

const store = createStoreWithMiddleware (
    reducer,
    load({
        preloadedState: {cart:[]}
    }),
    composeEnhancers(),

);

export default store;