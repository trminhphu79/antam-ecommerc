import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Page from "./app/page";
import { Header } from "app/components/header";
import { Navbar } from "app/components/navbar";
import { PrivatePage } from "./HOC/privatePage";
import { Footer } from "app/components/footer";
import { Product } from "app/page/product";
import { Contact } from "app/page/contact";
import { ProductDetail } from "app/page/product-detail";
import "./styles/_reset.scss";
import "./styles/_variable.scss";

function App() {
  
  return (
    <Router>
      <main id="main">
        <Header />
        <Navbar />
        <div className="content">
          <Switch>
            <PrivatePage exact Component={Page.HomePage} path="/" />
            <PrivatePage exact Component={Page.AddProduct} path="/add" />
            {/* <Route exact path="/login">
          <Route component={Page.LoginPage} />
        </Route> */}
        <Route path="/lien-he">
          <Contact />
        </Route>
        <Route path="/san-pham">
          <Product />
        </Route>
        <Route path="/chi-tiet-san-pham">
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
