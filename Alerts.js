describe('alert steps',function(){
	
	it('Open non-angular website',function(){
		
		browser.waitForAngularEnabled(false);
		browser.get('http://qaclickacademy.com/practice.php');

		element(by.id("confirmbtn")).click();
		// browser.switchTo().alert().accept()
		browser.switchTo().alert().dismiss().then(function()
		{
			browser.sleep(3000);
		}); 
		

	})
	
	
	
})