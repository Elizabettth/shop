import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";

import axios from "axios";
import Category from "./pages/Category";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "./redux/thunk";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  // const [data, setData] = useState(null);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

  // useEffect(() => {
  //   getData();
  // }, []);

  // async function getData() {
  //   await axios(`https://makeup-api.herokuapp.com/api/v1/products.json?brand=nyx`)
  //     .then((response) => {
  //       setData(response.data);
  //     })
  //     .catch((error: any) => setError(error))
  //     .finally(() => {
  //       setLoading(false);
  //     });
  // }
  // console.log(data);

  return (
    <>
      <Header />
      <div className="App__container">
        <Switch>
          <Route exact path="/shop" component={Home} />
          <Route path="/types">
            <h1>types</h1>
          </Route>
          <Route path="/category" component={Category} />
          <Route>
            <h1>404</h1>
          </Route>
        </Switch>
      </div>
      <Footer />
    </>
  );
}

export default App;
