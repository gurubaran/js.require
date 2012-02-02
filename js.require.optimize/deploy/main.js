define("billing/billing", [ "backbone", "jquery" ], function(a) {
	return a.Model.extend({
		initialize : function() {
			alert("Welcome to this world")
		},
		add : function(a, b) {
			return a + b
		}
	})
});
define("app", [ "jquery", "underscore", "backbone", "./billing/billing" ],
		function(a, d, b, c) {
			return {
				initialize : function() {
					var a = new c;
					alert(a.add(4, 5))
				}
			}
		});
require.config({
	paths : {
		jquery : "libs/jquery",
		underscore : "libs/underscore",
		backbone : "libs/backbone"
	}
});
var Main = require([ "app" ], function(a) {
	a.initialize()
});
define("main", function() {
});


