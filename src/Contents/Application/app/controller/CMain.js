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
		if (epaisseur<5) App.get('mainform textfield#cint').setValue(cme*epaisseur/10); else App.get('mainform textfield#cint').setValue(5*cme/10);
        var obj={
            coef: "ls_coef_IdF",
            cint: App.get('mainform textfield#cint').getValue(),
            nature: App.get('mainform combo#nature').getValue()
        };
        App.Calcul.getAll(obj,function(result){
            App.get('mainform grid#idf').getStore().loadData(result); 
        });
        var obj={
            coef: "ls_coef_Montpellier",
            cint: App.get('mainform textfield#cint').getValue(),
            nature: App.get('mainform combo#nature').getValue()
        };
        App.Calcul.getAll(obj,function(result){
            console.log(result);    
            App.get('mainform grid#Montpellier').getStore().loadData(result); 
        });
 	},
	onLoad: function()
	{
		// form loaded	
	}
	
	
});
