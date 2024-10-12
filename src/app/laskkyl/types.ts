export const LaskkylTypes = ['drinks', 'snacks', 'other'] as const;
type LaskkylTypes = (typeof LaskkylTypes)[number];

interface Product {
    name: string;
    price: number;
}

export interface LaskkylData {
    products: Record<LaskkylTypes, Product[]>;
}

export enum LaskkylTypetoString {
    drinks = '🍹 Dryck 🥤',
    snacks = '🍫 Snacks 🍎',
    other = '🤔 Övrigt ⚙️',
}

export enum LaskkylTypetoGif {
    drinks = '/dryck.gif',
    snacks = '/snacks.gif',
    other = '',
}
