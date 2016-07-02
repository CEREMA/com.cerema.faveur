App.view.define('VMain', {

    extend: 'Ext.Panel',
	alias : 'widget.mainform',
	border: false,
	
	layout: "border",
	
	items: [
		{
			region: 'north',
			height: 25,
			minHeight: 25,
			border:false,
			baseCls: 'cls-header',
			xtype: "Menu",
			itemId: "MenuPanel",
			menu: [
			]		
		},
		{
			region: "center",			
			split:true,
			layout: "vbox",
			items: [
			{
				border: false,
				xtype: "textfield",
				fieldLabel: "CME substrat (en %)",
				labelWidth: 200,
				padding: 10
			},
			{
				border: false,
				xtype: "textfield",
				fieldLabel: "Epaisseur substrat (cm)",
				labelWidth: 200,
				padding: 10
			},
			{
				border: false,
				xtype: "combo",
				fieldLabel: "Nature de la végétation (S ou G)",
				labelWidth: 200,
				padding: 10,
				store: App.store.create({
					fields:["id"],
					data:[{id:"S"},{id:"G"}]
				})
			},
			{
				title: "Ile de France",
				xtype: "grid",
				columns: [
				{
					header: "CR annuel"
				},
				{
					header: "CR été"
				},
				{
					header: "CR hiver"
				},
				{
					header: "CR ev >1mm"
				},
				{
					header: "CR ev >1mm<br>été"
				},
				{
					header: "CR ev >1mm<br>hiver"
				},
				{
					header: "CR ev >5mm"
				},
				{
					header: "CR ev > 5mm<br>été"
				},	
				{
					header: "CR ev > 5mm<br>hiver"
				},	
				{
					header: "Ab annuel"
				},	
				{
					header: "AB<br>été"
				},	
				{
					header: "AB<br>hiver"
				},	
				{
					header: "AB ev >1mm"
				},	
				{
					header: "AB ev >1mm<br>été"
				},	
				{
					header: "AB ev >1mm<br>hiver"
				},
				{
					header: "AB ev >5mm"
				},	
				{
					header: "AB ev >5mm<br>été"
				},	
				{
					header: "AB ev >5mm<br>hiver"
				}					
				],
				width: "100%",
				store: App.store.create({fields:[],data:[]}),
				flex: 1
			},
			{
				title: "Montpellier",
				xtype: "grid",
				columns: [
				{
					header: "CR annuel"
				},
				{
					header: "CR été"
				},
				{
					header: "CR hiver"
				},
				{
					header: "CR ev >1mm"
				},
				{
					header: "CR ev >1mm<br>été"
				},
				{
					header: "CR ev >1mm<br>hiver"
				},
				{
					header: "CR ev >5mm"
				},
				{
					header: "CR ev > 5mm<br>été"
				},	
				{
					header: "CR ev > 5mm<br>hiver"
				},	
				{
					header: "Ab annuel"
				},	
				{
					header: "AB<br>été"
				},	
				{
					header: "AB<br>hiver"
				},	
				{
					header: "AB ev >1mm"
				},	
				{
					header: "AB ev >1mm<br>été"
				},	
				{
					header: "AB ev >1mm<br>hiver"
				},
				{
					header: "AB ev >5mm"
				},	
				{
					header: "AB ev >5mm<br>été"
				},	
				{
					header: "AB ev >5mm<br>hiver"
				}	
				],
				width: "100%",
				store: App.store.create({fields:[],data:[]}),
				flex: 1
			}
			]
		}
	]
	
});
