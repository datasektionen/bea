export interface Person {
    name: string;
    email: string;
    emailType: 'data' | 'media' | 'custom';
}

export const sortedRoles = [
    'konglig-lokalchef-data',
    'sektionslokalsansvarig-media',
    'stadskrii',
    'flippermicke',
    'arkadmicke',
    'laskkylsansvarig',
    'dlol',
    'maestro',
    'mario',
    'mister',
    'misty',
    'mog',
    'moms',
    'money',
    'mopp',
    'movie',
    'moist',
    'mucka',
    'mums',
    'matrix',
] as const;
export type Roles = (typeof sortedRoles)[number];

export type RolesInfo = Record<Roles, { slug: Roles; name: string; description?: string }>;
export const rolesInfo: RolesInfo = {
    'konglig-lokalchef-data': {
        slug: 'konglig-lokalchef-data',
        name: 'Konglig Lokalchef (Data)',
    },
    'sektionslokalsansvarig-media': {
        slug: 'sektionslokalsansvarig-media',
        name: 'Sektionslokalsansvarig (Media)',
    },
    stadskrii: {
        slug: 'stadskrii',
        name: 'Städskrii',
    },
    flippermicke: {
        slug: 'flippermicke',
        name: 'Flippermicke',
    },
    arkadmicke: {
        slug: 'arkadmicke',
        name: 'Arkadmicke',
    },
    laskkylsansvarig: {
        slug: 'laskkylsansvarig',
        name: 'Hederlige Stures efterträdare (Läskkylsansvarig)',
    },
    dlol: {
        slug: 'dlol',
        name: 'dLol',
    },
    maestro: {
        slug: 'maestro',
        name: 'Maestro',
    },
    mario: {
        slug: 'mario',
        name: 'Mario',
    },
    mister: {
        slug: 'mister',
        name: 'Mister',
    },
    misty: {
        slug: 'misty',
        name: 'Misty',
    },
    mog: {
        slug: 'mog',
        name: 'Mog',
    },
    moms: {
        slug: 'moms',
        name: 'Moms',
    },
    money: {
        slug: 'money',
        name: 'Money',
    },
    mopp: {
        slug: 'mopp',
        name: 'Mopp',
    },
    movie: {
        slug: 'movie',
        name: 'Movie',
    },
    moist: {
        slug: 'moist',
        name: 'Moist',
    },
    mucka: {
        slug: 'mucka',
        name: 'Mucka',
    },
    mums: {
        slug: 'mums',
        name: 'Mums',
    },
    matrix: {
        slug: 'matrix',
        name: 'Matrix',
    },
};
