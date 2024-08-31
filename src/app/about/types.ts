export interface Person {
    name: string;
    email: string;
    emailType: 'data' | 'media' | 'custom';
}

export const sortedRoles = [
    'konglig-lokalchef-data',
    'sektionslokalsansvarig-media',
    'stadskrii',
    'laskkylsansvarig',
    'dlol',
    'maestro',
    'mario',
    'mister',
    'misty',
    'moba',
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
    laskkylsansvarig: {
        slug: 'laskkylsansvarig',
        name: 'Läskkylsansvarig',
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
    moba: {
        slug: 'moba',
        name: 'Moba',
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
