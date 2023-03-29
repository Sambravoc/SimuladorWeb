/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container,
Button
 } from "reactstrap";
// core components

function IndexHeader() {
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
      <div className="page-header clear-filter" filter-color="blue">
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("assets/img/header.jpg") + ")"
          }}
          ref={pageHeader}
        ></div>
        <Container>
          <div className="content-center brand">
            <img
              alt="..." width="auto" height="150"
              className="n-logo" 
              src={require("assets/img/now-logo.png")}
            ></img>
            <h1 className="h1-seo" >LTWeb</h1>
            <h3>Simulador Web para la medición de potencias.</h3>
              <Button variant="contained" color="info" size="lg"
              href="https://www.creative-tim.com/product/now-ui-kit-pro-react?ref=nukr-index-navbar"
              >Ir al simulador</Button>
          </div>
          <h6 className="category category-absolute">
            Universidad de Colima
          </h6>
        </Container>
      </div>
    </>
  );
}

export default IndexHeader;
