/**
 * 
 */
Ext.define('home.controller.homeControl', {
	extend : 'Ext.app.Controller',

	views: ['menu','main'],
	
	init : function() {
		this.control({
			'homeMenu button[action=logout]' : {
				click : this.onLogout
			}
		});
	},
	onLogout : function(){
		window.location.replace('/DailyNote');
	}
});