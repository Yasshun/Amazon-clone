import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import Payment from './Payment';
import Orders from './Orders'
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const promise = loadStripe('pk_test_51IBuh2KE6PWzg82a8Sb6Z1RvktNCjplNWBRrA9SfyDFUzRvvukh5x67gxrW0fXoBL2qXGLRZV8anqQXIXc3RyeH100ZsnCcZqh');

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
   
    auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS >>>', authUser);

      if(authUser) {
        // ログイン時
        dispatch({
          type: 'SET_USER',
          user: authUser

        })
      } else {
        // ログアウト時
        dispatch({
          type: 'SET_USER',
          user: null,

        })
      }
    })
  }, [])
  return (
    // BEM
    <div className="app">
      <Router>
          <Header />
          <Switch>
              <Route path="/login">
                  <Login />
              </Route>

              <Route path="/orders">
                  <Orders />
              </Route>

              <Route path="/checkout">
                  <Checkout />
              </Route>

              <Route path="/payment">
                  <Elements stripe={promise}>
                    <Payment />
                  </Elements>
              </Route>
              <Route path="/">
                  <Home />
              </Route>

          </Switch>
      </Router> 
    </div> 
  );
}

export default App;
