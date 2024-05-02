import React from "react";
import '../style/App.css'
import Info from "../components/Info";
function Schedule (){
    return(<div className="main">
        <Info title="Schedule"/>
        <div className="info-box">
            <h3>Här är ett schema över saker som händer.</h3>

        </div>
    </div>)
}

export default Schedule;