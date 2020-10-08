import React from 'react';
import {Route, Switch} from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.components';
import ShopPage from './pages/shop/shop.component'
import SignInAndRegisterPaage from './pages/sign-in-and-register/sign-in-and-register.components'

import Header from './components/header-component/header.component'

function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/shop' component={ShopPage}/>
        <Route exact path='/signIn' component={SignInAndRegisterPaage}/>

      </Switch>
    </div>
  );
}

export default App;