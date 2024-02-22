import { Button, Card, FocusPageLayout, HeroTitle, PageContents } from '@design-system';

import { useCreateVirtualCard } from './useCreateVirtualCard';

export const VirtualCardPage = () => {
    const { card, createCard } = useCreateVirtualCard();

    return (
        <FocusPageLayout>
            <HeroTitle title="/Virtual card" />
            <PageContents>
                <Button data-test="create-virtual-card" onClick={createCard}>
                    Create new card
                </Button>
                {card && <Card data-test="virtual-card" card={card} />}
            </PageContents>
        </FocusPageLayout>
    );
};
