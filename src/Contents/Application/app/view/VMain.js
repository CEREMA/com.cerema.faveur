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
				columns: [],
				width: "100%",
				store: App.store.create({fields:[],data:[]}),
				flex: 1
			},
			{
				title: "Ile de France",
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
