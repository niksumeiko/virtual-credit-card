import { useState } from 'react';
import type { CreditCard } from 'visa-client';
import { createVirtualCardModel } from './VirtualCardPageService';
import { createVirtualCardAdapter } from './VirtualCardAdapter';

export function useCreateVirtualCard() {
    const [card, setCard] = useState<CreditCard>();
    const createVirtualCreditCard = createVirtualCardAdapter();

    const createCard = async () => {
        const candidate = await createVirtualCreditCard();

        setCard(candidate);
    };

    return {
        ...createVirtualCardModel(card),
        createCard,
    };
}
