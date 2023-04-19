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
      <div className="page-header clear-filter"> 
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
              <Button variant="contained" color="black" size="lg" href="/login-page"
              ><strong>Ir al simulador</strong></Button>
          </div>
          <div>
  
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
