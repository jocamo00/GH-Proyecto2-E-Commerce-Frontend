import axios from 'axios';
import { API_URL } from '../api-config';
//import { useHistory } from 'react-router-dom';
import store from './store';


//const history = useHistory();
export const login = (user) => {
    return axios.post(API_URL + '/users/login', user) 
        .then(res => {
            localStorage.setItem('authToken', res.data.token) // guardamos el token en el localStorage
            store.dispatch({ // dispatch ejecuta reducer
                type: 'LOGIN',
                payload: res.data.user
            });
            //history.push('/') // redireccionamiento usando Hooks
        })
        
}