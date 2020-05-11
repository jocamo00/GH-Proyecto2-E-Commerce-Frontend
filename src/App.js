import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//import Header from './components/Header';
import Login from './components/Login';
import SignUp from './components/SignUp';
import NewProducts from './components/NewProducts';
import SearchResults from './components/SearchResults';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';
import Categories from './components/Categories';
//import Footer from './components/Footer';



function App() {
  return (

    <Router>
      <Switch>
        <Route exact path="/" component={NewProducts} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/search-results" component={SearchResults} />
        <Route exact path="/product-detail" component={ProductDetail} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/admin" component={Categories} />
      </Switch>
    </Router>

      //{/*<Header />*/}
      //{/*<NewProducts />*/}
      //{/*<Login />*/}
      //{/*<SignUp />*/}
      //{/*<SearchResults />*/}
      //{/*<ProductDetail />*/}
      //{/*<Cart />*/}

  );
}

export default App;
