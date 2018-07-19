Feature: Amazon password  Feature
Scenario Outline: Amazon password Test_scenario

Given User is already in login page
When title of login page is Amazon 
Then user enters "<username>"
Then user clicks on continue
Then user is on password page
Then user entering the password "<password>"
Then clicks on continue

Examples:
	|username|password|
	|8668058560|Dhiva9442772472|
	|9442772472|qwertyu|