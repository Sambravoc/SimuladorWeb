import React,  { useState } from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
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
  const [firstFocus, setFirstFocus] = React.useState(false);
  const [isStudent, setIsStudent] = useState(false);
  const [isTeacher, setIsTeacher] = useState(false);
  const [isVisitor, setIsVisitor] = useState(false);

  const handleIsStudentChange = (event) => {
    setIsStudent(event.target.checked);
  };

  const handleIsTeacherChange = (event) => {
    setIsTeacher(event.target.checked);
  };

  const handleIsVisitorChange = (event) => {
    setIsVisitor(event.target.checked);
  };

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
          <h2 className="title">Ingresa tu correo electrónico y selecciona que tipo de usuario eres.</h2>
            <p className="description">Esta información es únicamente para llevar un registro de los usuarios que ingresan. </p>
            <Col className="ml-auto mr-auto" md="50">
              <Card className="card-login card-plain">
                <Form action="" className="form" method="">
                  <CardHeader className="text-center">
                  </CardHeader>
                  <CardBody>
                    <InputGroup
                      className={
                        "no-border input-lg" +
                        (firstFocus ? " input-group-focus" : "")
                      } 
                      // Inicio de formulario
                    >
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="now-ui-icons users_circle-08"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Correo Electronico"
                        type="email"
                        onFocus={() => setFirstFocus(true)}
                        onBlur={() => setFirstFocus(false)}
                      ></Input>
                    </InputGroup>           
                  </CardBody>
                  <CardFooter className="text-center">
                   <form>
                      <label style={{ display: 'block', marginBottom: '10px' }}>
                        <input
                          type="checkbox"
                          checked={isStudent}
                          onChange={handleIsStudentChange}
                        />
                        Soy Estudiante
                      </label>
                      <label style={{ display: 'block', marginBottom: '10px' }}>
                        <input
                          type="checkbox"
                          checked={isTeacher}
                          onChange={handleIsTeacherChange}
                        />
                        Soy Profesor
                      </label>
                      <label style={{ display: 'block', marginBottom: '10px' }}>
                        <input
                          type="checkbox"
                          checked={isVisitor}
                          onChange={handleIsVisitorChange}
                        />
                        Soy Visitante
                      </label>
                   </form>
                     <Button style={{backgroundColor: "#1346d9", color: "#fff"}}
                      block
                      className="btn-round"
                      onClick={(e) => e.preventDefault()}
                      size="lg"
                    >
                      <strong> ENTRAR </strong>
                    </Button>
                  </CardFooter>
                </Form>
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
