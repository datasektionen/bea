import React from "react";
import '../style/App.css';
import Info from "../components/Info";
function Meta() {
    return(
        <div className="main">
            <Info title="META"/>
            <div className="info-box">
            <p>Här hittar du allmän information om META.</p>
            <h2>Bokning av META</h2>
            <p>För att boka META besöker du in på <a href="bokning.datasektionen.se">bokning.datasektionen.se</a> <br></br> Bokningar godkänns av lokalchef.</p>
            <h2>Bordsplacering</h2>
            <p><a href="/">Här</a> hittar du en länk till bordsplaceringen i META. Efter bokning ska borden ställas tillbaka enligt den.</p>       
        </div>
        </div>
    );
}

export default Meta;