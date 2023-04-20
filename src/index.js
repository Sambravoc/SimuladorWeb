/*

=========================================================
* Now UI Kit React - v1.5.1
=========================================================

* Product Page: https://www.creative-tim.com/product/now-ui-kit-react
* Copyright 2022 Creative Tim (http://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/now-ui-kit-react/blob/main/LICENSE.md)

* Designed by www.invisionapp.com Coded by www.creative-tim.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

// styles for this kit
import "assets/css/bootstrap.min.css";
import "assets/scss/now-ui-kit.scss?v=1.5.0";
import "assets/demo/demo.css?v=1.5.0";
import "assets/demo/nucleo-icons-page-styles.css?v=1.5.0";
// pages for this kit
import Index from "views/Index.js";
import NucleoIcons from "views/NucleoIcons.js";
import LoginPage from "views/examples/LoginPage.js";
import LandingPage from "views/examples/LandingPage.js";
//import ProfilePage from "views/examples/ProfilePage.js";
//import BasicElements from "views/index-sections/BasicElements";
//import CompleteExamples from "views/index-sections/CompleteExamples";
//import Download from "views/index-sections/Download";
//import Examples from "views/index-sections/Examples";
//import Images from "views/index-sections/Images";
import Javascript from "views/index-sections/Javascript";
//import Navbars from "views/index-sections/Navbars";
//import { Pagination, PaginationItem } from "reactstrap";
//import SignUp from "views/index-sections/SignUp";
//import Tabs from "views/index-sections/Tabs";
//import Typography from "views/index-sections/Typography";
// import CarouselSection from "views/index-sections/Carousel";
//import CompleteExamples from "views/index-sections/CompleteExamples";
//import Notifications from "views/index-sections/Notifications";
//import PaginationSection from "views/index-sections/Pagination";
//import BasicElements from "views/index-sections/BasicElements";


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Switch>
      <Switch>
        <Route path="/index" render={(props) => <Index {...props} />} />
        <Route
          path="/nucleo-icons"
          render={(props) => <NucleoIcons {...props} />}
        />
        <Route
          path="/landing-page"
          render={(props) => <LandingPage {...props} />}
        />
        <Route
          path="/login-page"
          render={(props) => <LoginPage {...props} />}
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
