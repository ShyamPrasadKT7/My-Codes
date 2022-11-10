sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("ztestapp.controller.View1", {
            onInit: function () {

            },
            onSubmit:function(){
//test push to btp
                var oData = { VATCode : "sVATCode" };
                var oViewModel = new sap.ui.model.json.JSONModel(oData);
            this.getOwnerComponent().setModel(oViewModel, "transferView");
            var name = this.getView().byId("name").getValue();
            this.getView().getModel("transferView").setProperty("/Name",name);
//this.getView().getModel("oModelTest").setProperty("/Name") == "Shyam";
//var name = this.getView().getModel("oModelTest").getProperty("/Name");
//sap.m.MessageToast.show(name);

               this.getOwnerComponent().getRouter().navTo("View2");
            }

        
        });
    });
