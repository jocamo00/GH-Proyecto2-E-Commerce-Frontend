 
import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';
//import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
//import Login from './components/Login';
//import SignUp from './components/SignUp';
import NewProducts from './components/NewProducts';
//import SearchResults from './components/SearchResults';
//import ProductDetail from './components/ProductDetail';
//import Cart from './components/Cart';
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

      /*<Router>
        <Switch>
          <Route exact path="/" component={NewProducts} />
          <Route exact path="/" component={Header} />
          <Route exact path="/lo<SearchResults 
            product={product}
          />gin" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/search-results" component={SearchResults} />
          <Route exact path="/product-detail" component={ProductDetail} />
          <Route exact path="/cart" component={Cart} />
        </Switch>
      </Router>*/

      <Fragment>
          <Header 
            setSearchProduct={setSearchProduct}
          />
          {/*<SearchResults 
            product={product}
          />*/}
          <NewProducts />
          <Footer />
      </Fragment>

  );
}

export default App;