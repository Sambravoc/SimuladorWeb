import React from "react";

// Components

import {
    Button,
    // Input,
    // InputGroupAddon,
    // InputGroupText,
    // InputGroup,
    //Container,
    // Row,
    // Col
    } from "reactstrap";

import IndexNavbar from "components/Navbars/LandingNavbar";
import DarkFooter from "components/Footers/DarkFooter";

function SimuladorPM(){

    React.useEffect(() => {
        document.body.classList.add("simuladorPM");
        window.scrollTo(0, 0);
        document.body.scrollTop = 0;
        return function cleanup() {
        document.body.classList.remove("simuladorPM");
        document.body.classList.remove("sidebar-collapse");
        };
    }, []);
    return (
        <>
        <IndexNavbar/>
        <h1 className="display-4 " style={{marginTop: '100px', textAlign: 'center'}}>Simulador Promedios Móviles</h1>
                <div >
                    <button className="btn-inf">1er Promedio Movil</button><br></br>
                    <button className="btn-inf" >2do Promedio Movil</button><br></br>
                    <button className="btn-inf" >Promedio Movil Doble</button><br></br>
                    <button className="btn-inf" >Promedio Movil Ponderado</button><br></br>
                </div>
                <div>
                <Button  className="btn-simu" href="/informacion-simulador" > Información </Button><br></br>
                <Button  className="btn-simu" style={{height: '100px'}} href="/simulador-SE" > Simulador Suavización Exponencial </Button>
                </div>
        <DarkFooter/>
        </>
    )
}
export default SimuladorPM;