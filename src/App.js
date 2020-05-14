 
import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Login from './components/Login';
import SignUp from './components/SignUp';
import NewProducts from './components/NewProducts';
import SearchResults from './components/SearchResults';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';
import Footer from './components/Footer';



function App() {

  // Definir el state
  const [ searchProduct, setSearchProduct ] = useState({});
  const [ product, setProduct ] = useState('');


  useEffect(() => {
    // Comprueba si el objeto esta vacio
    if(Object.keys(searchProduct).length === 0) return;

    const consultarAPI = async () => {
      const { product } = searchProduct;
      const url = `http://localhost:3300/api/products/brand/${product}`;

      const resultado = await axios(url);

      console.log(resultado.data);
      setProduct(resultado.data);
    }
    consultarAPI();

  }, [searchProduct]);
  

  return (

      <div className="App">
        <BrowserRouter>
          <Header setSearchProduct={setSearchProduct} />
          <Switch>
            <Route path="/" component={NewProducts} exact/>
            <Route path="/signup" component={SignUp} exact/>
            <Route path="/login" component={Login} exact/>
            <Route path="/product-detail/:_id" component={ProductDetail} exact/>
            <Route path="/search-result" component={SearchResults} exact/>
            <Route path="/cart" component={Cart} exact/>
          </Switch>
          <Footer />
        </BrowserRouter>
      </div>
  );
}

export default App;