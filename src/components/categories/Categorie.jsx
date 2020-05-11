import React from 'react';
import { Button } from 'react-bootstrap';


const Categorie = ({categorie}) => {
    return ( 
        <li>
            <Button variant="info">{categorie.name}</Button>
        </li>
     );
}
 
export default Categorie;