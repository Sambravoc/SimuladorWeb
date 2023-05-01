import React from "react";

// Components

import {
    Button,
    // Input,
    // InputGroupAddon,
    // InputGroupText,
    // InputGroup,
    // Container,
    // Row,
    // Col
    } from "reactstrap";

import IndexNavbar from "components/Navbars/LandingNavbar";
import DarkFooter from "components/Footers/DarkFooter";

function InfoSimPage(){

    React.useEffect(() => {
        document.body.classList.add("info-page");
        window.scrollTo(0, 0);
        document.body.scrollTop = 0;
        return function cleanup() {
        document.body.classList.remove("info-page");
        document.body.classList.remove("sidebar-collapse");
        };
    }, []);
    return (
        <>
        <IndexNavbar/>
        <div >
            <div className="" style={{marginBottom: '80px'}}>
                <h1 className="display-4 " style={{marginTop: '160px', textAlign: 'center'}}>Simulador StatCast</h1>
                <div >
                    <button className="btn-inf">1er Promedio Movil</button><br></br>
                    <button className="btn-inf" >2do Promedio Movil</button><br></br>
                    <button className="btn-inf" >Promedio Movil Doble</button><br></br>
                    <button className="btn-inf" >Promedio Movil Ponderado</button><br></br>
                    <button className="btn-inf" >Simple Brown</button><br></br>
                    <button className="btn-inf" >Doble Holt</button><br></br>
                    <button className="btn-inf" >Triple Winter</button><br></br>

                </div>

                <div>
                <Button  className="btn-simu" href="/simulador-pm" > Ir al simulador </Button>
                </div>

            </div>
        </div>
        <DarkFooter/>
        </>
    )
}
export default InfoSimPage;