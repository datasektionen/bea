import Info from "../components/Info";
import React from "react";
import Profile from "../components/Profile";
import '../style/App.css'
function About() {
    return(
<div className="main">
            <Info title="Vilka är METAdorerna?"/>
            <div className="info">
            <p>Här hittar du information och kontaktuppgifter till internfunktionärsposterna.</p>
            <p>Vill du gå med? Fyll i formuläret här: <a href="/#">länk</a></p></div>
            <div className="roles">
                    <Profile role="Konglig Lokalchef (Data)" name="Carl Liljencrantz" email="lokalchef"/>
                    <Profile role="Sektionslokalsansvarig (Media)" name="Vanessa Baatarsukh" email="sektionslokal" media={true}/>
                    <Profile role="Städskrii (Data)" name="Förnamn Efternamn" email=""/>
                    <Profile role="Städskrii (Media)" name="Förnamn Efternamn" email=""/>
                    <Profile role="Läskkylsansvarig" name="Förnamn Efternamn" email=""/>

                    <Profile role="dLol" name="Karl-Isac Åström" email="dlol"/>
                
                    <Profile role="Maestro" name="Förnamn Efternamn" email=""/>
                
                    <Profile role="Mario" name="Förnamn Efternamn" email=""/>
                
                    <Profile role="Mister" name="Förnamn Efternamn" email=""/>
                
                    <Profile role="Misty" name="Förnamn Efternamn" email=""/>
               
                    <Profile role="Moba" name="Förnamn Efternamn" email=""/>
                
                    <Profile role="Moms" name="Förnamn Efternamn" email=""/>
                
                    <Profile role="Money" name="Förnamn Efternamn" email=""/>
                
                    <Profile role="Mopp" name="Förnamn Efternamn" email=""/>
                
                    <Profile role="Movie" name="Förnamn Efternamn" email=""/>
                
                    <Profile role="Moist" name="Förnamn Efternamn" email=""/>
               
                    <Profile role="Mucka" name="Förnamn Efternamn" email=""/>
                
                    <Profile role="Mums" name="Förnamn Efternamn" email=""/>
                
                    <Profile role="Matrix" name="Förnamn Efternamn" email=""/>
            </div></div>

    );
}

export default About;