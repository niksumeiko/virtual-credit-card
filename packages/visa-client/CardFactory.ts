import axios from 'axios';

import type { CreditCard } from './types';

export async function createVirtualCreditCard(): Promise<CreditCard> {
    const id = await generateId();

    return {
        id,
        holder: 'Nik Sumeiko',
        expiry: createExpiry(),
        cvc: Math.floor(Math.random() * (999 - 100 + 1) + 100),
        color: getRandomColor(),
    };
}

function getRandomColor() {
    const colors = ['red', 'yellow', 'teal', 'sky', 'purple', 'rose'];
    const fallback = colors[3];

    return colors[Math.floor(Math.random() * colors.length)] ?? fallback;
}

async function generateId() {
    const data = await Promise.all([
        axios.get('https://xeno-canto.org/api/2/recordings?query=cnt:austria'),
        axios.get('https://xeno-canto.org/api/2/recordings?query=troglodytes+troglod'),
        axios.get('https://xeno-canto.org/api/2/recordings?query=bearded+bellbird+q:A'),
    ]);

    return Number(
        new Array(Math.max(data.length, 4))
            .fill('x')
            .map(() => Math.floor(1000 + Math.random() * 9000))
            .join('')
            .replace(/^\d/, '4'),
    );
}

function createExpiry() {
    const year = new Date().getFullYear();
    const start = new Date(year + 1, 0, 1);
    const end = new Date(year + 3, 0, 1);

    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}
