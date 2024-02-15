import type { FC } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import type { RouteObject } from 'react-router-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { routes } from './routes';

const queryClient = new QueryClient();

type Props = {
    createRouter?(
        routes: RouteObject[],
        options?: Partial<{ initialEntries: string[] }>,
    ): ReturnType<typeof createBrowserRouter>;
};

export const App: FC<Props> = ({ createRouter = createBrowserRouter }) => {
    return (
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={createRouter(routes)} />
        </QueryClientProvider>
    );
};
