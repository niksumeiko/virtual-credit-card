import { FocusPageLayout, HeroTitle } from './design-system';
import { LandingPage } from './landing/useCases/LandingPage';

export const routes = [
    {
        index: true,
        path: '/',
        element: <LandingPage />,
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
