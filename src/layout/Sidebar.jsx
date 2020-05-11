import React from 'react';
import NewCategorie from '../components/categories/NewCategorie';


const Sidebar = () => {
    return ( 
        <aside className="layout-sidebar col-3">
            <h1 className="title-aside">iShop</h1>

            {/*Componente formulario de crear nueva categoria*/}
            <NewCategorie />

            <div>
                <h2>Productos</h2>
            </div>
        </aside>
     );
}
 
export default Sidebar;