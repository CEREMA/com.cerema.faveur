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
				itemId: "cme",
				fieldLabel: "CME substrat (en %)",
				enableKeyEvents: true,
				labelWidth: 200,
				padding: 10
			},
			{
				border: false,
				xtype: "textfield",
				fieldLabel: "Epaisseur substrat (cm)",
				itemId: "epaisseur",
				enableKeyEvents: true,
				labelWidth: 200,
				padding: 10
			},
			{
				border: false,
				xtype: "combo",
				itemId: "nature",
				fieldLabel: "Nature de la végétation (S ou G)",
				labelWidth: 200,
				padding: 10,
				displayField: "id",
				valueField: "id",
				editable: false,	
				store: App.store.create({
					fields:["id"],
					data:[{id:"S"},{id:"G"}]
				})
			},
			{
				border: false,
				xtype: "textfield",
				itemId: "cint",
				fieldLabel: "<b>Cint (mm)</b>",
				labelWidth: 200,
				readOnly: true,
				padding: 10					
			},
			{
				title: "Ile de France",
				xtype: "grid",
				columns: [
				{
					header: "",
					dataIndex: "title"
				},
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
				store: App.store.create({
					fields:[
						"title"
					],
					data:[
					{
						title: "Minimum"
					},
					{
						title: "Moyenne"
					},
					{
						title: "Médiane"
					},
					{
						title: "Maximum"
					},
					{
						title: "q25"
					},
					{
						title: "q75"
					}
					]}),
				flex: 1
			},
			{
				title: "Montpellier",
				xtype: "grid",
				columns: [
				{
					header: "",
					dataIndex: "title",
					renderer: function(value, metadata, record, rowIndex, colIndex, store){
						metadata.attr = 'style="background-color: red;"';
						return value;
					}
				},
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
				store: App.store.create({
					fields:[
						"title"
					],
					data:[
					{
						title: "Minimum"
					},
					{
						title: "Moyenne"
					},
					{
						title: "Médiane"
					},
					{
						title: "Maximum"
					},
					{
						title: "q25"
					},
					{
						title: "q75"
					}
					]}),
				flex: 1
			}
			]
		}
	]
	
});
