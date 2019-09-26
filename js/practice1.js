
describe('sync nonAngular websites',function(){
		//take all cards from the list
		//go through each card in the list - and get the title - if title = desired title i will select add button
	function selectItems(product){
		element.all(by.tagName("app-card")).each(function(item)
			{
				item.element(by.css("h4 a")).getText().then(function(text)
				{
					if(text==product)
					{
						//click on card button
						item.element(by.css("button[class*='btn-info']")).click();
					}

				});
			})
	}
	
	it('testcase openBrowser',function(){


		browser.get('https://qaclickacademy.github.io/protocommerce/');

		element(by.name("name")).sendKeys("Nedyalko");
		element(by.css("input[name='email']")).sendKeys("Nedyalko@test.fb");
		element(by.id("exampleInputPassword1")).sendKeys("123456");
		element(by.css("input[type='checkbox']")).click();
		element(by.cssContainingText("[id='exampleFormControlSelect1'] option", "Female")).click();
		element.all(by.name("inlineRadioOptions")).first().click();
		element(by.buttonText("Submit")).click().then(function()
		{
			element(by.css("div[class*='success']")).getText().then(function(text)
			{
				console.log(text);
			})

			element(by.name("name")).clear();
			element(by.name("name")).sendKeys("N").then(function()
			{
				element(by.css("div[class='alert alert-danger']")).getText().then(function(text)
				{
					console.log(text);
				})
			});
			
			element(by.linkText("Shop")).click();
			
			selectItems("Samsung Note 8");
			selectItems("iphone X");

			element(by.partialLinkText("Checkout")).getText().then(function(text)
			{
				var res=text.split("(");
				// var x=Number(res[0].trim().charAt(0));
				// var y=x+1;
				// console.log(y);

				expect(res[1].trim().charAt(0)).toBe("2");
			});

			element(by.partialLinkText("Checkout")).click();
			element.all(by.tagName("table tbody")).each(function(item)
			{
				item.element(by.tagName("td nth-child(4)")).getText().then(function(text)
				{
					console.log(text);
				})
			})

		});


		
	})
	
	
	
})