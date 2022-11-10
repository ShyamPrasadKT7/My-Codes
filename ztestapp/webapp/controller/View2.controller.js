sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("ztestapp.controller.View2", {
            onInit: function () {

            },
            navBack:function(){
                this.getOwnerComponent().getRouter().navTo("View1");
            },
            onAfterRendering(){
                var s=this.getOwnerComponent().getModel("transferView").getProperty("/Name");
                this.getView().byId("name2").setValue(s);
                
            }

        });
    });
