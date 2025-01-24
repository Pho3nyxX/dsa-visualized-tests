describe("Menu", () => {
	beforeEach(() => {
		cy.visit("");
	});
    
	it("should open when burger menu is clicked", () => {
        cy.viewport(512, 768);
		cy.get("nav .nav-toggle-container").should("be.visible");
		cy.get("nav .nav-toggle-container").click();
	});

	it("click on data structures should close data structures sub menu", () => {
        cy.viewport(512, 768);
		cy.get("nav .nav-toggle-container").should("be.visible");
		cy.get("nav .nav-toggle-container").click();
		cy.get("#data-structures").click();
		cy.get("#sub-menu-1").should("not.be.visible");
	});

	it.only("click twice on data structures should open data structures sub menu", () => {
        cy.viewport(512, 768);
		cy.get("nav .nav-toggle-container").should("be.visible");
		cy.get("nav .nav-toggle-container").click();
		cy.get("#data-structures").click();
		cy.get("#data-structures").click();
		cy.get("#sub-menu-1").should("be.visible");
	});
    
    it("click twice should close", () => {
        cy.viewport("macbook-16");
        cy.get("#data-structures").click();
        cy.get("#data-structures").click();
        cy.get(".sub-menu").should("not.be.visible");
    });

	it("clicked should show sub menu", () => {
        cy.viewport("macbook-16");
		cy.get("#data-structures").click();
		cy.get("#sub-menu-1").should("be.visible");
	});
});
