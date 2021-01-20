import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import Payment from './Payment';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';

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
              <Route path="/payment">
                  <Payment />
              </Route>

              <Route path="/checkout">
                  <Checkout />
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
