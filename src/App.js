import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Page from "./app/page";
import { Header } from "app/components/header";
import { Navbar } from "app/components/navbar";
import { PrivatePage } from "./HOC/privatePage";
import { Footer } from "app/components/footer";
import  Product  from "./app/page/products/product";
import Home from './app/page/home/home' ; 
import ProductDetail from './app/page/productDetail/productDetail' ; 
import { Contact } from "app/page/contact";
function App() {
  return (
    <Router>
      <Header />
      <Navbar />
      <Switch>
        <PrivatePage exact Component={Page.HomePage} path="/" />
        <PrivatePage exact Component={Page.AddProduct} path="/add" />
        {/* <Route exact path="/login">
          <Route component={Page.LoginPage} />
        </Route> */}
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/lien-he">
          <Contact />
        </Route>
        <Route path="/san-pham">
          <Product />
        </Route>
        <Route path="/product-detail">
          <ProductDetail />
        </Route>
        <Route path="*">
          <Switch>
            <Route component={Page.ErrorPage} />
          </Switch>
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
