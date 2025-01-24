describe("Viewport", () => {
	beforeEach(() => {
		cy.visit("");
	});

	context("768p resolution", () => {
		it("should display burger menu", () => {
			cy.viewport(512, 768);
			cy.get("nav .menu-title").should("not.be.visible");
			cy.get("nav .nav-toggle").should("be.visible");
		});
	});

	context("1024p resolution", () => {	
		it("should display burger menu", () => {
			cy.viewport(768, 1024);
			cy.get("nav .nav-toggle").should("be.visible");
			cy.get("nav .menu-title").should("not.be.visible");
		});
	});

	context("1536p resolution", () => {
		it("should display menus", () => {
			cy.viewport("macbook-16");
			cy.get("nav .menu-title").should("be.visible");
			cy.get("nav .nav-toggle").should("not.be.visible");
		});
	});
});
