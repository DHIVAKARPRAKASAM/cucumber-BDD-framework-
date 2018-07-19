Feature: Amazon Login Feature

#Scenario: Amazon Login Test_scenario

#Given User is already in login page
#When title of login page is Amazon 
#Then user enters "8668058560"
#Then user clicks on continue
#Then user is on password page


Scenario Outline: Amazon Login Test_scenario

Given User is already in login page
When title of login page is Amazon 
Then user enters "<username>"
Then user clicks on continue
Then user is on password page

Examples:
	|username|
	|8668058560|
	|9442772472|