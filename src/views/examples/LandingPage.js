import React from "react";

// Components

import {
  // Button,
  // Input,
  // InputGroupAddon,
  // InputGroupText,
  // InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";

import LandingPageHeader from "components/Headers/LandingPageHeader.js";
import DarkFooter from "components/Footers/DarkFooter";
import IndexNavbar from "components/Navbars/Navbar";

function LandingPage() {
  // const [firstFocus, setFirstFocus] = React.useState(false);
  // const [lastFocus, setLastFocus] = React.useState(false);
  React.useEffect(() => {
    document.body.classList.add("landing-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("landing-page");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);
  return (
    <>
      <IndexNavbar />
      <div className="wrapper">
        <LandingPageHeader />
        <div className="section section-about-us">
          <Container>
          <h3 className="title">Funcionalidad</h3>
                  <h5 className="display-9">
                    La función del simulador web es evaluar y aplicar métodos estadísticos para  hacer el análisis y el pronóstico de las curvas 
                    características de perfiles de consumo energético. Estas curvas pueden ser utilizadas para analizar patrones de consumo de energía
                    y para predecir la demanda futura de energía.</h5>
                  <br/>
                  <h5 className="display-9">
                    Una vez ingresando al simulador, podrás encontrar diferentes opciones para su uso, eligiendo diferentes opciones de 
                    modelo, así como método de ajuste/pronóstico y utilizar datos datos reales de consumo energético.
                  </h5>
            <div className="separator separator-secondary"></div>
            <div className="section-story-overview">
              <Row>
              <Col  md="3">
                    <img
                      alt="..."
                      className="rounded-circle img-fluid img-raised"
                      src={require("assets/img/foco.jpg")}
                    ></img>
                </Col>
                <Col  md="8">
                <h3>
                    ¿Qué métodos son empleados para obtener los resultados de las potencias?
                  </h3>
                  <h5>
                    AGREGAR INFORMACIÓN ACERCA DE LOS MÉTODOS Y/O FORMULAS ETC.
                  </h5>
                  <h5>
                    MÁS INFORMACIÓN DE SER NECESARIA.
                  </h5>
                  <h5>
                    MÁS INFORMACIÓN IGUAL DE SER NECESARIA.
                  </h5>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
        <hr/>
        <DarkFooter />
      </div>
    </>
  );
}

export default LandingPage;
