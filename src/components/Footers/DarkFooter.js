/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

function DarkFooter() {
  return (
    <footer className="footer" data-background-color="black">
      <Container>
        <div className="copyright" id="copyright">
          © {new Date().getFullYear()},  {" "}
          <a
            href="https://www.ucol.mx"
            target="_blank"
          >
            Universidad de Colima
          </a>
        </div>
      </Container>
    </footer>
  );
}

export default DarkFooter;
