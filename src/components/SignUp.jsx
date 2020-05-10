import React from 'react';
import signUp from '../img/signup.png';


const SignUp = () => {
    return ( 

        // Login
        <div className="container-fluid formulario">
            <form className="form" id="form">
                <img src={signUp} alt="" className="img-login"/>
                <h1 className="h3 mb-3 font-weight-bold">Sign Up</h1>
                <input type="email" id="email" className="form-control" placeholder="Enter email" required/>
                <input type="password" id="password" className="form-control" placeholder="Enter password" required/>
        
                <button type="submit" class="btn btn-outline-secondary btn-style">Register</button>
            </form>
        </div> 
        //Fin login
     );
}
 
export default SignUp;