export interface Person {
    name: string;
    email: string;
    emailType: 'data' | 'media' | 'custom';
}

export const sortedRoles = [
    'konglig-lokalchef-data',
    'sektionslokalsansvarig-media',
    'stadskrii',
    'arkadmicke',
    'flippermicke',
    'laskkylsansvarig',
    'dlol',
    'maestro',
    'mario',
    'mister',
    'misty',
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
        description: 'Städskrii ansvarar för måndagsstäden och anordnar städfesten i maj.',
    },
    arkadmicke: {
        slug: 'arkadmicke',
        name: 'Arkadmicke',
        description: 'Arkadmicke ansvarar för förvaltning och uppgradering av drifvarkaden i META.',
    },
    flippermicke: {
        slug: 'flippermicke',
        name: 'Flippermicke',
        description: 'Flippermicke ansvarar för förvaltning och uppgradering av flipperspelet i META.',
    },
    laskkylsansvarig: {
        slug: 'laskkylsansvarig',
        name: 'Hederlige Stures efterträdare',
        description:
            'Hederlige Stures efterträdare (Läskkylsansvarig) ansvarar för läskkylen och allt som har med den att göra. HSE bestämmer utbudet, prissättning och betalningssystem.',
    },
    dlol: {
        slug: 'dlol',
        name: 'd-LoL',
        description:
            'd-LoL (Ljud- Och Ljusansvarig) har till uppgift att underhålla sektionens ljud- och ljusutrustning.',
    },
    maestro: {
        slug: 'maestro',
        name: 'Maestro',
        description:
            'Maestro (Master At Expressing Stuff To Receivers Online) ansvarar för PR och grafik. Sprider information till resten av sektionen och designar lappar som sitter runtom i META. Har även uppgiften att fotografera under event för att lägga upp det i våra grupper.',
    },
    mario: {
        slug: 'mario',
        name: 'Mario',
        description:
            'Mario (Master At Repairing Inventory Objects) ansvarar för att reparera saker i META, samt hålla koll på när de behöver lagas, vanligtvis stolar. Har även ansvar för felanmälningar i META.',
    },
    mister: {
        slug: 'mister',
        name: 'Mister',
        description:
            'Mister (Master of Inventory, Screws, Tools, Equipment and Resources) ansvarar för inköp av saker som inte är större inventarier, exempelvis toalettpapper och diskmedel. Bör ha någorlunda kolla på vad som finns i META.',
    },
    misty: {
        slug: 'misty',
        name: 'Misty',
        description:
            'Misty (Master In Supplying Tea and Yava) ansvarar för inköpet och underhållet av te, kaffe och mensskydd i META. Ser till att det alltid finns och att relaterade maskiner hålls rena och fräscha.',
    },
    moms: {
        slug: 'moms',
        name: 'Moms',
        description:
            'Moms (Master Of Mötesrummets Stuff) ansvarar för mötesrummet och att de som bokar lämnar det snyggt efter sig.',
    },
    money: {
        slug: 'money',
        name: 'Money',
        description:
            'Money (Master Of Negotiations, Equity and Yields) ansvarar för den ekonomiska sidan av METAdorerna, exempelvis bokföring och attestering. Ser även till att budgeten följs ordentligt.',
    },
    mopp: {
        slug: 'mopp',
        name: 'Mopp',
        description:
            'Mopp (Master Of Parties and Punsch) ansvarar för att planera och utföra teambuildings, event och sittningar. Har för det mesta helt fria händer men bör hålla sig inom budget.',
    },
    movie: {
        slug: 'movie',
        name: 'Movie',
        description:
            'Movie (Master of Vegetation In Establishment) ansvarar för växterna i META. Ansvarar för att de vattnas och ser till att de överlever läsåret. MOVIE ansvarar även för att växterna tas hem under sommaren och ser till så att de överlever där också.',
    },
    moist: {
        slug: 'moist',
        name: 'Moist',
        description:
            'Moist (Master Of Internal Storage™) ansvarar för förrådet i META. Ser till att det är städat, regler följs och att saker är lättillgängliga.',
    },
    mucka: {
        slug: 'mucka',
        name: 'Mucka',
        description:
            'Mucka (Master of Utilization, Catwalk and Krap Annihilation) ansvarar för catwalken, "lost and found", hallen, anslagstavlan och panten. Ser till att catwalken står kvar, tömmer "lost and found" när det blir fullt, tar bort lappar från anslagstavlan och pantar när det är fullt.',
    },
    mums: {
        slug: 'mums',
        name: 'Mums',
        description: 'Mums (Master Uf Magnifika Sötsaker) ansvarar för att köpa in fika till fredagsmötet.',
    },
    matrix: {
        slug: 'matrix',
        name: 'Matrix',
        description:
            'Matrix (Masters At Tech Rituals In Xyberspace) ansvarar för utvecklingen och underhållandet av denna hemsida.',
    },
};
