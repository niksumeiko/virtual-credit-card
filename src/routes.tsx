import { FocusPageLayout, HeroTitle } from './design-system';
import { LandingPage } from './landing/useCases/LandingPage';
import { VirtualCardPage } from './cards/useCases/createVirtualCard/VirtualCardPage';

export const routes = [
    {
        index: true,
        path: '/',
        element: <LandingPage />,
    },
    {
        path: '/virtual-card',
        element: <VirtualCardPage />,
    },
    {
        path: '/wip',
        element: (
            <FocusPageLayout>
                <HeroTitle title="/WIP" disabled />
                <p>To be implemented</p>
            </FocusPageLayout>
        ),
    },
];
