import { debounce } from '../utils/functions';
import { decrypt, encrypt } from './utils';

export function getClicksFromLS() {
    return localStorage.getItem('clicks');
}

export function setClicksInLS(clicks: string) {
    localStorage.setItem('clicks', clicks);
}

export class CookieClass {
    private clicks: number = 0;
    private debounceSaveClicks = debounce(async () => await this.saveClicksToLS(), 100);

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
        try {
            const decryptedClicks = await decrypt(encryptedClicks);
            return parseInt(decryptedClicks);
        } catch (e) {
            console.error(e);
            return 0;
        }
    }

    public async saveClicksToLS() {
        setClicksInLS(await encrypt(this.clicks.toString()));
    }

    public click() {
        this.clicks++;
        this.debounceSaveClicks();
    }

    public getClicks(): number {
        return this.clicks;
    }
}
