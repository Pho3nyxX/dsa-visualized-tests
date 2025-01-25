describe("Linked list page", () => {
    beforeEach(() => {
        cy.visit("");
        cy.viewport("macbook-16");
    });
    
    it("should load after 'linked list' menu click", () => {
        cy.get(".menu-title").should("be.visible");
		cy.get(".menu-container>.menu>li:first-child >a").click();
        cy.get(".menu-container>.menu>li:first-child ul").should("be.visible");
        cy.get(".menu-container>.menu>li:first-child ul li:nth-child(2)").click();
        cy.url().should("include", "/linked-list");
    });

    it("title should display - linked list", () => {
        cy.get(".menu-title").should("be.visible");
		cy.get(".menu-container>.menu>li:first-child >a").click();
        cy.get(".menu-container>.menu>li:first-child ul").should("be.visible");
        cy.get(".menu-container>.menu>li:first-child ul li:nth-child(2)").click();
        cy.title().should('include', 'linked list');
    });

    it("content should have Linked List", () => {
        cy.get(".menu-title").should("be.visible");
		cy.get(".menu-container>.menu>li:first-child >a").click();
        cy.get(".menu-container>.menu>li:first-child ul").should("be.visible");
        cy.get(".menu-container>.menu>li:first-child ul li:nth-child(2)").click();
        cy.get(".content-display").contains("Linked List");
    });
});