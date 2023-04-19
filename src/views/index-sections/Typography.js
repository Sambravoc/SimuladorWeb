import React from "react";

// reactstrap components
import { Container } from "reactstrap";

// core components

function Typography() {
  return (
    <>
      <div className="section">
        <Container>
          <h3 className="title">Objetivo</h3>
                  <p>
                    El objetivo del simulador web es evaluar y aplicar métodos estadísticos para  hacer el análisis y el pronóstico de las curvas 
                    características de perfiles de consumo energético. Estas curvas pueden ser utilizadas para analizar patrones de consumo de energía
                    y para predecir la demanda futura de energía.</p>
                  <br />
                  <p> 
                    Una vez ingresando al simulador, podrás encontrar diferentes opciones para su uso, eligiendo diferentes opciones de 
                    modelo, así como método de ajuste/pronóstico y utilizar datos datos reales de consumo energético.
                  </p>
        </Container>
      </div>
    </>
  );
}

export default Typography;
