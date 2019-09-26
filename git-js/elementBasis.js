//First steps
	describe('My first steps', function(){
		it('shouyld fine two locators', function(){
			browser.waitForAngularEnabled(false);
			browser.get('https://google.com');
			browser.waitForAngularEnabled(true);
			browser.get('http://juliemr.github.io/protractor-demo/')
			element(by.model('first')).sendKeys(3);
			element(by.model('second')).sendKeys(5);
			element(by.id('gobutton')).click();
			expect(element(by.css("h2[class='ng-binding']")).getText()).toBe("8");
			// element(by.css("h2[class='ng-binding']")).getText().then(function(text)
			//  {
			// 	 console.log(text);
			//  });
			
			
		});
	});

