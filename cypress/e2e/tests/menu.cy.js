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
		cy.get(".menu-container>.menu>li:first-child >a").click();
		cy.get(".menu-container>.menu>li:first-child ul").should("not.be.visible");
	});

	it("click twice on data structures should open data structures sub menu", () => {
        cy.viewport(512, 768);
		cy.get("nav .nav-toggle-container").should("be.visible");
		cy.get("nav .nav-toggle-container").click();
		cy.get(".menu-container>.menu>li:first-child >a").click();
		cy.get(".menu-container>.menu>li:first-child >a").click();
		cy.get(".menu-container>.menu>li:first-child ul").should("be.visible");
	});

	it("click on algorithms should close algorithms sub menu", () => {
        cy.viewport(512, 768);
		cy.get("nav .nav-toggle-container").should("be.visible");
		cy.get("nav .nav-toggle-container").click();
		cy.get(".menu-container>.menu>li:nth-child(2) >a").click();
		cy.get(".menu-container>.menu>li:nth-child(2) ul").should("not.be.visible");
	});

	it("click twice on algorithms should open algorithms sub menu", () => {
        cy.viewport(512, 768);
		cy.get("nav .nav-toggle-container").should("be.visible");
		cy.get("nav .nav-toggle-container").click();
		cy.get(".menu-container>.menu>li:nth-child(2) >a").click();
		cy.get(".menu-container>.menu>li:nth-child(2) >a").click();
		cy.get(".menu-container>.menu>li:nth-child(2) >a").scrollIntoView();
		cy.get(".menu-container>.menu>li:nth-child(2) ul").should("be.visible");
	});
    
	it("data structure click should show sub menu", () => {
		cy.viewport("macbook-16");
		cy.get(".menu-container>.menu>li:first-child >a").click();
		cy.get(".menu-container>.menu>li:first-child ul").should("be.visible");
	});

    it("data structure click twice should close sub menu", () => {
        cy.viewport("macbook-16");
		cy.get(".menu-container>.menu>li:first-child >a").click();
		cy.get(".menu-container>.menu>li:first-child >a").click();
        cy.get(".menu-container>.menu>li:first-child ul").should("not.be.visible");
    });

	it("algorithms click should show sub menu", () => {
		cy.viewport("macbook-16");
		cy.get(".menu-container>.menu>li:nth-child(2) >a").click();
		cy.get(".menu-container>.menu>li:nth-child(2) ul").should("be.visible");
	});
});
