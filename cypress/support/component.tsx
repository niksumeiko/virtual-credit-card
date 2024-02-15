/// <reference types="../../node_modules/cypress/types/cypress-npm-api" />
/// <reference types="../../node_modules/cypress/types/net-stubbing" />
/// <reference types="../../node_modules/cypress/types/cypress" />
/// <reference types="../../node_modules/cypress/types/cypress-global-vars" />
/// <reference types="../../node_modules/cypress/types/cypress-type-helpers" />
import type { ReactElement } from 'react';
import React from 'react';
import type { RouteObject } from 'react-router-dom';
import { createHashRouter } from 'react-router-dom';
import type { MountReturn } from 'cypress/react18';
import { mount } from 'cypress/react18';

import '../../src/index.css';
import './commands';

Cypress.Commands.overwriteQuery('url', () => {
    return () => {
        const hash = cy.getRemoteLocation('hash') ?? '';

        return hash.replace(/^#/, '');
    };
});

Cypress.Commands.add('mount', (element, path, options, rerenderKey) => {
    const createRouter = (routes: RouteObject[]) => createHashRouter(routes);

    return cy
        .window()
        .then((w) => {
            w.location.hash = `#${path}`;

            return path;
        })
        .then(() =>
            mount(
                <React.StrictMode>
                    {element}
                    {/* {React.cloneElement(element, { createRouter })} */}
                </React.StrictMode>,
                options,
                rerenderKey,
            ),
        );
});

declare global {
    // eslint-disable-next-line @typescript-eslint/no-namespace
    namespace Cypress {
        interface Chainable {
            getRemoteLocation(key: string): string | undefined;
            mount(
                element: ReactElement,
                path: string,
                options?: Partial<{ log: boolean }>,
                rerenderKey?: string,
            ): Chainable<MountReturn>;
        }
    }
}
