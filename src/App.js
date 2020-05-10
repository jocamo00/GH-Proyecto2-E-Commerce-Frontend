import React, { Fragment } from 'react';
import Header from './components/Header';
//import NewProducts from './components/NewProducts';
import Login from './components/Login';
//import SignUp from './components/SignUp';
import Footer from './components/Footer';



function App() {
  return (

    <Fragment>
      <Header />
      {/*<NewProducts />*/}
      <Login />
      {/*<SignUp />*/}
      <Footer />
    </Fragment>
  );
}

export default App;
