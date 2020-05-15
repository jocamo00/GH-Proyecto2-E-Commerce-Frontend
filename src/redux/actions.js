/*import axios from 'axios';


export const login = (user) => {
    axios.post(API_URL + '/api/auths', user)
        .then(res => {
            localStorage.setItem('authToken', res.data.token) // guardamos el token en el localStorage
            notification.succes({
                message: 'Usuario conectado con éxito'
            });
            history.pushState('/') //this.router.navigate(['/login']) en angular
        })
        .catch(console.error)
}*/