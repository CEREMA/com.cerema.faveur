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
                itemId: "idf",
				columns: [
				{
					header: "",
					dataIndex: "title",
					renderer: function(value, metadata, record, rowIndex, colIndex, store){
						metadata.style = 'background-color: lightgreen;';
						return value;
					}
				},
				{
					header: "CR annuel",
                    dataIndex: "A"
				},
				{
					header: "CR été",
                    dataIndex: "B"
				},
				{
					header: "CR hiver",
                    dataIndex: "C"
				},
				{
					header: "CR ev >1mm",
                    dataIndex: "D"
				},
				{
					header: "CR ev >1mm<br>été",
                    dataIndex: "E"
				},
				{
					header: "CR ev >1mm<br>hiver",
                    dataIndex: "F"
				},
				{
					header: "CR ev >5mm",
                    dataIndex: "G"
				},
				{
					header: "CR ev > 5mm<br>été",
                    dataIndex: "H"
				},	
				{
					header: "CR ev > 5mm<br>hiver",
                    dataIndex: "I"
				},	
				{
					header: "Ab annuel",
                    dataIndex: "J"
				},	
				{
					header: "AB<br>été",
                    dataIndex: "K"
				},	
				{
					header: "AB<br>hiver",
                    dataIndex: "L"
				},	
				{
					header: "AB ev >1mm",
                    dataIndex: "M"
				},	
				{
					header: "AB ev >1mm<br>été",
                    dataIndex: "N"
				},	
				{
					header: "AB ev >1mm<br>hiver",
                    dataIndex: "O"
				},
				{
					header: "AB ev >5mm",
                    dataIndex: "P"
				},	
				{
					header: "AB ev >5mm<br>été",
                    dataIndex: "Q"
				},	
				{
					header: "AB ev >5mm<br>hiver",
                    dataIndex: "R"
				}					
				],
				width: "100%",
				store: App.store.create({
					fields:[
						"title",
                        "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R"
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
                itemId: "Montpellier",
				xtype: "grid",
				columns: [
				{
					header: "",
					dataIndex: "title",
					renderer: function(value, metadata, record, rowIndex, colIndex, store){
						metadata.style = 'background-color: lightgreen;';
						return value;
					}
				},
				{
					header: "CR annuel",
                    dataIndex: "A",
                    align: "right"
				},
				{
					header: "CR été",
                    dataIndex: "B"
				},
				{
					header: "CR hiver",
                    dataIndex: "C"
				},
				{
					header: "CR ev >1mm",
                    dataIndex: "D"
				},
				{
					header: "CR ev >1mm<br>été",
                    dataIndex: "E"
				},
				{
					header: "CR ev >1mm<br>hiver",
                    dataIndex: "F"
				},
				{
					header: "CR ev >5mm",
                    dataIndex: "G"
				},
				{
					header: "CR ev > 5mm<br>été",
                    dataIndex: "H"
				},	
				{
					header: "CR ev > 5mm<br>hiver",
                    dataIndex: "I"
				},	
				{
					header: "Ab annuel",
                    dataIndex: "J"
				},	
				{
					header: "AB<br>été",
                    dataIndex: "K"
				},	
				{
					header: "AB<br>hiver",
                    dataIndex: "L"
				},	
				{
					header: "AB ev >1mm",
                    dataIndex: "M"
				},	
				{
					header: "AB ev >1mm<br>été",
                    dataIndex: "N"
				},	
				{
					header: "AB ev >1mm<br>hiver",
                    dataIndex: "O"
				},
				{
					header: "AB ev >5mm",
                    dataIndex: "P"
				},	
				{
					header: "AB ev >5mm<br>été",
                    dataIndex: "Q"
				},	
				{
					header: "AB ev >5mm<br>hiver",
                    dataIndex: "R"
				}					
				],
				width: "100%",
				store: App.store.create({
					fields:[
						"title",
                        "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R"
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
