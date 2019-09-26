describe('Chain locator demo',function(){

	function add(a,b)
	{
		element(by.model('first')).sendKeys(a);
		element(by.model('second')).sendKeys(b);
		element(by.id('gobutton')).click();
	}
	
	it('testcase openBrowser',function(){
		browser.get('https://angularjs.org');

		browser.get('http://juliemr.github.io/protractor-demo/');
		//repeater, chain locators, css for identical text
		add(2,8);
		add(2,7);
		add(2,6);
		add(2,5);
		add(2,4);
		add(2,3);
		add(2,2);

		element.all(by.repeater("result in memory")).count().then(function(text){
			console.log(text);
		});

		element.all(by.repeater("result in memory")).each(function(item)
		{
			item.element(by.css("td:nth-child(3)")).getText().then(function(text)
				{
			console.log(text);
				})
		})
	})
		
	
	
	
})