import { createStore } from "redux";
import reducer from './reducer';


const store = createStore(reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());  // llama a la extensión de la store

export default store;