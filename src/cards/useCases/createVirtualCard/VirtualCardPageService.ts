import type { CreditCard } from 'visa-client';

export function createVirtualCardModel(card?: CreditCard) {
    if (!card) {
        return { card: undefined };
    }

    const month = `${card.expiry.getMonth() + 1}`.padStart(2, '0');
    const year = card.expiry.getFullYear().toString().slice(-2);
    const number = card.id
        .toString()
        .replace(/.{1,4}/g, '$& ')
        .trim();

    return {
        card: {
            number,
            name: card.holder,
            valid: `${month}/${year}`,
            code: card.cvc.toString(),
            color: card.color,
        },
    };
}
