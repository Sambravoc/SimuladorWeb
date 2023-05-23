import React, { useRef, useState } from "react";
import { Button } from "reactstrap";
import IndexNavbar from "components/Navbars/LandingNavbar";
import DarkFooter from "components/Footers/DarkFooter";

function SimuladorPM() {
  const fileInputRef = useRef(null);
  const [uploadedFile, setUploadedFile] = useState(null);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    const fileType = file.type;
    if (fileType === "text/csv") {
      console.log("Archivo CSV subido:", file);
      setUploadedFile(file);
    } else {
      alert("Por favor, selecciona un archivo en formato CSV.");
    }
  };

  const handleChooseFile = () => {
    fileInputRef.current.click();
  };

  const handleDeleteFile = () => {
    setUploadedFile(null);
  };

  const handleEquation1 = () => {
    // Implementa la lógica para la ecuación 1 aquí
  };

  const handleEquation2 = () => {
    // Implementa la lógica para la ecuación 2 aquí
  };

  const handleEquation3 = () => {
    // Implementa la lógica para la ecuación 3 aquí
  };

  return (
    <>
      <IndexNavbar />
      <h1 className="display-4" style={{ marginTop: "100px", textAlign: "center" }}>
        Simulador Promedios Móviles
      </h1>
      <div>
    <Button
            className={`btn-subir ${uploadedFile ? 'uploaded-file-button' : ''}`}
            onClick={handleChooseFile}
            >
            {uploadedFile ? (
                <i className="now-ui-icons files_single-copy-04" style={{ color: "white", marginRight: "5px" }} />
            ) : (
                <i className="now-ui-icons arrows-1_share-66" style={{ color: "white", marginRight: "5px" }} />
            )}
            {uploadedFile ? uploadedFile.name : "Subir Archivo (CSV)"}
    </Button>


        {uploadedFile && (
          <div className="uploaded-file-container">
            <button className="delete-file-button" onClick={handleDeleteFile}>
              Eliminar
            </button>
          </div>
        )}
        <input
          ref={fileInputRef}
          type="file"
          accept=".csv"
          style={{ display: "none" }}
          onChange={handleFileUpload}
        />
      </div>
      <div>
        <button className="btn-inf" onClick={handleEquation1}>
          1er Promedio Movil
        </button>
        <br />
        <button className="btn-inf" onClick={handleEquation2}>
          2do Promedio Movil
        </button>
        <br />
        <button className="btn-inf" onClick={handleEquation3}>
          Promedio Movil Doble
        </button>
        <br />
        <button className="btn-inf" onClick={handleEquation3}>
          Promedio Movil Ponderado
        </button>
        <br />
      </div>
      <div>
        <Button className="btn-simu" href="/informacion-simulador">
          Información
        </Button>
        <br />
        <Button className="btn-simu" style={{ height: "100px" }} href="/simulador-SE">
          Simulador Suavización Exponencial
        </Button>
      </div>
      <DarkFooter />
    </>
  );
}

export default SimuladorPM;
