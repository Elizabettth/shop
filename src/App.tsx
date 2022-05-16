import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";

import Category from "./pages/Category";
import { useDispatch } from "react-redux";
import { fetchProducts } from "./redux/thunk";
import SignInSide from './pages/SignIn/SignIn'
import SignUp from './pages/SignUp/SignUp'
import Cart from './pages/Cart'

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <>
      <div className="App__container">
        <Switch>
          <Route exact path="/shop" component={Home} />
          <Route path="/types">
            <h1>types</h1>
          </Route>
          <Route path="/category" component={Category} />
          <Route path="/login" component={SignInSide} />
          <Route path="/signup" component={SignUp} />
          <Route path="/cart" component={Cart} />
          <Route>
            <h1>404</h1>
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default App;
