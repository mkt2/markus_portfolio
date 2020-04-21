import React, {Suspense} from "react";

import HomePage from "./HomePage";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";

import LoadingSpinner from "./LoadingSpinner";
import InProgress from "./InProgress";
//import About from "./About";
//import Education from "./Education";
const Education = React.lazy(() => import("./Education"));
const About = React.lazy(() => import("./About"))

function App() {
  let routes;
  routes = (
    <Switch>
      <Route path="/" exact>
        <HomePage />
      </Route>
      <Route path="/about" exact>
        <About />
      </Route>
      <Route path="/education" exact>
        <Education />
      </Route>
      <Route path="/projects" exact>
        <InProgress title={"Projects"} />
      </Route>
      <Redirect to="/" />
    </Switch>
  );

  return (
    <Router>
        <main><Suspense fallback={<div className="center">
          <LoadingSpinner />
        </div>}>{routes}</Suspense></main>
      </Router>
  );
}

export default App;
