import React from 'react';


const Imagen = ({imagen}) => {

    const { imgUrl, brand, model, processor, memory, hardDisk, price } = imagen;

    return ( 
        <div className="container-producto col-sm-6 col-lg-4 col-xl-3">
            <img className="d-block w-100" src={imgUrl} alt=""/>
            <div className="contenedor-info">
                <div className="contenedorMarca">
                    <p className="marca">{brand}</p>
                    <p className="modelo">{model}</p>
                </div>
                <div className="contenedorProcesador">
                    <p className="procesador">{processor}</p>
                    <p className="ram">{memory}</p>
                    <p className="hd">{hardDisk}</p>
                </div>
                <p className="precio">{price}</p> 
            </div>
            </div>
     );
}
 
export default Imagen;