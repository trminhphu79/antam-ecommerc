import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { Header } from "app/components/header/";
import { Navbar } from "app/components/navbar";
import { Footer } from "app/components/footer";
import Product from "./app/page/products/product";
import Home from "./app/page/home/home";
import ProductDetail from "./app/page/productDetail/productDetail";
import { Contact } from "app/page/contact";
import NotFound from "app/page/notFound/NotFound";
import  ScrollToTop  from "app/page/utils/ScrollToTop" ; 
import "./styles/_reset.scss";
import "./styles/_variable.scss";

function App() {
  return (
    <React.Fragment>
      <ScrollToTop />
      <Header />
      <Navbar />
      <Switch>
        <Route path="/product/:_id" exact component={ProductDetail} />
        <Route path="/contact" component={Contact} />
        <Route path="/product" component={Product} />
        <Route path="/not-found" component={NotFound} />
        <Route path="/" exact component={Home} />
        <Redirect to="/not-found" />
      </Switch>
      <Footer />
    </React.Fragment>
  );
}

export default App;
