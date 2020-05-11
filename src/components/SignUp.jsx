import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import signUp from '../img/signup.png';


const SignUp = () => {

    // State para iniciar sesión
    const [usuario, guardarUsuario] = useState({
        name:'',
        email:'',
        password:'',
        confirm:''
    });


    // Extraer de usuario
    const { name, email, password, confirm } = usuario;


    // Se ejecutará cada vez que el usuario escriba algo
    const onChange = e => {
        guardarUsuario({
            ...usuario, // coje una copia de usuario
            [e.target.name] : e.target.value
        })
    }


    // Cuando el usuario quiere iniciar sesión
    /*const onSubmit = e => {
        e.preventDefault();

        // Validar que no hayan campos vacios


        // Password minimo de 6 caracteres


        // Los 2 passwords son iguales


        // pasarlo al action
    }*/

    return ( 

        // Login
        <div className="container-fluid formulario">
            <form className="form" id="form">
                <img src={signUp} alt="" className="img-login"/>
                <h1 className="h3 mb-3 font-weight-bold">Sign Up</h1>

                <input       
                           type = "text" 
                             id = "name" 
                           name = "name"
                      className = "form-control" 
                    placeholder = "Enter your name" 
                          value = {name} 
                       onChange = {onChange} 
                       required
                />

                <input       
                           type = "email" 
                             id = "email" 
                           name = "email"
                      className = "form-control" 
                    placeholder = "Enter email" 
                          value = {email} 
                       onChange = {onChange} 
                       required
                />

                <input 
                           type = "password" 
                             id = "password" 
                           name = "password"
                      className = "form-control" 
                    placeholder = "Enter password" 
                          value = {password} 
                       onChange = {onChange} 
                       required
                />

                <input 
                           type = "password" 
                             id = "confirm" 
                           name = "confirm"
                      className = "form-control" 
                    placeholder = "Repeat your password" 
                          value = {confirm} 
                       onChange = {onChange} 
                       required
                />          
        
                <button type="submit" class="btn btn-outline-secondary btn-style">Register</button>
            </form>

            <Link to = {'/login'}>
                Volver a iniciar sesión
            </Link>
        </div> 
        //Fin login
     );
}
 
export default SignUp;