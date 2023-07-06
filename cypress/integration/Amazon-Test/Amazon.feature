Feature: Amazon Product Search

    Scenario: Validate the product searched for shoes display the correct result
        Given Access the Amazon top page url
        When Enter Shoes keyword into searchox
        And Hit the search icon
        Then verify that the values on the search page are actually searched for shoes


    Scenario: Validate the two filters are applied and the results are being filtered logically.
        Given Access the Amazon top page url
        When Enter Shoes keyword into searchox
        And Hit the search icon
        And Validate the two filters applied
        Then Results filtered logically


    Scenario: Product Details page
        Given Access the Amazon top page url
        When Enter Shoes keyword into searchox
        And Hit the search icon
        Then Validate the product details





