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
				html: "hello world !",
				padding: 10,
				height: 100
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
									 		/*	Ab annuel	AB ete	AB hiver	AB ev >1mm	AB ev >1mm été	AB ev >1mm hiver	AB ev >5mm	AB ev >5mm été	AB ev >5mm hiver*/
				],
				width: "100%",
				store: App.store.create({fields:[],data:[]}),
				flex: 1
			},
			{
				title: "Montpellier",
				xtype: "grid",
				columns: [],
				width: "100%",
				store: App.store.create({fields:[],data:[]}),
				flex: 1
			}
			]
		}
	]
	
});
