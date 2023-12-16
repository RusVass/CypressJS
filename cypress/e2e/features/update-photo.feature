Feature: Photo update

  Scenario: Update user profile Photo
    Given User is logged in
    And opened the Profile page
    When User updates the profile Photo on the Edit Profile modal
    Then the profile image is updated
    