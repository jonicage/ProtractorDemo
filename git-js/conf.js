var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');


exports.config = {
  // seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['CainLocators.js'],

  jasmineNodeOpts: {
    showColors: true, // Use colors in the command line report.
  },

  //Declaration of preRequest to all tests
  onPrepare :function()
  {
    browser.driver.manage().window().maximize();
    jasmine.getEnv().addReporter(
        new Jasmine2HtmlReporter({
          savePath: 'target/screenshots'
        })
      );
  },
  
  //Configure running of partially scripts in suites
  suites: {
    Smoke: ['CainLocators.js','DropDowns.js'],
    Regression: 'Actions.js'
  },


  capabilities: {
    'browserName': 'chrome',
    'goog:chromeOptions': {
       'w3c': false
    }
  }
  // capabilities: {
  // 'browserName': 'firefox'
  // }
  // capabilities: {
  // 'browserName': 'internet explorer'
  // }

};

