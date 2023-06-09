import React from "react";
import InfoSimulador from 'pages/info';

// Components
import {
  Collapse,
  NavbarBrand,
  Navbar,
  Nav,
  Container,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

function IndexNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("bg-azul");
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 399 ||
        document.body.scrollTop > 399
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 400 ||
        document.body.scrollTop < 400
      ) {
        setNavbarColor("bg-azul");
      }
    };
    window.addEventListener("scroll", updateNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <>
      {collapseOpen ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setCollapseOpen(false);
          }}
        />
      ) : null}
      <Navbar className={"fixed-top " + navbarColor} expand="lg">
        <Container>
          <div>
            <NavbarBrand
              href="/" id="navbar-brand">
              <strong style={{fontSize: "16px"}}>INICIO</strong>
            </NavbarBrand>
            <button
              className="navbar-toggler navbar-toggler"
              onClick={() => {
                document.documentElement.classList.toggle("nav-open");
                setCollapseOpen(!collapseOpen);
              }}
              aria-expanded={collapseOpen}
              type="button"
            >
              <span className="navbar-toggler-bar top-bar"></span>
              <span className="navbar-toggler-bar middle-bar"></span>
              <span className="navbar-toggler-bar bottom-bar"></span>
            </button>
          </div>
          <Collapse
            className="justify-content-end"
            isOpen={collapseOpen}
            navbar
          >
              <Nav navbar>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret color="info" style={{fontSize: "16px"}}>
                  <strong>NOSOTROS</strong>
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem style={{fontSize: "13px"}} target="_blank"  href="https://sites.google.com/ucol.mx/caucol-116-sistemas-electricos/grupo/marco-antonio-pérez-gonzález?authuser=0">
                    ¡Visita nuestra página!
                  </DropdownItem>
                  <DropdownItem href="/landing-page" style={{fontSize: "13px"}} onClick={() => <InfoSimulador />}>
                    Acerca del Simulador
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default IndexNavbar;
