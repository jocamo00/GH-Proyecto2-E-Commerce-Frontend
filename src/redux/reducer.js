const reducer = (state={}, action) => { // si en el state no viene nada, se inicializara como objeto vacio
    switch (action.type) { // en función del tipo de acción
        case 'LOGIN': 
            return {  // nuevo estado que devolvemos si se da el caso
                ...state, //copia del estado actual
                user: action.payload // a la propiedad user le pasamos el payload que es donde viene user
            }
    
        default:
            return state;  // estado que devolvemos por defecto
    }
}


export default reducer;