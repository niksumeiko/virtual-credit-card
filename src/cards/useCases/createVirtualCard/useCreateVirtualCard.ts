import { useState } from 'react';
import type { CreditCard } from 'visa-client';
import { createVirtualCreditCard } from 'visa-client';
import { createVirtualCardModel } from './VirtualCardPageService';

export function useCreateVirtualCard() {
    const [card, setCard] = useState<CreditCard>();

    const createCard = async () => {
        const candidate = await createVirtualCreditCard();

        setCard(candidate);
    };

    return {
        ...createVirtualCardModel(card),
        createCard,
    };
}
