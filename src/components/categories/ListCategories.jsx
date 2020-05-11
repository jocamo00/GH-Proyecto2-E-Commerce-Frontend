import React from 'react';
import Categorie from './Categorie';


const ListCategories = () => {

    const categories = [
        {name: 'Portatiles'},
        {name: 'Impresoras'},
        {name: 'Teclados'}
    ]
    return ( 

        <ul>
            {/* Se itera cada una de las categorias */}
            {categories.map(categorie => (
                <Categorie 
                    categorie = {categorie} // Se le pasa un prop llamado categoria con la información de cada categoria
                />
            ))}
        </ul>
     );
}
 
export default ListCategories;