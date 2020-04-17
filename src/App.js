import React from "react";

import HomePage from "./HomePage";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import InProgress from "./InProgress";

function App() {
  let routes;
  routes = (
    <Switch>
      <Route path="/" exact>
        <HomePage />
      </Route>
      <Route path="/about" exact>
        <InProgress title={"About"} />
      </Route>
      <Route path="/travels" exact>
        <InProgress title={"Travels"} />
      </Route>
      <Route path="/album" exact>
        <InProgress title={"Photo Album"} />
      </Route>
      <Redirect to="/" />
    </Switch>
  );

  return (
    <Router>
      <main>{routes}</main>
    </Router>
  );
}

export default App;
