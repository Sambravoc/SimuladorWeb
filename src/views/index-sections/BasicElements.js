import React from "react";
// react plugin used to create switch buttons
//import Switch from "react-bootstrap-switch";
// plugin that creates slider
import Slider from "nouislider";

// reactstrap components
import {

  Container,
  Row,
  Col,
} from "reactstrap";

// core components

function BasicElements() {
 // const [leftFocus, setLeftFocus] = React.useState(false);
 // const [rightFocus, setRightFocus] = React.useState(false);
  React.useEffect(() => {
    if (
      !document
        .getElementById("sliderRegular")
        .classList.contains("noUi-target")
    ) {
      Slider.create(document.getElementById("sliderRegular"), {
        start: [50],
        connect: [true, false],
        step: 0.5,
        range: { min: 0, max: 100 },
      });
    }
  });
  return (
    <>
      <div className="section section-basic" id="basic-elements">
        <Container>
          <h3 className="title">Diseñado para estudiantes, profesionales y visitantes.</h3>
          <p className="category">El simulador ha sido creado para que se pueda bla a bla bkabnksdjdkjhckdjhkjfhkjfvkjfbkjvbdfkvbdkfvbkfjbkdf
          fvnd fmdnfbvkjdfbvkdjfbvkdfjbvkdfjvndf
          fvdkfjvbdkjfbvdfv</p>
          <Row id="checkRadios">
            <Col lg="3" sm="6">
              <p className="category">Sliders</p>
              <div className="slider" id="sliderRegular"></div>
              <br></br>
              <div className="slider slider-primary" id="sliderDouble"></div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default BasicElements;
