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

## Known problems
There are two known problems with the default setup:

- The karma-openui5 plugin does not run the mockserver correctly. This may result in 
```
Uncaught ReferenceError: module is not defined
at /node_modules/karma-openui5/lib/mockserver.js:7
```
To temporary fix it, modify node_modules/karma-openui5/lib/mockserver.js by adding
```javascript
if (typeof module === undefined){
  var module = undefined;
}
```

[See Bug report](https://github.com/SAP/karma-openui5/pull/2)

- The OpenUI5 bower packages seems to have [a problem](https://github.com/SAP/openui5/issues/765)
As a workaround you can replace bower_components/resource/sap-ui-core.js with the unpackaged version from the [SDK download] (http://openui5.org/download.html) and everything works fine. 