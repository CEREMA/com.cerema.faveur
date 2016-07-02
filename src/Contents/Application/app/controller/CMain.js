App.controller.define('CMain', {

	views: [
		"VMain"
	],
	
	models: [
	],
	
	init: function()
	{

		this.control({
			"menu>menuitem": {
				click: "Menu_onClick"
			},
			"mainform textfield#cme": {
				click: "clickme_onclick"
			},
			"mainform textfield#epaisseur": {
				click: "clickme_onclick"
			},
			"mainform combo#nature": {
				click: "clickme_onclick"
			}
		});
		
		App.init('VMain',this.onLoad);
		
	},
	Menu_onClick: function(p)
	{
		if (p.itemId) {
			Ext.Msg.alert('Status', 'Click event on '+p.itemId);
		};			
	},
	clickme_onclick: function()
	{
		
	},
	onLoad: function()
	{
		// form loaded	
	}
	
	
});
