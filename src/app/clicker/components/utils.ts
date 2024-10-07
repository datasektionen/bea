const cookieSpeedMap: Record<number, number> = {
    1: 22,
    2: 18,
    3: 14,
    4: 10,
    5: 6,
    6: 2,
    7: 1,
    8: 0.5,
    9: 0.1,
};

export function getCookieSpeed(cookieSpeed: number): number {
    return cookieSpeedMap[cookieSpeed] || Object.values(cookieSpeedMap)[Object.values(cookieSpeedMap).length - 1];
}

export const clicksInRowToSpeed: Record<number, number> = {
    0: 1,
    10: 2,
    40: 3,
    90: 4,
    150: 5,
    200: 6,
    250: 7,
    300: 8,
    350: 9,
};
