import React, { Fragment, useState } from 'react';
import { Button } from 'react-bootstrap';


const NewCategorie = () => {

    // State para Categoria
    const [categorie, saveCategorie] = useState({
        name:''
    })


    // Extraer nombre de la categoria
    const {name} = categorie;

    // Se ejecutará cada vez que se escriba algo
    const onChangeCategorie = e => {
        saveCategorie({
            ...categorie, // Hace una copia de la categoria
            [e.target.name] : e.target.value  // asigna el nuevo valor
        })
    }


    // Cuando se envia una categoria
    const onSubmitCategorie = e => {
        e.preventDefault();

        // Validar la categoria


        // Agregar al State si esta todo correcto


        // Reiniciar el form
    }
    return ( 

        <Fragment>
            <Button variant="primary">New Categorie</Button>

            <form onSubmit={onSubmitCategorie}>
                <input
                    type='text'
                    placeholder="Name Categorie"
                    name="name"
                    value={name}
                    onChange={onChangeCategorie} // Función que va actualizando los datos introducidos
                />

                <Button type="submit" variant="primary">Add Categorie</Button>                  
            </form>
        </Fragment>
        
     );
}
 
export default NewCategorie;