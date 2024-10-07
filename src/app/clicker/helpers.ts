import { decrypt, encrypt } from './utils';

export function getClicksFromLS() {
    return localStorage.getItem('clicks');
}

export function setClicksInLS(clicks: string) {
    localStorage.setItem('clicks', clicks);
}

export class CookieClass {
    private clicks: number = 0;

    constructor() {
        this.updateClicks();
    }

    private async updateClicks() {
        this.clicks = await this.decryptClicksFromLS();
    }

    public async decryptClicksFromLS() {
        const encryptedClicks = getClicksFromLS();
        if (!encryptedClicks) {
            return 0;
        }
        return parseInt(await decrypt(encryptedClicks));
    }

    public async saveClicksToLS() {
        setClicksInLS(await encrypt(this.clicks.toString()));
    }

    public async click() {
        this.clicks++;
        await this.saveClicksToLS();
    }

    public getClicks(): number {
        return this.clicks;
    }
}
