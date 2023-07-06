Feature: Amazon Product Search

    Scenario: TC_001_Product search functionality
        Given Access the Amazon top page url
        When  Enter Shoes keyword into the searchox
        And   Hit the search icon
        Then  keyword search should display correct result


    Scenario: TC_002_Apply filters and check result
        Given  Access the Amazon top page url
        When   Enter Shoes keyword into the searchox
        And    Hit the search icon
        When   Apply two filters on the same page
        Then   Filtered results should display correct result


    Scenario: TC_003_Add product to the cart
        Given  Access the Amazon top page url
        When   Enter Shoes keyword into the searchox
        And    Hit the search icon
        When   Apply two filters on the same page
        Then   Product should get added to the cart successfully





