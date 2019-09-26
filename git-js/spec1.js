//First parameter is to describe the Suit block
//Then It parameters to write the test cases
describe('Module name sanity/smoke/regression tests',function(){
	
	it('testcase openBrowser',function(){
		browser.get('https://angularjs.org');

		browser.get('http://juliemr.github.io/protractor-demo/');

		browser.sleep(9000);
		console.log("That was the first step");
	})
	
	
	
})