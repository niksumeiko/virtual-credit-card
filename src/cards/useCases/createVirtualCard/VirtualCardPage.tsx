import { Button, FocusPageLayout, HeroTitle, PageContents } from '../../../design-system';

export const VirtualCardPage = () => {
    return (
        <FocusPageLayout>
            <HeroTitle title="/Virtual card" />
            <PageContents>
                <Button data-test="create-virtual-card">Create new card</Button>
            </PageContents>
        </FocusPageLayout>
    );
};
