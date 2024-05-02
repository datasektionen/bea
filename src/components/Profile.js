import React from "react";
import '../style/App.css';
function Profile(props) {
    const media = props.media; /* Om median */
    if (media) {
    return (
        <div>
        <h3>{props.role}</h3>
        <p>{props.name}</p>
        <p>{props.email}@medieteknik.se</p>
    </div>)
    }
    return (
        <div>
        <h3>{props.role}</h3>
        <p>{props.name}</p>
        <p>{props.email}@datasektionen.se</p>
    </div>)

}

export default Profile;