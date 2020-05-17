import React from 'react';
import carousel01 from '../img/carousel01.jpg';
import carousel02 from '../img/carousel02.jpg';
import carousel03 from '../img/carousel03.jpg';
import carrito from '../img/carrito.png';
import { useHistory } from 'react-router-dom';
import { Nav, Navbar, Carousel } from 'react-bootstrap';
import { connect } from 'react-redux';
import { logout } from "../redux/actions";


const Header = (props) => {


    const history = useHistory();
    const openCart = () => {
        history.push('/cart')
    }

    const closeSession = () => {
        logout();
    }

    return ( 
        // Cabecera
        <header className="container-fluid">
            <div className="container-cabecera">
                <h1 className="txt-encabezado">pcShop</h1>
            </div>

            {/*Barra de navegación*/}
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                        </Nav>
                    {props.user ?
                        <Nav className="ml-auto">
                            <Nav.Link className="user-email">{props.user.email}</Nav.Link>
                            <Nav.Link onClick={() => closeSession()}>Logout</Nav.Link>
                        </Nav>

                        : 

                        <Nav className="ml-auto">
                            <Nav.Link href="/login">Login</Nav.Link>
                            <Nav.Link eventKey={2} href="/signup">SignUp</Nav.Link>
                        </Nav> 
                    }
                        

                    
                    
                    <Nav.Link onClick={() => openCart()}><img className="icon-cart" src={carrito} alt="" fluid></img></Nav.Link>
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
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={carousel02}
                    alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={carousel03}
                    alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
            /* Fin carousel */}
            
        </header>
     );
}
 
const mapStateToProps = (state) => ({user:state.user})  // función que recibe el estado de redux, crea una prop user que tenga el state.user
export default connect(mapStateToProps)(Header);
//export default Header;