import { App } from '../../App';

describe('Virtual card creation', () => {
    it('create and see virtual card', () => {
        cy.mount(<App />, '/');

        cy.get('a[href*="/virtual-card"]').click();
        cy.get('[data-test="create-virtual-card"]').click();

        cy.get('[data-test="virtual-card"]').contains('1234').should('be.visible');
        cy.get('[data-test="information"]').should('be.visible');
    });
});
