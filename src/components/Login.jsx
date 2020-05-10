import React from 'react';
import logoLogin from '../img/login.png';


const Login = () => {
    return ( 

        // Login
        <div className="container-fluid formulario">
            <form className="form" id="form">
                <img src={logoLogin} alt="" className="img-login"/>
                <input type="email" id="username" className="form-control" placeholder="Enter email" required/>
                <input type="password" id="password" className="form-control" placeholder="Enter password" required/>
        
                <button type="submit" class="btn btn-outline-secondary btn-style">Start</button>
            </form>
        </div> 
        //Fin login
     );
}
 
export default Login;