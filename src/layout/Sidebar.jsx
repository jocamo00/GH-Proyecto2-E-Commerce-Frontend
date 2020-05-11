import React from 'react';
import NewCategorie from '../components/categories/NewCategorie';
import ListCategories from '../components/categories/ListCategories';


const Sidebar = () => {
    return ( 
        <aside className="layout-sidebar col-3">
            <h1 className="title-aside">iShop</h1>

            {/*Componente formulario de crear nueva categoria*/}
            <NewCategorie />

            <div>
                <h2>Categorias</h2>
                <ListCategories />
            </div>
        </aside>
     );
}
 
export default Sidebar;