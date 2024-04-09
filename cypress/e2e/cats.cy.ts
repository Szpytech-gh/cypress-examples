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
        const cat: CatInfo = response.body[0];
        cy.fixture('abyssinian.json').then((expectedResponse) => {
          expect(cat).to.deep.equal(expectedResponse);
        });
      } else {
        throw new Error("Response is not in the expected format.");
      }
    });
  });
});
