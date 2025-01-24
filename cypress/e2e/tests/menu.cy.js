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

	it("click twice on data structures should open data structures sub menu", () => {
        cy.viewport(512, 768);
		cy.get("nav .nav-toggle-container").should("be.visible");
		cy.get("nav .nav-toggle-container").click();
		cy.get("#data-structures").click();
		cy.get("#data-structures").click();
		cy.get("#sub-menu-1").should("be.visible");
	});

	it("click on algorithms should close algorithms sub menu", () => {
        cy.viewport(512, 768);
		cy.get("nav .nav-toggle-container").should("be.visible");
		cy.get("nav .nav-toggle-container").click();
		cy.get("#algorithms").click();
		cy.get("#sub-menu-2").should("not.be.visible");
	});

	it("click twice on algorithms should open algorithms sub menu", () => {
        cy.viewport(512, 768);
		cy.get("nav .nav-toggle-container").should("be.visible");
		cy.get("nav .nav-toggle-container").click();
		cy.get("#algorithms").click();
		cy.get("#algorithms").click();
		cy.get("#algorithms").scrollIntoView();
		cy.get("#sub-menu-2").should("be.visible");
	});
    
	it("data structure click should show sub menu", () => {
		cy.viewport("macbook-16");
		cy.get("#data-structures").click();
		cy.get("#sub-menu-1").should("be.visible");
	});

    it("data structure click twice should close sub menu", () => {
        cy.viewport("macbook-16");
        cy.get("#data-structures").click();
        cy.get("#data-structures").click();
        cy.get("#sub-menu-1").should("not.be.visible");
    });

	it("algorithms click should show sub menu", () => {
		cy.viewport("macbook-16");
		cy.get("#algorithms").click();
		cy.get("#sub-menu-2").should("be.visible");
	});

    // it.only("algorithms click twice should close sub menu", () => {
    //     cy.viewport("macbook-16");
    //     cy.get("#algorithms").click();
    //     cy.get("#algorithms").click();
    //     cy.get("#sub-menu-2").should("not.be.visible");
    // });
});
