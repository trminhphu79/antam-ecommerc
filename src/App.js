import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Page from "./app/page";
import { Header } from "app/components/header";
import { Navbar } from "app/components/navbar";
import { PrivatePage } from "./HOC/privatePage";
import { Footer } from "app/components/footer";
import Products from "app/page/products/product";
import { Contact } from "app/page/contact";
import ProductDetail from "app/page/productDetail/productDetail";
import "./styles/_reset.scss";
import "./styles/_variable.scss";

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
        <Route path="/lien-he">
          <Contact />
        </Route>
        <Route path="/san-pham">
          <Products />
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
