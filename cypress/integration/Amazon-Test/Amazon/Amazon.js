import { Given, And, Then, When } from "cypress-cucumber-preprocessor/steps";
let brand
let features
Given('Access the Amazon top page url', () => {
    cy.visit("https://www.amazon.in")
})

When('Enter Shoes keyword into searchox', () => {
    cy.get('input#twotabsearchtextbox').type('shoes')
})

And('Hit the search icon', () => {
    cy.get('input[type=submit]').click()
})

Then('verify that the values on the search page are actually searched for shoes', () => {
    cy.url().should('include', 'shoes')
})

// When('Apply filters on the same page', () => {
//     cy.get('div[id="brandsRefinements"]>ul>span>li>span>a>div').eq(0).click({ force: true })
//     cy.wait(4000)
//     cy.get('ul[aria-labelledby="p_n_feature_fourteen_browse-bin-title"]>span>li>span>a>span').eq(2).click({ force: true })



//     cy.get('div[id="brandsRefinements"]>ul>span>li>span>a>span').eq(0).each(($el) => {
//         brand = cy.log($el.text())
//     })
//     cy.wait(4000)
//     cy.get('ul[aria-labelledby="-title"]>span>li>span>a>span').eq(0).invoke('show')
//         .should('have.text', brand)


//     cy.wait(4000)
//     cy.get('ul[aria-labelledby="p_n_feature_fourteen_browse-bin-title"]>span>li>span>a>span').eq(2).each(($el) => {
//         features = cy.log($el.text())
//     })
//     cy.wait(4000)
//     cy.get('ul[aria-labelledby="-title"]>span>li>span>a>span').eq(1).invoke('show')
//         .should('have.text', 'features')
// })

And('Validate the two filters applied', () => {

    //Two filters applied
    cy.get('ul[aria-labelledby="p_89-title"]>span>li>span>a>div').eq(0).click({ force: true })
    cy.wait(6000)
    cy.get('ul[aria-labelledby="p_n_feature_fourteen_browse-bin-title"]>span>li>span>a>span').eq(2).click({ force: true })
    cy.wait(7000)
    // validated filter texts
    cy.get('ul.sf-selected-filters-list>span>li>span>a>span',).eq(0).should('have.text', 'Red Tape')
    cy.wait(8000)
    cy.get('ul.sf-selected-filters-list>span>li>span>a>span').eq(1).should('have.text', 'Lightweight')


})

Then('Results filtered logically', () => {
    cy.get('div[class="a-section a-spacing-none a-spacing-top-small s-title-instructions-style"]').each(($el, ind) => {
        cy.wait(5000)
        cy.wrap($el.eq(0)).should('contain', 'Red Tape')
        cy.wait(5000)
        cy.wrap($el.eq(1)).should('contain', 'Red Tape')
        cy.wait(5000)
        cy.wrap($el.eq(3)).should('contain', 'Red Tape')


    })
})


Then('Validate the product details', () => {
    cy.get('ul[aria-labelledby="p_89-title"]>span>li>span>a>div').eq(0).click({ force: true })
    cy.wait(6000)
    cy.get('ul[aria-labelledby="p_n_feature_fourteen_browse-bin-title"]>span>li>span>a>span').eq(2).click({ force: true })
    cy.wait(7000)
    cy.get('div[class="a-section a-spacing-base a-text-center"]>div>div>span>a').eq(0).invoke('removeAttr', 'target').click()
    cy.get('#add-to-cart-button').click()
    cy.wait(8000)
    cy.get('div[id="nav-cart-count-container"]>span.nav-cart-count').should('have.text', "1")

})










