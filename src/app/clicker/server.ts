'use server';

import crypto from 'crypto';

// 64 bytes
const KEY: any =
    process.env.STORAGE_ENCRYPTION_KEY ||
    Buffer.from('AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA', 'hex');
const ALGORITHM = 'aes-256-cbc';

/**
 * Encrypts a string using AES-256-CBC
 * First 16 bytes/32 characters are the IV, the rest is the encrypted text
 */
export async function encrypt(text: string): Promise<string> {
    const iv: any = crypto.randomBytes(16);
    const cipher = crypto.createCipheriv(ALGORITHM, KEY, iv);

    let encrypted = cipher.update(text, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    return `${iv.toString('hex')}${encrypted}`;
}

/**
 * Decrypts a string using AES-256-CBC
 * First 16 bytes/32 characters are the IV, the rest is the encrypted text
 */
export async function decrypt(text: string): Promise<string> {
    const iv: any = Buffer.from(text.slice(0, 32), 'hex');
    const encryptedText = text.slice(32);
    const decipher = crypto.createDecipheriv(ALGORITHM, KEY, iv);

    let decrypted = decipher.update(encryptedText, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
}
