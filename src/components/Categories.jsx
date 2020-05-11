import React from 'react';
import Sidebar from '../layout/Sidebar';
import FormProduct from '../components/Products/FormProduct';


const Categories = () => {
    return ( 
        <div className="contenedor-app">
            <Sidebar />
            
            <div className="seccion-principal">
                <main>
                    <FormProduct />
                    
                    <div className="contenedor-tareas">

                    </div>
                </main>
            </div>
        </div>
     );
}
 
export default Categories;