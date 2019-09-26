var loc = require("./Objects.js");
var using = require('jasmine-data-provider');
var res = require("./jasmine-data.js");

describe('Chain locator demo', function(){
		beforeEach(function(){
			loc.getURL();
		});

		using(res.Datadriver, function (data, description)
		{

			
	it('testcase openBrowser '+ description,function(){
		// browser.get('https://angularjs.org');

		//repeater, chain locators, css for identical text
		loc.firstInput.sendKeys(data.firstInput);
		loc.secondInput.sendKeys(data.secondInput);
		loc.goButton.click();
		expect(loc.result.getText()).toBe(data.result);
		 loc.result.getText().then(function(text)
		{
			console.log(text);

		});

		// loc.firstInput.sendKeys(5);
		// loc.secondInput.sendKeys(5);
		// // element(by.model("operator")).element(by.css("option[value='MULTIPLICATION']")).click();
		// loc.goButton.click();
		/*
		.element(by.css("td:nth-child(3)")).getText().then(function(text)
		{
			console.log(text);
		});
		*/
		// element(by.repeater("result in memory")).element(by.css("td:nth-child(3)")).getText().then(function(text)
		// {
		// 	console.log(text);
		// })

		// element.all(by.repeater("result in memory")).each(function(item)
		// 	{
		// 	item.element(by.css("td:nth-child(3)")).getText().then(function(text)
		// 		{
		// 	console.log(text);
		// 		})
		// })
		});
	});
	
		afterEach(function(){
			console.log("test is completed");
		});
	
});