Feature: Add car 

  Scenario: Add car into Garage
    Given User is logged in
    And Garage is opened
    When user adds "Porsche" car "100"
    Then the "Porsche" car appears in the Garage