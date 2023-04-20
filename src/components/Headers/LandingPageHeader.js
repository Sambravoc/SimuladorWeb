import React from "react";

// reactstrap components
// import { Button, Container } from "reactstrap"; (este es el original pero yo borré el Button)

import { Container } from "reactstrap";

// core components

function LandingPageHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });
  return (
    <>
      <div className="page-header page-header-small clear-filter" 
     style={{backgroundImage: "linear-gradient(to bottom, #1346d9, rgba(140, 106, 79, 0))"}}>
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("assets/img/fondlanding.jpg") + ")"
          }}
          ref={pageHeader}
        ></div>
        <div className="content-center">
          <Container>
            <h1 className="title">¿Para qué y cómo funciona?</h1>
            <div className="text-center">
            </div>
          </Container>
        </div>
      </div>
    </>
  );
}

export default LandingPageHeader;
