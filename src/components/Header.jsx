import React from 'react';
import { Nav, Navbar, Carousel, Form, FormControl, Button } from 'react-bootstrap';


const Header = () => {
    return ( 
        // Cabecera
        <header className="container-fluid">

            <div className="container-cabecera">
                <h1 className="txt-encabezado">ipcComponent</h1>
            </div>

            {/* Barra de navegación*/}
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                    
                    </Nav>
                    <Nav>
                    <Nav.Link href="#deets">More deets</Nav.Link>
                    <Nav.Link eventKey={2} href="#memes">
                        Dank memes
                    </Nav.Link>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-secondary">Search</Button>
                    </Form>
                    
                </Navbar.Collapse>
            </Navbar>
            {/* Fin barra de navegación*/}

            {/* Carousel */}
            <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://ld-magento.template-help.com/magento_58509/pub/media/wysiwyg/slide1.jpg"
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
                    src="https://ld-magento.template-help.com/magento_58509/pub/media/wysiwyg/slide2_1.jpg"
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
                    src="https://ld-magento.template-help.com/magento_58509/pub/media/wysiwyg/slide3.jpg"
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>Third</h3>
                    <p></p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            {/* Fin carousel */}
            
        </header>
     );
}
 
export default Header;