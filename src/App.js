import React, { Fragment } from 'react';
import Header from './components/Header';
//import Login from './components/Login';
//import SignUp from './components/SignUp';
//import NewProducts from './components/NewProducts';
//import SearchResults from './components/SearchResults';
//import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';
import Footer from './components/Footer';



function App() {
  return (

    <Fragment>
      <Header />
      {/*<NewProducts />*/}
      {/*<Login />*/}
      {/*<SignUp />*/}
      {/*<SearchResults />*/}
      {/*<ProductDetail />*/}
      <Cart />
      <Footer />
    </Fragment>
  );
}

export default App;
