import { useState } from 'react';
import type { CreditCard } from 'visa-client';
import { createVirtualCardModel } from './VirtualCardPageService';
import { useVirtualCardAdapterFactory } from './VirtualCardProvider';

export function useCreateVirtualCard() {
    const [card, setCard] = useState<CreditCard>();
    const factory = useVirtualCardAdapterFactory();
    const createVirtualCreditCard = factory();

    const createCard = async () => {
        const candidate = await createVirtualCreditCard();

        setCard(candidate);
    };

    return {
        ...createVirtualCardModel(card),
        createCard,
    };
}
