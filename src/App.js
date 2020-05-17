 
import React, { useState, useEffect } from 'react';
import { API_URL} from '../src/api-config';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Login from './components/Login';
import SignUp from './components/SignUp';
import NewProducts from './components/NewProducts';
import SearchResults from './components/SearchResults';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';
import Footer from './components/Footer';
import Formulario from './components/Formulario';
import SearchProducts from './components/SearchProducts';




function App() {

  const [ search, setSearch] = useState('');
  const [ imagenes, guardarImagenes ] = useState([]);
  useEffect(() => {

    const consultarApi = async() => {
      if(search === '') return;
    
      const url = API_URL + `/products/brand/${search}`;

      const respuesta = await fetch(url);
      const resultado = await respuesta.json();

      console.log(resultado[0]);
      guardarImagenes(resultado);
    }

    consultarApi();
  }, [search])
  

  return (

      <div className="App">
        <BrowserRouter>
          <Header />
          <Formulario setSearch={setSearch}/>
          <SearchProducts imagenes={imagenes}/>
          <Switch>
            <Route path="/" component={NewProducts} exact/>
            <Route path="/signup" component={SignUp} exact/>
            <Route path="/login" component={Login} exact/>
            <Route path="/products/:_id" component={ProductDetail} exact/>
            <Route path="/search-result" component={SearchResults} exact/>
            <Route path="/cart" component={Cart} exact/>
          </Switch>
          <Footer />
        </BrowserRouter>
      </div>
  );
}

export default App;