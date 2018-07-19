package StepDefinition;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;



public class LoginStepDefinition {
	WebDriver driver;
	
	@Given("^User is already in login page$")
	public void User_in_Loginpage() {
		System.setProperty("webdriver.chrome.driver", "./Driver/chromedriver.exe");
		 driver=new ChromeDriver();
		 driver.get("https://www.amazon.in/ap/signin?_encoding=UTF8&ignoreAuthState=1&openid.assoc_handle=inflex&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.mode=checkid_setup&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&openid.ns.pape=http%3A%2F%2Fspecs.openid.net%2Fextensions%2Fpape%2F1.0&openid.pape.max_auth_age=0&openid.return_to=https%3A%2F%2Fwww.amazon.in%2F%3Fref_%3Dnav_signin&switch_account=");
		}
	
	
	@When("^title of login page is Amazon$")
	public void Loginpage_title() {
		String title=driver.getTitle();
		Assert.assertEquals("Amazon Sign In", title);
	
		
	}
	
	@Then("^user enters \"(.*)\"$")
	public void user_enters_emailid(String username) {
		
		driver.findElement(By.id("ap_email")).sendKeys(username);
		
		
	}

	@Then("^user clicks on continue$")
	public void user_clicks_on_continue() {
		driver.findElement(By.id("continue")).click();
		}

	@Then("^user is on password page$")
	public void Password_page() {
		String title=driver.getTitle();
		Assert.assertEquals("Amazon Sign In", title);
		System.out.println(title);
		
	
	}
	
	
	@Then("^user entering the password \"(.*)\"$")
	public void user_enters_password(String password) {
		
		driver.findElement(By.id("ap_password")).sendKeys(password);
		
		
	}
	@Then("^clicks on continue$")
	public void clicks_on_continue() {
		driver.findElement(By.id("signInSubmit")).click();
	    driver.quit();
	}

	

	
	
}
