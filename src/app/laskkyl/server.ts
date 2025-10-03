'use server';

import { LaskkylData } from './types';

export async function getLaskkylData() {
    return laskkylData;
}

const laskkylData: LaskkylData = {
    products: {
        drinks: [
            {
                name: 'Pepsi',
                price: 8,
            },
            {
                name: 'Skull Energy',
                price: 7,
            },
            /*{
                name: 'Fruktdryck',
                price: 5,
            },*/
            {
                name: 'Julmust',
                price: 8,
            }, 
            {
                name: 'KONG XXL',
                price: 10,
            },
            {
                name: 'Capri-Sun',
                price: 5,
            },
            // {
            //     name: 'Hell!!',
            //     price: 5,
            // },
            {
                name: 'ISH Spirits',
                price: 2,
            },
        ],
        snacks: [
            {
                name: 'Wasa Knäcke',
                price: 10,
            },
            // {
            //     name: 'Risifrutti',
            //     price: 13,
            // },
            {
                name: 'Pingvinstång',
                price: 6,
            },
            {
                name: 'Twix',
                price: 8,
            },
            {
                name: 'Mars',
                price: 8,
            },
            {
                name: 'Lion',
                price: 8,
            },
            {
                name: 'KEX choklad',
                price: 3,
            },
            /*{
                name: 'Müslibar',
                price: 4,
            },*/
        ],
        other: [],
    },
};
