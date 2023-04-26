import React from "react";

//Components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  //CardFooter,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Col
} from "reactstrap";

import TransparentFooter from "components/Footers/TransparentFooter.js";
import IndexNavbar from "components/Navbars/IndexNavbar";

function LoginPage() {
  const [lastFocus, setLastFocus] = React.useState(false);


  React.useEffect(() => {
    document.body.classList.add("login-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("login-page");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);
  return (
    <>
      <IndexNavbar/>
      <div className="page-header clear-filter" style={{backgroundImage: "linear-gradient(to bottom, #1346d9, rgba(140, 106, 79, 0))"}}>
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("assets/img/header.jpg") + ")"
          }}
        ></div>
        <div className="content">
          <Container>
          <h2 className="title">Inicia sesión para acceder al simulador.</h2>
            <Col className="ml-auto mr-auto" md="50">
              <Card className="card-plain" style={{width: '450px'}}>
                <Form action="" className="form" method="">
                  <CardHeader className="text-center">
                  </CardHeader>
                  <CardBody>

                    <InputGroup className={"no-border input-lg"}>
                      <InputGroupAddon addonType="prepend">
                  
                        <InputGroupText>
                          <i className="now-ui-icons ui-1_email-85" style={{color:"white"}}></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Correo Electrónico"
                        type="email"
                        onFocus={() => setLastFocus(true)}
                        onBlur={() => setLastFocus(false)}
                      ></Input>
                    </InputGroup>

                    <InputGroup className={"no-border input-lg"}>
                      <InputGroupAddon addonType="prepend">

                        <InputGroupText>
                          <i className="now-ui-icons objects_key-25" style={{color:"white"}}></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Contraseña" 
                        type="password"
                        onFocus={() => setLastFocus(true)}
                        onBlur={() => setLastFocus(false)}
                      ></Input>
                    </InputGroup>
                  </CardBody>
                  
                  <InputGroup className={"no-border input-lg" + (lastFocus ? " input-group-focus" : "")}>
                    </InputGroup>
                </Form>
                <br/>
                <Button style={{backgroundColor: "#1346d9", color: "#fff"}}
                    block
                    className="btn-round"
                    onClick={(e) => e.preventDefault()}
                    size="lg"
                  >
                    <strong> Iniciar sesión </strong>
              </Button>
              <br/>
              <InputGroup className={"border input-lg" + (lastFocus ? " input-group-focus" : "")}>
              </InputGroup>
              <br/>
              <Container>
                <div className="registrate" style={{color: 'white'}}>
                <strong className="infoiniciar" style={{color: 'white'}}>¿Aún no tienes una cuenta?</strong>
                <a href="/register" style={{color: '#F6FB5D', textDecoration: 'underline'}}> Regístrate gratis!</a>
                </div>
             </Container>
              </Card>
            </Col>
          </Container>
        </div>
        <TransparentFooter/>
      </div>
    </>
  );
}

export default LoginPage;