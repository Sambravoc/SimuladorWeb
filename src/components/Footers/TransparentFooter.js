/*eslint-disable*/
import React from "react";

//Components
import { Container } from "reactstrap";

function TransparentFooter() {
  return (
    <footer className="footer">
      <Container>
        <div className="copyright" id="copyright">
          © {new Date().getFullYear()},{" "}
          <a href="https://www.ucol.mx" target="_blank" style={{color: 'white', textDecoration: 'underline'}}>
            Universidad de Colima
          </a>
        </div>
      </Container>
    </footer>
  );
}

export default TransparentFooter;
