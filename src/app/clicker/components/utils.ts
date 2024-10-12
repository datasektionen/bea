export const cookieSpeedMap: Record<number, number> = {
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

export function getCookieLevel(cookieSpeed: number): number {
    if (Object.keys(cookieSpeedMap).includes(cookieSpeed.toString())) {
        return cookieSpeed;
    } else {
        return Object.values(cookieSpeedMap)[Object.values(cookieSpeedMap).length - 1];
    }
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

export function getExtraCookies(clicksInRow: number): number {
    return Math.floor(clicksInRow / 10);
}

/** min and max included */
export function getRandomNumber(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
