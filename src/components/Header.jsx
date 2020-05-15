import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import carousel01 from '../img/carousel01.jpg';
import carousel02 from '../img/carousel02.jpg';
import carousel03 from '../img/carousel03.jpg';
import { Nav, Navbar, Carousel, Form, FormControl, Button } from 'react-bootstrap';


const Header = ({setSearchProduct}) => {

    const [search, setSearch] = useState({
        product: ''
    });

    const [ error, setError] = useState(false);

    const { product } = search;

    // función a cada input para leer su contenido
    const updateState = e => {
        setSearch({
            ...search,
            [e.target.name] : e.target.value
        })
    }

    // consultar las apis
    const searchInformation = e => {
        e.preventDefault();

       if(product.trim() === ''){
            setError(true);
            return;
        }

        setError(false);
        // Todo bien, pasar al componente principal

        setSearchProduct(search);
    }


    return ( 
        // Cabecera
        <header className="container-fluid">

            <div className="container-cabecera">
                {error ? <p className="alert alert-danger text-center p-2">Todos los campos son obligatorios</p> : null }

                <h1 className="txt-encabezado">pcShop</h1>
            </div>

            {/*Barra de navegación*/}
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                    
                    </Nav>
                    <Nav>
                    <Nav.Link href="/login">Login</Nav.Link>
                    <Nav.Link eventKey={2} href="/signup">
                        SignUp
                    </Nav.Link>
                    </Nav>
                    <Form inline onSubmit={searchInformation}>
                        <FormControl 
                            type="text" 
                            name="product" 
                            placeholder="Search" 
                            className="mr-sm-2" 
                            onChange={updateState} 
                            value={product}/>

                        <Button variant="outline-secondary" type="submit">Search</Button>
                    </Form>
                    
                </Navbar.Collapse>
            </Navbar>
            {/*Fin barra de navegación*/

            /* Carousel */
            <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={carousel01}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3>First</h3>
                    <p></p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={carousel02}
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>Second</h3>
                    <p></p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={carousel03}
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>Third</h3>
                    <p></p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            /* Fin carousel */}
            
        </header>
     );
}
 
export default Header;