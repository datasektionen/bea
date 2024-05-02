import React from "react";
import '../style/App.css';
function Info(props) {
    return (<>
        <h1 className="page-title">{props.title}</h1>
        <p>{props.text}</p>
    </>)
}

export default Info;