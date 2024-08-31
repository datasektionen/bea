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
export type Role = (typeof sortedRoles)[number];

export type RolesInfo = Record<Role, { slug: Role; name: string; description?: React.ReactNode }>;
export const rolesInfo: RolesInfo = {
    'konglig-lokalchef-data': {
        slug: 'konglig-lokalchef-data',
        name: 'Konglig Lokalchef (Data)',
        description:
            'Konglig Lokalchef ansvarar för sektionslokalen och leder METAdorerna tillsammmans med Sektionslokalsansvarig (post vid Sektionen för Medieteknik). Konglig Lokalchef arbetar mycket med att utveckla och förbättra sektionslokalen samt se till att den förblir ett välkomnande och trevligt utrymme för våra medlemmar att vistas i. ',
    },
    'sektionslokalsansvarig-media': {
        slug: 'sektionslokalsansvarig-media',
        name: 'Sektionslokalsansvarig (Media)',
        description:
            'Sektionslokalsansvarig är medias motsvarighet till Konglig Lokalchef och arbetar tillsammans med denne för att sköta och utveckla sektionslokalen.',
    },
    stadskrii: {
        slug: 'stadskrii',
        name: 'Städskrii',
        description:
            'Städskrii ansvarar för att se till att sektionslokalen är ren och fin, genom att hålla i måndagsstäd och avsluta året med en episk städfest!',
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
        name: 'Hederlige Stures efterträdare',
        description:
            'Hederlige Stures efterträdare (Läskkylsansvarig) ansvarar för att se till att läskkylen är fylld och att det finns gott om läsk och snacks!',
    },
    dlol: {
        slug: 'dlol',
        name: 'd-Lol',
        description:
            'd-Lol (Ljud- Och Ljusansvarig) har till uppgift att underhålla sektionens ljud- och ljusutrustning.',
    },
    maestro: {
        slug: 'maestro',
        name: 'Maestro',
        description: 'Maestro (Master At Expressing Stuff To Receivers Online)',
    },
    mario: {
        slug: 'mario',
        name: 'Mario',
        description:
            'Mario (Master At Repairing Inventory Objects) ansvarar för att reparera saker i META, hålla koll på när de behöver lagas och sköta felanmälningar.',
    },
    mister: {
        slug: 'mister',
        name: 'Mister',
        description:
            'Mister (Master of Inventory, Screws, Tools, Equipment and Resources) ansvarar för att hålla ordning på META:s inventarier och köpa in när det behövs.',
    },
    misty: {
        slug: 'misty',
        name: 'Misty',
        description:
            'Misty ansvarar för att det ska finnas kaffe, te och tillbehör i META. Får till exempel välja vilka téer som ska finnas. Ansvarar även för att kaffebryggaren och vattenkokare fungerar.',
    },
    mog: {
        slug: 'mog',
        name: 'Mog',
        description: 'Mog (Master Of Graphics) MOGA BOGA!',
    },
    moms: {
        slug: 'moms',
        name: 'Moms',
        description:
            'Moms (Master Of Mötesrummets Stuff) ansvarar för mötesrummet och att de som bokar lämnar det snyggt efter sig. Om någon som bokar inte sköter sig så meddelar man lokalcheferna.',
    },
    money: {
        slug: 'money',
        name: 'Money',
        description: 'Money (Master Of Negotiations, Equity and Yields)',
    },
    mopp: {
        slug: 'mopp',
        name: 'Mopp',
        description:
            'Mopp (Master Of Parties and Punsch) ansvarar för att planera och utföra merparten av våra teambuildings. Har för det mesta helt fria händer men bör hålla sig inom budget...',
    },
    movie: {
        slug: 'movie',
        name: 'Movie',
        description:
            'Movie (Master of Vegetation In Establishment) ansvarar för växterna i META. T.ex. ansvarar för att de vattnas och ser till att de överlever läsåret. Movie ansvarar även för att växterna tas hem under sommaren och ser till så att de överlever där också.',
    },
    moist: {
        slug: 'moist',
        name: 'Moist',
        description: 'Moist (Master Of Internal Storage™)',
    },
    mucka: {
        slug: 'mucka',
        name: 'Mucka',
        description:
            'Mucka (Master of Utilization, Catwalk and Krap Annihilation) ansvarar för ??? oklart. Har som huvuduppgift att hålla koll på catwalken, lost and found, hallen och området kring mikrovågsugnarna.',
    },
    mums: {
        slug: 'mums',
        name: 'Mums',
        description:
            'Mums (Master Uf Magnifika Sötsaker) ansvarar för att ta med sig fika till alla fredagsmöten. Får både välja vilken saft och kakor/frukt som vi andra får.',
    },
    matrix: {
        slug: 'matrix',
        name: 'Matrix',
        description: 'Matrix (Masters At Tech Rituals In Xyberspace)',
    },
};
