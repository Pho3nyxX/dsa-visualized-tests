describe("Viewport", () => {
	context("768p resolution", () => {
		beforeEach(() => {
			cy.visit("http://localhost:3000/");
			cy.viewport(512, 768);
		});

		it("should display burger menu", () => {
			cy.get("nav .menu-title").should("not.be.visible");
			cy.get("nav .nav-toggle").should("be.visible");
		});
	});

	context("1024p resolution", () => {
		beforeEach(() => {
			cy.visit("http://localhost:3000/");
			cy.viewport(768, 1024);
		});

		it("should display burger menu", () => {
			cy.get("nav .nav-toggle").should("be.visible");
			cy.get("nav .menu-title").should("not.be.visible");
		});
	});

	context("1536p resolution", () => {
		beforeEach(() => {
			cy.visit("http://localhost:3000/");
			cy.viewport("macbook-16");
		});

		it("should display menus", () => {
			cy.get("nav .menu-title").should("be.visible");
			cy.get("nav .nav-toggle").should("not.be.visible");
		});
	});
});
