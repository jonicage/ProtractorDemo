function car(){


	this.firstInput=element(by.model('first'));
	this.secondInput=element(by.model('second'));
	this.goButton=element(by.id('gobutton'));
	this.result=element(by.css("h2[class='ng-binding']"));

	this.color="red";
	this.engien="turbo";
	this.brand="Opel";
	this.search="by.css('input')";

	this.getURL=function()
	{
		browser.get('http://juliemr.github.io/protractor-demo/');
	};
};

module.exports = new car();
// a.getModel();
// console.log(a.engien);