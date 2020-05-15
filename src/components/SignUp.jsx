import React, { useState, useRef, useEffect } from 'react';
import signUp from '../img/signup.png';
import axios from 'axios';
import { API_URL } from '../api-config';
import { useHistory } from 'react-router-dom';


const SignUp = () => {

    // Para asignar una referencia al elemento html name
    const nameInput = useRef(null);
    
    useEffect(() => {
      nameInput.current.focus();
  }, [])
  

    // State para iniciar sesión
    const [usuario, guardarUsuario] = useState({
        name:'',
        email:'',
        password:''
    });


    // Extraer de usuario
    const { name, email, password } = usuario;


    // Se ejecutará cada vez que el usuario escriba algo
    const onChange = e => {
        guardarUsuario({
            ...usuario, // coje una copia de usuario
            [e.target.name] : e.target.value
        })
    }


    // Cuando el usuario quiere iniciar sesión
    const history = useHistory();
    const onSubmit = e => {
        e.preventDefault();

        axios.post(API_URL+'/users/signup', usuario)
          .then(()=>{ history.push('/login')}) // redireccionamiento usando Hooks
          .catch(console.error)
    }

    return ( 

        // Login
        <div className="container-fluid formulario">
            <form className="form" id="form" onSubmit={onSubmit}>
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
                            ref = {nameInput}
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
        
                <button type="submit" className="btn btn-outline-secondary btn-style">Register</button>
            </form>
        </div> 
        //Fin login
     );
}
 
export default SignUp;