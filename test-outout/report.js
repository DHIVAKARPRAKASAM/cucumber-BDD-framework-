$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/dhiva/eclipse-workspace/AmazonBDDframework/src/main/java/Features/password.feature");
formatter.feature({
  "line": 1,
  "name": "Amazon password  Feature",
  "description": "",
  "id": "amazon-password--feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 2,
  "name": "Amazon password Test_scenario",
  "description": "",
  "id": "amazon-password--feature;amazon-password-test-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User is already in login page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "title of login page is Amazon",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user enters \"\u003cusername\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "user clicks on continue",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user is on password page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user entering the password \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "clicks on continue",
  "keyword": "Then "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "amazon-password--feature;amazon-password-test-scenario;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 13,
      "id": "amazon-password--feature;amazon-password-test-scenario;;1"
    },
    {
      "cells": [
        "8668058560",
        "Dhiva9442772472"
      ],
      "line": 14,
      "id": "amazon-password--feature;amazon-password-test-scenario;;2"
    },
    {
      "cells": [
        "9442772472",
        "qwertyu"
      ],
      "line": 15,
      "id": "amazon-password--feature;amazon-password-test-scenario;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 14,
  "name": "Amazon password Test_scenario",
  "description": "",
  "id": "amazon-password--feature;amazon-password-test-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User is already in login page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "title of login page is Amazon",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user enters \"8668058560\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "user clicks on continue",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user is on password page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user entering the password \"Dhiva9442772472\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "clicks on continue",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.User_in_Loginpage()"
});
formatter.result({
  "duration": 6630266280,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.Loginpage_title()"
});
formatter.result({
  "duration": 92727261,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "8668058560",
      "offset": 13
    }
  ],
  "location": "LoginStepDefinition.user_enters_emailid(String)"
});
formatter.result({
  "duration": 135223866,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_on_continue()"
});
formatter.result({
  "duration": 1536272671,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.Password_page()"
});
formatter.result({
  "duration": 162028227,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Dhiva9442772472",
      "offset": 28
    }
  ],
  "location": "LoginStepDefinition.user_enters_password(String)"
});
formatter.result({
  "duration": 306022092,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.clicks_on_continue()"
});
formatter.result({
  "duration": 5553710268,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Amazon password Test_scenario",
  "description": "",
  "id": "amazon-password--feature;amazon-password-test-scenario;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User is already in login page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "title of login page is Amazon",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user enters \"9442772472\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "user clicks on continue",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user is on password page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user entering the password \"qwertyu\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "clicks on continue",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.User_in_Loginpage()"
});
formatter.result({
  "duration": 5169702545,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.Loginpage_title()"
});
formatter.result({
  "duration": 175618426,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "9442772472",
      "offset": 13
    }
  ],
  "location": "LoginStepDefinition.user_enters_emailid(String)"
});
formatter.result({
  "duration": 162815001,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_on_continue()"
});
formatter.result({
  "duration": 2553961148,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.Password_page()"
});
formatter.result({
  "duration": 11917095,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "qwertyu",
      "offset": 28
    }
  ],
  "location": "LoginStepDefinition.user_enters_password(String)"
});
formatter.result({
  "duration": 121702504,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.clicks_on_continue()"
});
formatter.result({
  "duration": 3139858039,
  "status": "passed"
});
});