import React from "react";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js"; //loanding page
import DarkFooter from "components/Footers/DarkFooter.js";
// import CarouselSection from "./index-sections/Carousel.js";


import Typography from "./index-sections/Typography.js";
import { Route } from "react-router-dom";

<Route></Route>


function Index() {
  React.useEffect(() => {
    document.body.classList.add("index-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("index-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });
  return (
    <>
      <IndexNavbar />
      <div className="wrapper">
         <IndexHeader /> {/*loanding page */}
        <div className="main">
        <Typography />
        {/* <CarouselSection/>  */}
        </div>

        <DarkFooter />
      </div>
    </>
  );
}

export default Index;
