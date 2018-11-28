package stackpath;

import cucumber.api.PendingException;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.sikuli.script.FindFailed;
import org.sikuli.script.Key;
import org.sikuli.script.Match;
import stackpath.util.AppHelper;
import stackpath.util.Configuration;
import stackpath.util.Images;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.MalformedURLException;
import java.net.URL;
import java.util.Iterator;


public class Steps {

    private static final Configuration CONFIGURATION = Configuration.getConfiguration();
    private String myIpAddress;
    private final String WHAT_IS_MYIP = "http://bot.whatismyipaddress.com";

    @Given("^IPVanish is accessible$")
    public void ipvanish_is_accessible() throws Throwable {
        Assert.assertTrue(
                "application is not accessible ", AppHelper.launchApp());
    }

    @Given("^I am logged$")
    public void i_am_logged() throws Throwable {
        CONFIGURATION.getScreen().type(Images.USERNAME, CONFIGURATION.getUserName());
        CONFIGURATION.getScreen().type(Images.USERNAME, CONFIGURATION.getPassword());
        CONFIGURATION.getScreen().click(Images.LOGINBUTTON);
    }

    @When("^I select \"([^\"]*)\"$")
    public void i_select(String protocol) throws Throwable {
        // open preferences
        if(protocol.equals("udp")){
            takeANap();
        } else {
            CONFIGURATION.getScreen().type(",", Key.META);
            takeANap();
            CONFIGURATION.getScreen().click(Images.PROTOCOL_SELECTOR);
            takeANap();

            switch (protocol.toLowerCase()){
                case "ikev2":
                    CONFIGURATION.getScreen().click(Images.IKEV2);
                    break;
                case "ipsec":
                    CONFIGURATION.getScreen().click(Images.IPSEC);
                    break;
                case "l2tp":
                    CONFIGURATION.getScreen().click(Images.L2TP);
                    break;
                case "tcp":
                    CONFIGURATION.getScreen().click(Images.OPEN_TCP);
                    break;
            }
        }
    }

    @When("^attempt connection$")
    public void attempt_connection() throws Throwable {
        try {
            CONFIGURATION.getScreen().click(Images.QUICKCONNECT);
            takeANap();
            CONFIGURATION.getScreen().click(Images.CONNECT);
            takeANap();
            CONFIGURATION.getScreen().click(Images.ALLOW);
            CONFIGURATION.getScreen().type(Images.KEYPASSWORD, "vico2018");
            allMatches(Images.ALWAYSALLOW);
            CONFIGURATION.getScreen().hover(Images.ALWAYSALLOW);
            CONFIGURATION.getScreen().click(Images.ALWAYSALLOW);
            takeANap();
        } catch (FindFailed findFailed) {

        }
    }

    @Then("^I should successfully connect$")
    public void i_should_successfully_connect() throws Throwable {
        Assert.assertNotEquals(
                "ip address must differ after connection",
                myIpAddress, getMyIP());
    }

    @Before
    public void setUp() {
        myIpAddress = getMyIP();
        System.out.println("ip address: " + myIpAddress);
    }

    @After
    public void tearDown(){
        try {
            CONFIGURATION.getScreen().click(Images.ACCOUNT);
            CONFIGURATION.getScreen().click(Images.LOGOUTBUTTON);
            CONFIGURATION.getScreen().click(Images.CONFIRM);
            takeANap();
        } catch (FindFailed findFailed) {
            findFailed.printStackTrace();
        }
    }

    private void takeANap() {
        try{
            Thread.sleep(4000);
        }  catch (InterruptedException e){
            e.printStackTrace();
        }
    }

    void allMatches(String image) {
        try {
            Iterator<Match> all = CONFIGURATION.getScreen().findAll(image);
            Match el = null;
            while (all.hasNext()) {
                el = all.next();
            }
        } catch (FindFailed findFailed) {
            findFailed.printStackTrace();
        }
    }

    private String getMyIP() {
        String myIP = "";
        try {
            URL url = new URL(WHAT_IS_MYIP);
            BufferedReader streamReader =
                    new BufferedReader(new InputStreamReader(url.openStream()));
            myIP = streamReader.readLine().trim();
        } catch (MalformedURLException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }
        return myIP;
    }

    }
