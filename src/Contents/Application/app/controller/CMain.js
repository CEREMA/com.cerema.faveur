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
				keyup: "updateDisplay"
			},
			"mainform textfield#epaisseur": {
				keyup: "updateDisplay"
			},
			"mainform combo#nature": {
				select: "updateDisplay"
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
	updateDisplay: function()
	{
		var cme=App.get('mainform textfield#cme').getValue()*1;
		var epaisseur=App.get('mainform textfield#epaisseur').getValue()*1;
		alert(cme);
		if (epaisseur<5) App.get('mainform textfield#cint').setValue(cme*epaisseur/10); else App.get('mainform textfield#cint').setValue(5*cme/10);
 	},
	onLoad: function()
	{
		// form loaded	
	}
	
	
});
