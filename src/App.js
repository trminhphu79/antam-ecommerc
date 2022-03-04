import React from "react";
import { BrowserRouter, Switch, Route , Redirect } from "react-router-dom";
import { Header } from "app/components/header";
import { Navbar } from "app/components/navbar";
import { Footer } from "app/components/footer";
import Product from "./app/page/products/product";
import Home from './app/page/home/home';
import ProductDetail from './app/page/productDetail/productDetail';
import Contact from "app/page/contact/contact";
import NotFound from "app/page/notFound/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Navbar />
      <Switch>
        <Route path="/product/:_id" component={ProductDetail}/>
        <Route path="/contact" component={Contact} />
        <Route path="/product" component={Product} />
        <Route path="/not-found" component={NotFound} />
        <Route path="/" exact component={Home} />
        <Redirect to="/not-found" />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
