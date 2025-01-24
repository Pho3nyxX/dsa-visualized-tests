describe("Linked list page", () => {
    beforeEach(() => {
        cy.visit("");
        cy.viewport("macbook-16");
    });
    
    it("should load after 'linked list' menu click", () => {
        cy.get(".menu-title").should("be.visible");
        cy.get("#data-structures").click();
        cy.get("#sub-menu-1").should("be.visible");
        cy.get("#sub-menu-1 li:nth-child(2)").click();
        // verify redirect
    });

    it.only("title should display - linked list", () => {
        cy.get(".menu-title").should("be.visible");
        cy.get("#data-structures").click();
        cy.get("#sub-menu-1").should("be.visible");
        cy.get("#sub-menu-1 li:nth-child(2)").click();
        cy.title().should('include', 'linked list');
    });
});