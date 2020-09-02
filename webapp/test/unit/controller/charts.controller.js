/*global QUnit*/

sap.ui.define([
	"com/sap/Charts/controller/charts.controller"
], function (oController) {
	"use strict";

	QUnit.module("charts Controller");

	QUnit.test("I should test the charts controller", function (assert) {
		var oAppController = new oController();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});