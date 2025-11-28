'use server';

import { LaskkylData } from './types';

export async function getLaskkylData() {
    return laskkylData;
}

const laskkylData: LaskkylData = {
    products: {
        drinks: [
            {
                name: 'Burkläsk ❤️',
                price: 8,
            },
            {
                name: 'Energi ⚡️ 250 ml',
                price: 8,
            },
            {
                name: 'Julmust 🧑‍🎄',
                price: 7,
            },
            /*{
                name: 'BIG KONG',
                price: 10,
            },*/
            {
                name: 'Capri-Sun ☀️',
                price: 6,
            },
            {
                name: 'Fejkis 😎',
                price: 6,
            },
            // {
            //     name: 'Hell!!',
            //     price: 5,
            // },
            //{
            //    name: 'ISH Spirits 🌲',
            //    price: 2,
            //},
        ],
        snacks: [
            {
                name: 'Pingvinstång 🐧',
                price: 6,
            },
            {
                name: 'Japp 👍',
                price: 8,
            },
            {
                name: 'Lionbar 🦁',
                price: 8,
            },
            {
                name: 'Kit-Kat 😻',
                price: 8,
            },
            /*{
                name: 'Twix 🤯',
                price: 8,
            },
            {
                name: 'Kexchoklad 🙃',
                price: 4,
            },
            {
                name: 'Corny BIG',
                price: 8,
            },*/
        ],
        other: [],
    },
};
