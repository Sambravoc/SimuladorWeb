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
     <div className="page-header page-header-small clear-filter" 
     style={{backgroundImage: "linear-gradient(to bottom, #1346d9, rgba(140, 106, 79, 0))"}}>
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
              alt="..." width="auto" height="100"
              src={require("assets/img/now-logo.png")}
            ></img>
            <h1 className="display-4">StatCast</h1>
            <h3>Simulador Web para la medición de potencias.</h3>
              <Button href="/login-page" style={{backgroundColor: "#1346d9", color: "#fff"}}>
                <strong style={{fontSize: "20px"}}> Ir al simulador </strong></Button>
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
