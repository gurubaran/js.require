define(['jquery', 'underscore', 'backbone',"./billing/billing"], function($, _, Backbone,Billing) {

	return {
        initialize: function() {
            
        	var myBill = new Billing();
        	
        	alert(myBill.add(4,5));
        	
        }
    };

});