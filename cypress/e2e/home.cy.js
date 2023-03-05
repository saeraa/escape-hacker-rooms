describe("Localhost visit", () => {
  const url = "http://127.0.0.1:5500/";

	it("visits the index.html", () => {
		cy.visit(url);
	});

  context("desktop resolution", () => {
		beforeEach(() => {
			cy.viewport(1280, 720);
		});

		it("displays full header", () => {
			cy.visit(url);
			cy.get("nav.container").should("be.visible");
			cy.get(".btn-menu").should("not.be.visible");
		});
	});
  
  context("mobile resolution", () => {
		beforeEach(() => {
			cy.viewport("iphone-x", "portrait");
		});

		it("can open the mobile menu", () => {
			cy.visit(url);
			cy.get("nav.container").should("not.be.visible");
			cy.get(".btn-menu").should("be.visible");
			cy.get(".btn-menu").click();
			cy.get("nav.container").should("be.visible");
		});
	});
});

describe("GitHub Pages visit", () => {
  const url = "https://saeraa.github.io/escape-hacker-rooms/";
  
	it("visits the index.html", () => {
		cy.visit(url);
	});

  context("mobile resolution", () => {
		beforeEach(() => {
			cy.viewport("iphone-x", "portrait");
		});

		it("can close the mobile menu", () => {
			cy.visit(url);
			cy.get(".btn-menu").click();
      cy.get(".btn-menu-close").click();
		});
	});

 });