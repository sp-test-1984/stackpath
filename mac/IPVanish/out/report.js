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
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
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
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
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
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
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
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
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
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});