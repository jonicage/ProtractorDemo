describe('Actions demo',function(){
	
	it('open posse website',function(){

		browser.get('http://posse.com/');

		element(by.model("userInputQuery")).sendKeys("river");
		browser.actions().mouseMove(element(by.model("locationQuery")).sendKeys("Londond")).perform();
		browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform()
		browser.actions().sendKeys(protractor.Key.ENTER).perform().then(function()
		{
			browser.sleep(5000);
			expect(element.all(by.css("div[ng-mouseover='onSearchResultOver']")).count()).toEqual(7);
			element.all(by.css("div[ng-mouseover='onSearchResultOver']")).get(0).click();
			element(by.css("a[ng-href*='London/River Island']")).click().then(function()
			{
				browser.getAllWindowHanles().then(function(hanles)
				{
					browser.getTitle().then(function(title)
					{
						console.log(title+" before swithch");
					});
					browser.switchTo().window(hanles[1]);
					browser.getTitle().then(function(title)
					{	
							//juste some changes
						console.log(title+" after the switch-1");

						console.log(title+" after the switch0");

						console.log(title+" after the switch1");
						console.log(title+" after the switch2");
						console.log(title+" after the switch3");
						console.log(title+" after the switch4");
						console.log(title+" after the switch5");
					});

				});
						
						
			});
		}
		);;
		})
	
	//juste some changes
	
})