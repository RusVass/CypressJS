Feature: Add car
// створюємо окремий сценарій для кожного тесту
  Scenario: Add a new car into Garage without examples
    Given User is logged in
    And opened the Garage page
    When User adds a new car into Garage
      | name | miles |
      | Audi  | 100  |
      | BMW  |  200  |
      | Ford |  300 |
    Then the car appears in the list
      | name |
      | Audi  |
      | BMW  |