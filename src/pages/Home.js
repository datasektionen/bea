import React from "react";
import '../style/App.css';
import Info from "../components/Info";
function Home () {
    return (
        <div className="main">
        <Info title="Välkommen till METAdorernas sida!"/>
        <div className="info-box">
            <h3>Leveransadress</h3>
            <p>Osquars Backe 21 (RÄTTA MIG OM JAG HAR FEL)</p>
        </div>
        </div>
    )
}

export default Home;