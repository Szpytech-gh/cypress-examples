import "cypress-plugin-api";
import { CatInfo } from "cypress/support/typings";

describe("cats api tests", () => {
  it("abyssinian data should be correct", () => {
    const endpoint = "https://api.api-ninjas.com/v1/cats";
    const params = {
      name: "abyssinian",
    };
    const headers = {
      "X-Api-Key": Cypress.env().token,
    };
    cy.api({
      method: "GET",
      url: endpoint,
      qs: params,
      headers: headers,
    }).then((response) => {
      expect(response.status).to.eq(200);

      if (Array.isArray(response.body) && response.body.length > 0) {
        // checking type here
        const cat: CatInfo = response.body[0];
        expect(cat.name).to.eq("Abyssinian");
        expect(cat.length).to.eq("12 to 16 inches");
        expect(cat.origin).to.eq("Southeast Asia");
        expect(cat.image_link).to.eq(
          "https://api-ninjas.com/images/cats/abyssinian.jpg"
        );
        expect(cat.family_friendly).to.eq(3);
        expect(cat.shedding).to.eq(3);
        expect(cat.general_health).to.eq(2);
        expect(cat.playfulness).to.eq(5);
        expect(cat.children_friendly).to.eq(5);
        expect(cat.grooming).to.eq(3);
        expect(cat.intelligence).to.eq(5);
        expect(cat.other_pets_friendly).to.eq(5);
        expect(cat.min_weight).to.eq(6);
        expect(cat.max_weight).to.eq(10);
        expect(cat.min_life_expectancy).to.eq(9);
        expect(cat.max_life_expectancy).to.eq(15);
      } else {
        throw new Error("Response is not in the expected format.");
      }
    });
  });
});
