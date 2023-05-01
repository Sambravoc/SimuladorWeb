import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";


// styles 
import "assets/css/bootstrap.min.css";
import "assets/scss/now-ui-kit.scss?v=1.5.0";
import "assets/demo/demo.css?v=1.5.0";
import "assets/demo/nucleo-icons-page-styles.css?v=1.5.0";
// paginas
import Index from "views/Index.js";
import LoginPage from "views/examples/LoginPage.js";
import LandingPage from "views/examples/LandingPage.js";
import Javascript from "views/index-sections/Javascript";
import Register from "views/examples/Register";
import InfoSimPage from "views/examples/InfoSimPage";
import SimuladorPM from "views/examples/SimuladorPM";
import SimuladorSE from "views/examples/SimuladorSE";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Switch>
      
      <Switch>
        <Route path="/index" render={(props) => <Index {...props} />} />
        <Route
          path="/landing-page"
          render={(props) => <LandingPage {...props} />}
        />
        <Route
          path="/login-page"
          render={(props) => <LoginPage {...props} />}
        />
        <Route
          path="/register"
          render={(props) => <Register {...props} />}
        />
        <Route
          path="/informacion-simulador"
          render={(props) => <InfoSimPage {...props} />}
        /> 
        <Route
          path="/simulador-pm"
          render={(props) => <SimuladorPM {...props} />}
        /> 
        <Route
          path="/simulador-se"
          render={(props) => <SimuladorSE {...props} />}
        /> 
        <Route
          path="/x"
          render={(props) => <Javascript {...props} />}
        /> 
        <Redirect to="/index" />
        <Redirect from="/" to="/index" />
      </Switch>
    </Switch>
  </BrowserRouter>
  
);
