import axios from 'axios';
import { API_URL } from '../api-config';
//import { useHistory } from 'react-router-dom';
import store from './store';


//const history = useHistory();
/*export const login = (user) => {
    return axios.post(API_URL + '/users/login', user) 
        .then(res => {
            localStorage.setItem('authToken', res.data.token) // guardamos el token en el localStorage
            store.dispatch({ // dispatch ejecuta reducer
                type: 'LOGIN',
                payload: res.data.user
            });
           
        })
        
}*/

export const login = async (user) => {
    const res = await axios.post(API_URL + '/users/login', user) 
        localStorage.setItem('authToken', res.data.token) // guardamos el token en el localStorage
        store.dispatch({ // dispatch ejecuta reducer
            type: 'LOGIN',
            payload: res.data.user
        });
}

export const addCart = (product) => {

    store.dispatch({
        type:'ADD_CART',
        payload:product
    })
}

export const clearCart = () => {
    store.dispatch({
        type: 'CLEAN_CART'
    })
}

export const logout = () => {

}