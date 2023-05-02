import React from "react";

// Components

import {
    Button,
    Col,
    Row
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
                <div className="contenedor">
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
                        <h1 className="text-btn ">"Lorem ipsum dolor sit amet, 
                        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat 
                        nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
                        mollit anim id est laborum.Lorem ipsum dolor sit amet, 
                        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat 
                        nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
                        mollit anim id est laborum."</h1>
                        <Button  className="btn-simu" href="/simulador-pm" > Ir al simulador </Button>
                    </div>
                </div>
                

            </div>
        </div>
        <DarkFooter/>
        </>
    )
}
export default InfoSimPage;