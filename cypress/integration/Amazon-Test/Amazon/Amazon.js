import { Given, And, Then, When } from "cypress-cucumber-preprocessor/steps";

// First Scenario
Given('Access the Amazon top page url', () => {
    cy.visit("https://www.amazon.in")
})

When('Enter Shoes keyword into the searchox', () => {
    cy.get('input#twotabsearchtextbox').type('shoes')
})

And('Hit the search icon', () => {
    cy.get('input[type=submit]').click()
})

Then('keyword search should display correct result', () => {
    cy.url().should('include', 'shoes')
    cy.wait(2000)

})

// **********************************************************************************************

//Second Scenario//
When('Apply two filters on the same page', () => {
    cy.get('ul[aria-labelledby="p_89-title"]>span>li>span>a>div').eq(0).click({ force: true })
    cy.get('ul[aria-labelledby="p_n_feature_fourteen_browse-bin-title"]>span>li>span>a>span').eq(2).click({ force: true })
    cy.wait(4000)
})

// And('Validate the two filters applied', () => {
//     // validated filter texts
//     cy.wait(4000)
//     cy.get('ul.sf-selected-filters-list>span>li>span>a>span',).eq(0).should('have.text', 'Red Tape')
//     cy.get('ul.sf-selected-filters-list>span>li>span>a>span').eq(1).should('have.text', 'Lightweight')
// })

Then('Filtered results should display correct result', () => {
    //Validate 3 results with applied filter .i.e Red Tape
    let n = 0
    cy.get('div[class="a-section a-spacing-none a-spacing-top-small s-title-instructions-style"]').each(($el, ind) => {
        if (n < 4) {
            cy.wait(2000)
            cy.wrap($el).should('contain', 'Red Tape')
            n++
        }
    })
})


// **********************************************************************************************


// Third Scenario
Then('Product should get added to the cart successfully', () => {
    //Product is sucessfully added to the cart
    cy.get('div[class="a-section a-spacing-base a-text-center"]>div>div>span>a').eq(0).invoke('removeAttr', 'target').click()
    cy.get('select[name="quantity"]').select('2')
    cy.get('#add-to-cart-button').click()
    cy.get('.a-size-medium-plus').should('contain', 'Added to Cart')
    cy.get('div[id="nav-cart-count-container"]>span.nav-cart-count').should('have.text', "2")
})










