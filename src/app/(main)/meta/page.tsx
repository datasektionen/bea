import React from 'react';
import Info from '@/components/Info';
import FloorPlan from '@/app/floorplan/components/FloorPlan';

export default function Meta() {
    return (
        <div className="main">
            <Info title="META">
                <p>Här hittar du allmän information om META.</p>
                <h2>Bokning av META</h2>
                <p>
                    För att boka META besöker du in på <a href="bokning.datasektionen.se">bokning.datasektionen.se</a>{' '}
                    <br></br> Bokningar godkänns av lokalchef.
                </p>
                <h2>Bordsplacering</h2>
                <p>
                    Nedan ser du bordsplaceringen i META. Efter bokning ska borden ställas
                    tillbaka enligt den.
                </p>
                <FloorPlan />
            </Info>
        </div>
    );
}
