import React,  { useState } from "react";

//Components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
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

function estaRegistrado(email) {
  // Aquí deberías agregar la lógica para verificar si el correo electrónico ya está registrado en tu sitio web
  // Podrías hacer una llamada a una API, verificar en una base de datos, o cualquier otro método que estés utilizando para manejar la autenticación de usuarios en tu sitio web
  // En este ejemplo, asumimos que el correo electrónico 'test@example.com' está registrado
  
  return email === 'test@example.com';
}

function Register() {
  const [firstFocus, setFirstFocus] = React.useState(false);
  const [lastFocus, setLastFocus] = React.useState(false);
  const [isStudent, setIsStudent] = useState(false);
  const [isTeacher, setIsTeacher] = useState(false);
  const [isVisitor, setIsVisitor] = useState(false);
  const [email,     setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");


  const handleIsStudentChange = (event) => {
    setIsStudent(event.target.checked);
  };

  const handleIsTeacherChange = (event) => {
    setIsTeacher(event.target.checked);
  };

  const handleIsVisitorChange = (event) => {
    setIsVisitor(event.target.checked);
  };

  const validarRegistro = () => {
    // Validar que el correo electrónico esté registrado
    if (!estaRegistrado(email)) {
      alert("Este correo electrónico no está registrado");
      return false;
    }
  
    // Validar que la contraseña tenga al menos 8 caracteres, una letra mayúscula y un número
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    if (!passwordRegex.test(password)) {
      alert(
        "La contraseña debe tener al menos 8 caracteres, una letra mayúscula y un número"
      );
      return false;
    }
  
    // Validar que la contraseña y su confirmación coincidan
    if (password !== confirmPassword) {
      alert("La contraseña y su confirmación no coinciden");
      return false;
    }
  
    // Si se llega hasta aquí, la validación ha sido exitosa
    return true;
  };
  

  React.useEffect(() => {
    document.body.classList.add("register");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("register");
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
          <h2 className="title">Regístrate para tener acceso al simulador.</h2>
            <Col className="ml-auto mr-auto" md="50">
              <Card className="card-plain" style={{width: '450px'}}>
                <Form action="" className="form" method="">
                  <CardHeader className="text-center">
                  </CardHeader>
                  <CardBody>

                    <InputGroup className={"no-border input-lg" + (firstFocus ? " input-group-focus" : "")}>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="now-ui-icons users_circle-08" style={{color:"white"}}></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Nombre.."
                        type="text"
                        onFocus={() => setFirstFocus(true)}
                        onBlur={() => setFirstFocus(false)}
                      ></Input>
                    </InputGroup>

                    <InputGroup className={"no-border input-lg" + (firstFocus ? " input-group-focus" : "")}>
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
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      ></Input>
                    </InputGroup>

                    <InputGroup className={"no-border input-lg" + (firstFocus ? " input-group-focus" : "")}>
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
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      ></Input>
                    </InputGroup>

                    <InputGroup className={"no-border input-lg" + (firstFocus ? " input-group-focus" : "")}>
                      <InputGroupAddon addonType="prepend">
                        
                        <InputGroupText>
                        <i className="now-ui-icons ui-1_lock-circle-open" style={{color:"white"}}></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Confirme su contraseña"
                        type="password"
                        onFocus={() => setLastFocus(true)}
                        onBlur={() => setLastFocus(false)}
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                      ></Input>
                    </InputGroup>
                  </CardBody>
                  
                  <InputGroup className={"no-border input-lg"}>
                    </InputGroup>

                  <form style={ {width: 'auto'}}>
                    <div >
                      <input type="radio" id="estudiante" name="opciones" value="estudiante" 
                      checked={isStudent}
                      onChange={handleIsStudentChange}/>
                      <label for="estudiante">Soy Estudiante</label>

                      <input style={{marginLeft: '40px'}} type="radio" id="maestro" name="opciones" value="maestro"
                      checked={isTeacher}
                      onChange={handleIsTeacherChange}/>
                      <label  for="maestro"> Soy Maestro</label>
  
                      <input style={{marginLeft: '40px'}} type="radio" id="visita" name="opciones" value="visita"
                      checked={isVisitor}
                      onChange={handleIsVisitorChange}/>
                      <label  for="visita"> Soy Visitante</label>
                    </div>
                  </form>
                </Form>
                <br/>
                <Button style={{backgroundColor: "#1346d9", color: "#fff"}}
                    block
                    className="btn-round"
                    onClick={() => {
                    if (validarRegistro()) {
                      alert("Registro exitoso!");
                      // Aquí podrías enviar los datos del formulario a tu servidor para registrar al usuario
                    }
                  }}
                    size="lg">
                    <strong> Registrarme </strong>
              </Button>
              <br/>
              <InputGroup className={"border input-lg" + (lastFocus ? " input-group-focus" : "")}>
              </InputGroup>
              <br/>
              <Container>
                <div className="iniciasesion">
                <strong className="infoiniciar" style={{color: 'white'}}>¿Ya tienes una cuenta?</strong>
                <a href="/login-page" style={{color: '#F6FB5D', textDecoration: 'underline'}}> Inicia sesión!</a>
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

export default Register;