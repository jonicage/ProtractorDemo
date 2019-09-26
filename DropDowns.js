describe('Chain locator demo',function(){

	function calc(a,b,c)
	{
		element(by.model('first')).sendKeys(a);
		element(by.model('second')).sendKeys(b);

		element.all(by.tagName("option")).each(function(item)
		{
			item.getAttribute("value").then(function(values)
		{
			
			if(values==c)
			{
				item.click();
			}
		})
		})

		element(by.id('gobutton')).click();
	}
	
	it('testcase openBrowser',function(){
		browser.get('https://angularjs.org');

		browser.get('http://juliemr.github.io/protractor-demo/');
		//repeater, chain locators, css for identical text
		calc(2,8,"MULTIPLICATION");
		calc(2,8,"DIVISION");
		calc(2,8,"ADDITION");

		element.all(by.repeater("result in memory")).each(function(item)
		{
			item.element(by.css("td:nth-child(3)")).getText().then(function(text)
				{
			console.log(text);
				})
		})
		

		
		
	})
		
	
	
	
})