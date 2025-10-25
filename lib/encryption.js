import CryptoJS from 'crypto-js';

const ENCRYPTION_KEY = process.env.ENCRYPTION_KEY;

// Encrypt data
export function encryptData(data) {
    if (!data) return null;

    try {
        const encrypted = CryptoJS.AES.encrypt(data.toString(), ENCRYPTION_KEY).toString();
        return encrypted;
    } catch (error) {
        console.error('Encryption error:', error);
        return null;
    }
}

// Decrypt data
export function decryptData(encryptedData) {
    if (!encryptedData) return null;

    try {
        const decrypted = CryptoJS.AES.decrypt(encryptedData, ENCRYPTION_KEY);
        return decrypted.toString(CryptoJS.enc.Utf8);
    } catch (error) {
        console.error('Decryption error:', error);
        return null;
    }
}

// Encrypt object with specific fields
export function encryptSensitiveFields(obj, fieldsToEncrypt) {
    const encrypted = { ...obj };

    fieldsToEncrypt.forEach(field => {
        if (encrypted[field]) {
            encrypted[field] = encryptData(encrypted[field]);
        }
    });

    return encrypted;
}

// Decrypt object with specific fields
export function decryptSensitiveFields(obj, fieldsToDecrypt) {
    const decrypted = { ...obj };

    fieldsToDecrypt.forEach(field => {
        if (decrypted[field]) {
            decrypted[field] = decryptData(decrypted[field]);
        }
    });

    return decrypted;
}
