package Runner;
import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;



@RunWith(Cucumber.class)
@CucumberOptions(
		features = "C:\\Users\\dhiva\\eclipse-workspace\\AmazonBDDframework\\src\\main\\java\\Features\\password.feature",
		glue={"StepDefinition"},
		format= {"pretty","html:test-outout","json:json_output/cucumber.json", "junit:junit_xml/cucumber.xml"},
		monochrome=true,
		strict=true,
		dryRun=false
		)
 	



public class TestRunner {

	
	
	
}
