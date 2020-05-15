import React, { useState } from 'react';
import logoLogin from '../img/login.png';
import axios from 'axios';
import { API_URL } from '../api-config';
import { useHistory } from 'react-router-dom';



const Login = () => {

    // State para iniciar sesión
    const [usuario, guardarUsuario] = useState({
        email:'',
        password:''
    });


    // Extraer de usuario
    const { email, password } = usuario;


    // Se ejecutará cada vez que el usuario escriba algo
    const onChange = e => {
        guardarUsuario({
            ...usuario, // coje una copia de usuario
            [e.target.name] : e.target.value
        })
    }


    // Iniciar sesión
    const history = useHistory();
    const onSubmit = e => {
        e.preventDefault();

        axios.post(API_URL+'/users/signup', usuario)
          .then( res => { 
              localStorage.setItem('authToken', res.data.token) // guarda el token en localStorage
              history.push('/')
          }) // redireccionamiento usando Hooks
          .catch(console.error)
    }

    return ( 

        // Login
        <div className="container-fluid formulario">
            <form className="form" id="form" onSubmit={onSubmit}>
                <img src={logoLogin} alt="" className="img-login"/>
                <input type="email" id="email" 
                                    name="email" 
                                    className="form-control" 
                                    placeholder="Enter email" 
                                    value={email} 
                                    onChange={onChange} 
                                    required/>

                <input type="password" id="password" 
                                       name="password" 
                                       className="form-control" 
                                       placeholder="Enter password" 
                                       value={password} 
                                       onChange={onChange} 
                                       required/>
        
                <button type="submit" class="btn btn-outline-secondary btn-style" value="Login">Login</button>
            </form>
        </div> 
        //Fin login
     );
}
 
export default Login;