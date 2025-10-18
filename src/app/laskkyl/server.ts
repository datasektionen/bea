'use server';

import { LaskkylData } from './types';

export async function getLaskkylData() {
    return laskkylData;
}

const laskkylData: LaskkylData = {
    products: {
        drinks: [
            {
                name: 'Coca-Cola',
                price: 8,
            },
            {
                name: 'Energi 250 ml',
                price: 7,
            },
            /*{
                name: 'Fruktdryck',
                price: 5,
            },*/
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
            // {
            //     name: 'Risifrutti',
            //     price: 13,
            // },
            {
                name: 'Pingvinstång',
                price: 6,
            },
            {
                name: 'Kit-Kat',
                price: 8,
            },
            {
                name: 'Marsbar',
                price: 8,
            },
            {
                name: 'Lionbar',
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
