$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("quick_connect.feature");
formatter.feature({
  "line": 1,
  "name": "quick connect",
  "description": "",
  "id": "quick-connect",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 2,
  "name": "User must be able  to establish a successful connection with all available protocols.",
  "description": "",
  "id": "quick-connect;user-must-be-able--to-establish-a-successful-connection-with-all-available-protocols.",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "IPVanish is accessible",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "I am logged",
  "keyword": "And "
});
formatter.step({
  "line": 5,
  "name": "I select \"\u003cprotocol\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "attempt connection",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I should successfully connect",
  "keyword": "Then "
});
formatter.examples({
  "line": 10,
  "name": "protocol permutations",
  "description": "",
  "id": "quick-connect;user-must-be-able--to-establish-a-successful-connection-with-all-available-protocols.;protocol-permutations",
  "rows": [
    {
      "cells": [
        "protocol"
      ],
      "line": 11,
      "id": "quick-connect;user-must-be-able--to-establish-a-successful-connection-with-all-available-protocols.;protocol-permutations;1"
    },
    {
      "cells": [
        "ikev2"
      ],
      "line": 12,
      "id": "quick-connect;user-must-be-able--to-establish-a-successful-connection-with-all-available-protocols.;protocol-permutations;2"
    },
    {
      "cells": [
        "tcp"
      ],
      "line": 13,
      "id": "quick-connect;user-must-be-able--to-establish-a-successful-connection-with-all-available-protocols.;protocol-permutations;3"
    },
    {
      "cells": [
        "ipsec"
      ],
      "line": 14,
      "id": "quick-connect;user-must-be-able--to-establish-a-successful-connection-with-all-available-protocols.;protocol-permutations;4"
    },
    {
      "cells": [
        "l2tp"
      ],
      "line": 15,
      "id": "quick-connect;user-must-be-able--to-establish-a-successful-connection-with-all-available-protocols.;protocol-permutations;5"
    },
    {
      "cells": [
        "udp"
      ],
      "line": 16,
      "id": "quick-connect;user-must-be-able--to-establish-a-successful-connection-with-all-available-protocols.;protocol-permutations;6"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 12,
  "name": "User must be able  to establish a successful connection with all available protocols.",
  "description": "",
  "id": "quick-connect;user-must-be-able--to-establish-a-successful-connection-with-all-available-protocols.;protocol-permutations;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "IPVanish is accessible",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "I am logged",
  "keyword": "And "
});
formatter.step({
  "line": 5,
  "name": "I select \"ikev2\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "attempt connection",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I should successfully connect",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.ipvanish_is_accessible()"
});
formatter.result({
  "duration": 792430031,
  "status": "passed"
});
formatter.match({
  "location": "Steps.i_am_logged()"
});
formatter.result({
  "duration": 1291817,
  "error_message": "cucumber.api.PendingException: TODO: implement me\n\tat stackpath.Steps.i_am_logged(Steps.java:25)\n\tat ✽.And I am logged(quick_connect.feature:4)\n",
  "status": "pending"
});
formatter.match({
  "arguments": [
    {
      "val": "ikev2",
      "offset": 10
    }
  ],
  "location": "Steps.i_select(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.attempt_connection()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.i_should_successfully_connect()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 13,
  "name": "User must be able  to establish a successful connection with all available protocols.",
  "description": "",
  "id": "quick-connect;user-must-be-able--to-establish-a-successful-connection-with-all-available-protocols.;protocol-permutations;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "IPVanish is accessible",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "I am logged",
  "keyword": "And "
});
formatter.step({
  "line": 5,
  "name": "I select \"tcp\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "attempt connection",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I should successfully connect",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.ipvanish_is_accessible()"
});
formatter.result({
  "duration": 4462749,
  "status": "passed"
});
formatter.match({
  "location": "Steps.i_am_logged()"
});
formatter.result({
  "duration": 210909,
  "error_message": "cucumber.api.PendingException: TODO: implement me\n\tat stackpath.Steps.i_am_logged(Steps.java:25)\n\tat ✽.And I am logged(quick_connect.feature:4)\n",
  "status": "pending"
});
formatter.match({
  "arguments": [
    {
      "val": "tcp",
      "offset": 10
    }
  ],
  "location": "Steps.i_select(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.attempt_connection()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.i_should_successfully_connect()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 14,
  "name": "User must be able  to establish a successful connection with all available protocols.",
  "description": "",
  "id": "quick-connect;user-must-be-able--to-establish-a-successful-connection-with-all-available-protocols.;protocol-permutations;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "IPVanish is accessible",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "I am logged",
  "keyword": "And "
});
formatter.step({
  "line": 5,
  "name": "I select \"ipsec\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "attempt connection",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I should successfully connect",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.ipvanish_is_accessible()"
});
formatter.result({
  "duration": 5034405,
  "status": "passed"
});
formatter.match({
  "location": "Steps.i_am_logged()"
});
formatter.result({
  "duration": 247504,
  "error_message": "cucumber.api.PendingException: TODO: implement me\n\tat stackpath.Steps.i_am_logged(Steps.java:25)\n\tat ✽.And I am logged(quick_connect.feature:4)\n",
  "status": "pending"
});
formatter.match({
  "arguments": [
    {
      "val": "ipsec",
      "offset": 10
    }
  ],
  "location": "Steps.i_select(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.attempt_connection()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.i_should_successfully_connect()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 15,
  "name": "User must be able  to establish a successful connection with all available protocols.",
  "description": "",
  "id": "quick-connect;user-must-be-able--to-establish-a-successful-connection-with-all-available-protocols.;protocol-permutations;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "IPVanish is accessible",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "I am logged",
  "keyword": "And "
});
formatter.step({
  "line": 5,
  "name": "I select \"l2tp\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "attempt connection",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I should successfully connect",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.ipvanish_is_accessible()"
});
formatter.result({
  "duration": 7001450,
  "status": "passed"
});
formatter.match({
  "location": "Steps.i_am_logged()"
});
formatter.result({
  "duration": 254486,
  "error_message": "cucumber.api.PendingException: TODO: implement me\n\tat stackpath.Steps.i_am_logged(Steps.java:25)\n\tat ✽.And I am logged(quick_connect.feature:4)\n",
  "status": "pending"
});
formatter.match({
  "arguments": [
    {
      "val": "l2tp",
      "offset": 10
    }
  ],
  "location": "Steps.i_select(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.attempt_connection()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.i_should_successfully_connect()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 16,
  "name": "User must be able  to establish a successful connection with all available protocols.",
  "description": "",
  "id": "quick-connect;user-must-be-able--to-establish-a-successful-connection-with-all-available-protocols.;protocol-permutations;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "IPVanish is accessible",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "I am logged",
  "keyword": "And "
});
formatter.step({
  "line": 5,
  "name": "I select \"udp\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "attempt connection",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I should successfully connect",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.ipvanish_is_accessible()"
});
formatter.result({
  "duration": 4871984,
  "status": "passed"
});
formatter.match({
  "location": "Steps.i_am_logged()"
});
formatter.result({
  "duration": 222139,
  "error_message": "cucumber.api.PendingException: TODO: implement me\n\tat stackpath.Steps.i_am_logged(Steps.java:25)\n\tat ✽.And I am logged(quick_connect.feature:4)\n",
  "status": "pending"
});
formatter.match({
  "arguments": [
    {
      "val": "udp",
      "offset": 10
    }
  ],
  "location": "Steps.i_select(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.attempt_connection()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.i_should_successfully_connect()"
});
formatter.result({
  "status": "skipped"
});
});