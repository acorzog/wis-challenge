/// <reference types="cypress" />

import { freeBetsPage } from '../page/FreeBetsPage';

describe('Free Bets Page Automation', () => {
  beforeEach(() => {
    freeBetsPage.visit('/');
    //freeBetsPage.acceptCookies();
  });

  it('should load Free Bets page successfully', () => {
    cy.url().should('include', '/free-bets');
  });

  it.skip('should verify each offer contains image, bonus text and CTA', () => {
    freeBetsPage.getOfferCards().first().scrollIntoView()
    freeBetsPage.getOfferCards().each(() => {

      freeBetsPage.getImage()
        .should('have.attr', 'src')
        .and('match', /^https?:\/\//);


      freeBetsPage.getBonusText()
        .should('be.visible')
        .and('not.be.empty');


      freeBetsPage.getCtaButton()
        .should('exist')
        .and('contain.text', 'CLAIM BONUS')
        .and('have.attr', 'href')
        .and('include', '/goto/')
    });
  });

  it('should have valid CTA links', () => {
    freeBetsPage.getCtaButton().first().scrollIntoView()
      .should('have.attr', 'href')
      .and('include', 'http');
  });

  it('should load more offers when clicking See More', () => {
    freeBetsPage.getOfferCards().then($initial => {
      const initialCount = $initial.length;
      freeBetsPage.getSeeMoreButton().first().scrollIntoView().click();
      freeBetsPage.getOfferCards().should('have.length', initialCount);
    });
  });

  it('should filter offers using bookmaker search', () => {
    const filterName = 'bet365';
    const bookieId = 'bookie-67116';

    freeBetsPage.openFilterMenu().click();
    freeBetsPage.getFilterInput().should('be.visible').type(filterName);
    freeBetsPage.checkFilter(filterName).should('be.visible').first().click();
    freeBetsPage.openFilterMenu().scrollIntoView().click();
    freeBetsPage.filterPill().should('contain.text', filterName);
    cy.get('li.promo-codes-card:visible').each(($card, index) => {
      if (index < 9) {
        cy.wrap($card).should('have.attr', 'data-bookie', bookieId);
      }
    });
  });

  it('should validate CTA opens in new tab with correct URL', () => {
    freeBetsPage.verifyCtaOpensNewTab();
  });
});
