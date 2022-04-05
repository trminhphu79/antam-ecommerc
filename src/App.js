import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
// import { Header } from "app/components/header";
// import { Navbar } from "app/components/navbar";
// import { Footer } from "app/components/footer";
import Products from "app/page/products/product";
import Home from "app/page/home";
import ProductDetail from "./app/page/productDetail/productDetail";
import { Contact } from "app/page/contact";
import ScrollToTop from "app/page/utils/ScrollToTop";
import NotFound from "app/page/notFound/NotFound";
import LoginPage from "app/page/login/login";
import Form from "app/page/common/form";
import { PublicPage } from "HOC/publicPage";
import { PrivatePage  } from "HOC/privatePage";
import AdminLogin from "../src/app/page/admin/admin-page/adminLogin";
import Admin from "app/page/admin";
import CosmeticBottles from './app/page/category/cosmetic-bottles';
import CosmeticBoxs from './app/page/category/cosmetic-box';
import CosmeticPet from './app/page/category/cosmetic-pet';
import CosmeticPrinting from './app/page/category/cosmetic-printing';

function App() {
  return (
    <React.Fragment>
      <ScrollToTop />

      <Switch>
        {/* Trang Public */}
        <PublicPage path="/" exact Component={Home} />
        <PublicPage path="/san-pham/:id" exact Component={ProductDetail} />
        <PublicPage path="/form" exact Component={Form} />
        <PublicPage path="/lien-he" exact Component={Contact} />
        <PublicPage path="/dang-nhap" exact Component={LoginPage} />
        <PublicPage path="/san-pham" Component={Products} />
        <PublicPage path="/chai-lo-my-pham" Component={CosmeticBottles} />
        <PublicPage path="/chai-nhua-pet" Component={CosmeticPet} />
        <PublicPage path="/vo-hop-my-pham" Component={CosmeticBoxs} />
        <PublicPage path="/in-an-chai-lo-my-pham" Component={CosmeticPrinting} />


        {/* Trang admin */}
        <PrivatePage path="/admin/dang-nhap" component={AdminLogin} />
        <PrivatePage path="/admin" component={Admin} />

        {/* Nếu tất cả các path trên không đủng nhảy vào not found page */}
        <Route path="*" component={NotFound} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
