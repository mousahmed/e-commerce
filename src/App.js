import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.components';
import {Route, Switch} from 'react-router-dom';
import ShopPage from './pages/shop/shop.component'
import Header from './components/header-component/header.component'
function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/shop' component={ShopPage}/>
      </Switch>
    </div>
  );
}

export default App;