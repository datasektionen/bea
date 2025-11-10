'use server';

import { LaskkylData } from './types';

export async function getLaskkylData() {
    return laskkylData;
}

const laskkylData: LaskkylData = {
    products: {
        drinks: [
            {
                name: 'Coca-Cola ❤️',
                price: 7,
            },
            {
                name: 'Energi ⚡️ 250 ml',
                price: 7,
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
                name: 'CaPri-Sun ☀️',
                price: 6,
            },
            {
                name: 'Fejkis 😎',
                price: 5,
            },
            // {
            //     name: 'Hell!!',
            //     price: 5,
            // },
            {
                name: 'ISH Spirits 🌲',
                price: 2,
            },
        ],
        snacks: [
            {
                name: 'Pingvinstång 🐧',
                price: 6,
            },
            {
                name: 'Marsbar 👍',
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
            {
                name: 'Twix 🤯',
                price: 8,
            },
            {
                name: 'Kexchoklad 🙃',
                price: 4,
            },
            /*{
                name: 'Corny BIG',
                price: 8,
            },*/
        ],
        other: [
            {
                name: 'Chips 🔫',
                price: 8,
            },
            {
                name: 'Nu ingår en ISH vid varje köp! 💙',
                price: 0
            },
        ],
    },
};
