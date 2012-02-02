
require.config({
	paths : {
		jquery : "libs/jquery",
		underscore : "libs/underscore",
		backbone : "libs/backbone"
	}
});
var Main = require([ "app" ], function(app) {
	app.initialize()
});
