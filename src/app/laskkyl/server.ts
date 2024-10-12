'use server';

import { LaskkylData } from './types';

export async function getLaskkylData() {
    return laskkylData;
}

const laskkylData: LaskkylData = {
    products: {
        drinks: [
            {
                name: 'Läsk',
                price: 8,
            },
            {
                name: 'Bubbelvatten',
                price: 8,
            },
            {
                name: 'Kong Strong',
                price: 8,
            },
        ],
        snacks: [
            {
                name: 'Risifrutti',
                price: 14,
            },
            {
                name: 'Pingvinstång',
                price: 5,
            },
        ],
        other: [],
    },
};
