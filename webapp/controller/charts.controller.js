sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("com.sap.Charts.controller.charts", {
		onInit: function () {
			/*	var json=new sap.ui.model.json.JSONModel();
			// Loading data to model
			  json.loadData("model/data.json",null,false);
			// Setting model to current view
			 this.getView().setModel(json);*/
			 
			 //ABOVE CODE ALSO WORKS
			 //BELOW ONE IS FOR JSON LOADS DAT ASYNCHRONOUSLY.SO SETMODEL WONT WORK IN ONINIT(IN SAME FUNCTION) SO WE USED ONAFTERRENDERING FUNCTION OTHERWISE USE ABOVE CODE
			 //json.loadData("model/data.json",null,false) IN THIS LINE WE ARE DISABLING(FALSE)  ASYNCHRONOUS LOAD(ENABLING SYNCHRONOUS)
			 
			this.json = new sap.ui.model.json.JSONModel();
			  this.json.loadData("model/data.json");
		},

		onAfterRendering: function () {
			this.getView().setModel(this.json);
		}

	});
});