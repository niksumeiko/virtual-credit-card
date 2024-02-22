import { describe, expect, it } from 'vitest';

import { createVirtualCardModel } from '../VirtualCardPageService';

describe('VirtualCardPageService', () => {
    describe('view model', () => {
        it('returns model when card is unavailable', () => {
            const card = undefined;

            const result = createVirtualCardModel(card);

            expect(result).toEqual({
                card: undefined,
            });
        });

        it('returns model when card is available', () => {
            const card = {
                id: 1234567890111213,
                holder: 'x',
                expiry: new Date('2025-05-21T15:27:03.885Z'),
                cvc: 123,
                color: 'red',
            };

            const result = createVirtualCardModel(card);

            expect(result).toEqual({
                card: {
                    number: '1234 5678 9011 1213',
                    name: 'x',
                    valid: '05/25',
                    code: '123',
                    color: 'red',
                },
            });
        });
    });
});
