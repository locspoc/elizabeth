Feature: Header

    Check all header elements

    Scenario: Home page exists with heading 1
    Given I open Elizabeth Theme home page on local dev
    Then Validate that the heading title exists
    Then Heading title is also correct

    Scenario: React menu item exists and contains correct submenu items
    Given I open Elizabeth Theme home page on local dev
    Then Validate that the React menu item exists

    Scenario: Liquid menu item exists and contains correct submenu items

    Scenario: HTML & CSS menu item exists and contains correct submenu items

    Scenario: Blog menu item exists

    Scenario: Bag icon exists

    Scenario: Login button exists

    Scenario: Register button exists