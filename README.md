# karma-openui5-sample
Example for automated testing an OpenUI5 project using Karma runner 

This sample is based on the [testing tutorial application](https://openui5beta.hana.ondemand.com/#docs/guide/291c9121e6044ab381e0b51716f97f52.html)

## Prerequisites
Node.js and Bower should be installed. 
You need Chrome installed on the machine running the tests.

## Running
You can run the sample by checking out and then execute:
1. npm install
2. bower install
3. karma start karma.conf.js

## Configuration
The Karma runner is configured in karma.conf.js. The sample uses a mockserver and runs QUnit and opa tests automatically in Chrome. 
The output is recorded as JUnit xml.

## Note
- In the order of the declared frameworks in karma.conf.js is important it is important that openui5 is listed before qunit, 
otherwise the mockserver is not working correctly.
- Make sure in the *.qunit.js wrappers for automated test the test modules are included using sap.ui.require 