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

function SimuladorSE(){

    React.useEffect(() => {
        document.body.classList.add("simuladorSE");
        window.scrollTo(0, 0);
        document.body.scrollTop = 0;
        return function cleanup() {
        document.body.classList.remove("simuladorSE");
        document.body.classList.remove("sidebar-collapse");
        };
    }, []);
    return (
        <>
        <IndexNavbar/>
        <h1 className="display-4 " style={{marginTop: '100px', textAlign: 'center'}}>Simulador Suavización Exponencial</h1>
                <div >
                    <button className="btn-inf" >Simple Brown</button><br></br>
                    <button className="btn-inf" >Doble Holt</button><br></br>
                    <button className="btn-inf" >Triple Winter</button><br></br>
                </div>
                <div>
                <Button  className="btn-simu" href="/informacion-simulador" > Información </Button><br></br>
                <Button  className="btn-simu" style={{height: '100px'}} href="/simulador-PM" > Simulador Promedios Móviles</Button>
                </div>
        <DarkFooter/>
        </>
    )
}
export default SimuladorSE;