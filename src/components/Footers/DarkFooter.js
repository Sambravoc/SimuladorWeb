/*eslint-disable*/
import React from "react";

//Components
import { Container } from "reactstrap";

function DarkFooter() {
  return (
    <footer className="footer clear-filter" style={{backgroundImage: "linear-gradient(to top, #1346d9, rgba(255, 255, 255, 0))"}}>
      <Container>
        <div className="copyright" id="copyright">
          © {new Date().getFullYear()},  {" "}
          <a
            href="https://www.ucol.mx"
            target="_blank"
            style={{color: '#F6FB5D', textDecoration: 'underline'}}
          >
            Universidad de Colima
          </a>
        </div>
      </Container>
    </footer>
  );
}

export default DarkFooter;
