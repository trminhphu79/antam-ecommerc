import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Page from "./app/page";

import { PrivatePage } from "./HOC/privatePage";

function App() {
  return (
    <Router>
      <Switch>
        <PrivatePage exact Component={Page.HomePage} path="/" />

        <Route exact path="/login">
          <Route component={Page.LoginPage} />
        </Route>

        <Route path="*">
          <Switch>
            <Route component={Page.ErrorPage} />
          </Switch>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
