import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logoLogin from '../img/login.png';



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


    // Cuando el usuario quiere iniciar sesión
    const onSubmit = e => {
        e.preventDefault();

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

            <Link to = {'/signup'}>
                Obtener Cuenta
            </Link>
        </div> 
        //Fin login
     );
}
 
export default Login;