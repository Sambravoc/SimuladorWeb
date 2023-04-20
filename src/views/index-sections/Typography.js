import React from "react";

// reactstrap components
import { Container,
Row,
Col} from "reactstrap";

// core components

function Typography() {
  return (
    <>
      <div className="section">
        <Container>
        <Row>
              <Col className="ml-auto mr-auto" md="12">
                <h4 className="display-4 text-center">¡Bienvenido a StatCast!</h4>
                <h5 className="display-9">
                <br/> 
                StatCast es un simulador diseñado para ayudarte en la medición de potencias, permitiéndote conocer 
                como se comportará el perfil de consumo energético y de esta manera, lograr que la toma de decisiones 
                sobre las operaciones y las estrategias se tomen en el momento y de manera más eficiente y precisa a nivel de: 
                <br/> 
                <br/> 
                <ul>
                  <li className="text-center">Generación</li>
                  <li className="text-center">Transmisión</li>
                  <li className="text-center">Distribución</li>
                </ul>
                </h5>
              </Col>
              <br/> 
            </Row>
        </Container>
      </div>
    </>
  );
}

export default Typography;
