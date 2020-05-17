 
import React, { useState} from 'react';
import { useHistory } from 'react-router-dom';


const Formulario = ({setSearch}) => {

        const [ term, setTerm ] = useState('');
        const [ error, setError ] = useState(false);


        const history = useHistory();
        const searchProducts = e => {
            e.preventDefault();

            if(term.trim() === '') {
                setError(true);
                return;
            }
            setError(false);

            setSearch(term);
            history.push('/search-result')

        }


    return ( 

        <div className="container-fluid">
            <form className="container-fluid" onSubmit={searchProducts}>
                { error ? <p className="container-fluid alert alert-danger text-center p-2">Todos los campos son obligatorios</p> : null }
                
                <div className="row container-search">
                    <div className="col-6">
                        <input 
                            className="form-control"
                            type="text" 
                            placeholder="Search brand" 
                            onChange={ e => setTerm(e.target.value)}
                        />
                    </div>
                    <div col-2>
                        <button type="submit" class="btn btn-light">Search</button>
                    </div>
                    
                        
                </div>  
            </form>
        </div>

     );
}
 
export default Formulario;