sap.ui.define(['sap/ui/core/UIComponent'],
	function (UIComponent) {
		"use strict";

		var Component = UIComponent.extend("sap.m.tutorial.testing.01.Component", {

			metadata: {
				config: {
					sample: {
						iframe: "WebContent/test/testService.html",
						stretch: true,
						files: [
							"WebContent/controller/App.controller.js",
							"WebContent/controller/BaseController.js",
							"WebContent/controller/Worklist.controller.js",
							"WebContent/i18n/i18n.properties",
							"WebContent/localService/mockdata/Posts.json",
							"WebContent/localService/metadata.xml",
							"WebContent/localService/mockserver.js",
							"WebContent/model/formatter.js",
							"WebContent/model/FlaggedType.js",
							"WebContent/model/models.js",
							"WebContent/test/testsuite.qunit.html",
							"WebContent/test/integration/pages/Common.js",
							"WebContent/test/integration/pages/Worklist.js",
							"WebContent/test/integration/AllJourneys.js",
							"WebContent/test/integration/opaTests.qunit.html",
							"WebContent/test/integration/WorklistJourney.js",
							"WebContent/test/unit/model/formatter.js",
                            "WebContent/test/unit/model/FlaggedType.js",
							"WebContent/test/unit/model/models.js",
							"WebContent/test/unit/allTests.js",
							"WebContent/test/unit/unitTests.qunit.html",
							"WebContent/test/test.html",
							"WebContent/test/testService.html",
							"WebContent/view/App.view.xml",
							"WebContent/view/Worklist.view.xml",
							"WebContent/Component.js",
							"WebContent/manifest.json"
						]
					}
				}
			}

		});

		return Component;

	});
