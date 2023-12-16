Feature: Add car

  Scenario Outline: Add a new car into Garage
    Given User is logged in
    And opened the Garage page
    When User adds a new "<Car>" car into Garage
    Then the "<Car>" car appears in the list
  Examples:
    | Car |
    | Audi  |
    | BMW  |
    | Porsche  |
  