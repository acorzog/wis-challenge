/// <reference types="cypress" />

class FreeBetsPage {
  visit() {
    cy.visit('/');
  }

  acceptCookies() {
    cy.get('#cookie-policy > div > div > div > button').click();
  }

  getOfferCards() {
    return cy.get('li.promo-codes-card');
  }

  getImage() {
    return cy.get('.promo-codes-card figure > img');
  }

  getBonusText() {
    return cy.get('#card-name');
  }

  getCtaButton() {
    return cy.get('a.btn-cta');
  }

  getSeeMoreButton() {
    return cy.get('.promo-codes-see-more');
  }

  getClaimButtons() {
    return cy.get('.cta-button');
  }


  openFilterMenu() {
    return cy.get('[aria-label="Open Bookie Filter Dropdown"]').first().scrollIntoView();
  }

  getFilterInput() {
    return cy.get('.promo-codes-bookie-filter-dropdown > div > input').first();
  }
  checkFilter(bookieName) {
    return cy.get(`[data-bookie-name="${bookieName}"]`);
  }

  filterPill() {
    return cy.get('[data-bookie-name="bet365"] span.ms-2');
  }

  verifyCtaOpensNewTab(cardIndex = 0) {
    cy.window().then((win) => {
      cy.stub(win, 'open').as('windowOpen');
    });

    this.getCtaButton().eq(cardIndex)
      .should('have.attr', 'href')
      .and('include', '/goto/')
      .and('not.be.empty');

    this.getCtaButton().eq(cardIndex)
      .should('have.attr', 'target', '_blank')
      .click();

    cy.get('@windowOpen')
  }

}
export const freeBetsPage = new FreeBetsPage();
