import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';
import HomePage from './pages/Homepage';
import ShopPage from './pages/shop/Shop';
import Header from './components/header/Header';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop/hats" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
