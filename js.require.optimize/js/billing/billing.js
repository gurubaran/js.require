/**
 * 
 */
define(["backbone", "jquery"], function (Backbone, jQuery) {

	
	var Billing = Backbone.Model.extend({
	
		initialize: function(){
			alert("Welcome to billing");
		},
		
		add: function(x, y){
		    return x + y;
		}
	});
	
	return Billing;
	
});

