import { describe, expect, it } from 'vitest';
import { createVirtualCardAdapter } from '../VirtualCardAdapter';

describe('Virtual card adapter', () => {
    it('returns card', async () => {
        const card = {
            id: 1234567890111213,
            holder: 'x',
            expiry: new Date('2025-05-21T15:27:03.885Z'),
            cvc: 123,
            color: 'red',
        };
        const fake = () => Promise.resolve(card);
        const createCard = createVirtualCardAdapter({ create: fake });

        const result = await createCard();

        expect(result).toEqual(card);
    });
});
