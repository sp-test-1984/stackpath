Feature: quick connect
    Scenario Outline: User must be able  to establish a successful connection with all available protocols.
        Given IPVanish is accessible
        And I am logged
        When I select "<protocol>"
        And attempt connection
        Then I should successfully connect


 Examples: protocol permutations
    | protocol |
    | ikev2    |
    | tcp      |
    | ipsec    |
    | l2tp     |
    | udp      |