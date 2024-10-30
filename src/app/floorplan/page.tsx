import React from 'react';
import Info from '@/components/Info';
import FloorPlan from './components/FloorPlan';
import Image from 'next/image';

export default function FloorPlanPage() {
    return (
        <div className="main">
            <Info title="META bordsplacering">
            <FloorPlan />
                <div style={{position: 'relative'}}>
                    <div style={{position: 'absolute', pointerEvents: 'none', opacity: 0}}>
                        <Image src={'/OLD_META_BORDSPLACERING_2022.png'} width={5056} height={3792} alt='floorplan' style={{width: '1000px', height: 'auto'}} />
                    </div>
                    <div style={{position: 'absolute', opacity: 0, width: '1000px'}}>
                        <FloorPlan />
                    </div>
                </div>
                
            </Info>
        </div>
    );
}
