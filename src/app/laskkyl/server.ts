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
            /* {
                name: 'Bubbelvatten',
                price: 8,
            }, */
            /*{
                name: 'Kong Strong',
                price: 8,
            },*/
            // {
            //     name: 'Hell!!',
            //     price: 5,
            // },
            {
                name: 'ISH Spirits',
                price: 3,
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
                name: 'Corny Big',
                price: 10,
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
                name: 'Zoo-ask',
                price: 6,
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
