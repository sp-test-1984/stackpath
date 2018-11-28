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
formatter.before({
  "duration": 2364830439,
  "status": "passed"
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
  "duration": 92831427,
  "status": "passed"
});
formatter.match({
  "location": "Steps.i_am_logged()"
});
formatter.result({
  "duration": 4558358257,
  "status": "passed"
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
  "duration": 9716615102,
  "status": "passed"
});
formatter.match({
  "location": "Steps.attempt_connection()"
});
formatter.result({
  "duration": 19007682446,
  "status": "passed"
});
formatter.match({
  "location": "Steps.i_should_successfully_connect()"
});
formatter.result({
  "duration": 305300151,
  "status": "passed"
});
formatter.after({
  "duration": 8002245765,
  "status": "passed"
});
formatter.before({
  "duration": 145020746,
  "status": "passed"
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
  "duration": 8270766,
  "status": "passed"
});
formatter.match({
  "location": "Steps.i_am_logged()"
});
formatter.result({
  "duration": 4114902986,
  "status": "passed"
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
  "duration": 9702803261,
  "status": "passed"
});
formatter.match({
  "location": "Steps.attempt_connection()"
});
formatter.result({
  "duration": 12991588402,
  "status": "passed"
});
formatter.match({
  "location": "Steps.i_should_successfully_connect()"
});
formatter.result({
  "duration": 298844693,
  "status": "passed"
});
formatter.after({
  "duration": 7923758944,
  "status": "passed"
});
formatter.before({
  "duration": 143479978,
  "status": "passed"
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
  "duration": 7911093,
  "status": "passed"
});
formatter.match({
  "location": "Steps.i_am_logged()"
});
formatter.result({
  "duration": 4132185454,
  "status": "passed"
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
  "duration": 9662722149,
  "status": "passed"
});
formatter.match({
  "location": "Steps.attempt_connection()"
});
formatter.result({
  "duration": 19775849735,
  "status": "passed"
});
formatter.match({
  "location": "Steps.i_should_successfully_connect()"
});
formatter.result({
  "duration": 178177387,
  "status": "passed"
});
formatter.after({
  "duration": 7953834294,
  "status": "passed"
});
formatter.before({
  "duration": 134686929,
  "status": "passed"
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
  "duration": 8730824,
  "status": "passed"
});
formatter.match({
  "location": "Steps.i_am_logged()"
});
formatter.result({
  "duration": 4133304942,
  "status": "passed"
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
  "duration": 9675874107,
  "status": "passed"
});
formatter.match({
  "location": "Steps.attempt_connection()"
});
formatter.result({
  "duration": 12944841197,
  "status": "passed"
});
formatter.match({
  "location": "Steps.i_should_successfully_connect()"
});
formatter.result({
  "duration": 188690696,
  "status": "passed"
});
formatter.after({
  "duration": 7940857104,
  "status": "passed"
});
formatter.before({
  "duration": 135191814,
  "status": "passed"
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
  "duration": 8696879,
  "status": "passed"
});
formatter.match({
  "location": "Steps.i_am_logged()"
});
formatter.result({
  "duration": 4124635294,
  "status": "passed"
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
  "duration": 4003957013,
  "status": "passed"
});
formatter.match({
  "location": "Steps.attempt_connection()"
});
formatter.result({
  "duration": 12919293030,
  "status": "passed"
});
formatter.match({
  "location": "Steps.i_should_successfully_connect()"
});
formatter.result({
  "duration": 145615891,
  "status": "passed"
});
formatter.after({
  "duration": 7923687745,
  "status": "passed"
});
});