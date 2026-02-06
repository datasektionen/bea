'use server';

import { LaskkylData } from './types';

export async function getLaskkylData() {
    return laskkylData;
}

const laskkylData: LaskkylData = {
    products: {
        drinks: [
            {
                name: 'BOOM Energy⚡️',
                price: 8,
            },
            {
                name: 'KONG Worms 🪱',
                price: 10,
            },
            {
                name: 'Coca Cola ❄️',
                price: 8,
            },
            {
                name: '{{högtid}}must',
                price: 8,
            },
            /*{
                name: 'Capri-Sun ☀️',
                price: 6,
            },*/
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
            {
                name: 'Flapjack 🥞',
                price: 8,
            },
            {
                name: 'Sesamkakor ❌🥜',
                price: 5,
            },
            {
                name: 'Kexchoklad 🙃',
                price: 4,
            },
            /*
            {
                name: 'Twix 🤯',
                price: 8,
            },            
            {
                name: 'Corny BIG',
                price: 8,
            },*/
        ],
        other: [],
    },
};
