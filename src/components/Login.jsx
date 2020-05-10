import React from 'react';
import logoLogin from '../img/login.png';


const Login = () => {
    return ( 

        // Login
        <div className="container-fluid formulario">
            <form className="form" id="form">
                <img src={logoLogin} alt="" className="img-login"/>
                <h1 className="h3 mb-3 font-weight-bold">Iniciar sesión</h1>
                <input type="text" id="username" className="form-control" placeholder="Ingrese usuario" required/>
                <input type="password" id="password" className="form-control" placeholder="Ingrese contraseña" required/>
        
                <button type="submit" class="btn btn-outline-secondary">Iniciar</button>
            </form>
        </div> 
        //Fin login
     );
}
 
export default Login;