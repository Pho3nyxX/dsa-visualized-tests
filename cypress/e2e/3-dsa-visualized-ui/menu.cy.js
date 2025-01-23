describe("Menu", () => {
	beforeEach(() => {
		cy.visit("");
	});
    
	it("should open when menu is clicked", () => {
        cy.viewport(512, 768);
		cy.get("nav .nav-toggle-container").should("be.visible");
		cy.get("nav .nav-toggle-container").click();
	});
    
    it("click twice should close menu", () => {
        cy.viewport("macbook-16");
        cy.get("#data-structures").click();
        cy.get("#data-structures").click();
        cy.get(".sub-menu").should("not.be.visible");
    });

    // it.only("should open one menu at a time", () => {
    //     cy.viewport("macbook-16");
	// 	cy.get("#data-structures").click();
	// 	cy.get("#algorithms").click();
	// 	cy.get(".sub-menu-1").should("not.be.visible");
	// });
});
