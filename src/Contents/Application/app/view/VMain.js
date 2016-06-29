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
			layout: "fit",
			items: [
{
				xtype: "schedulergrid",
				flex: 1,
				width: "100%",
			    startDate     : new Date(2016, 5, 1),
				endDate       : new Date(2016, 5, 7),
				startTime     : 6,
				endTime       : 19,
				resourceStore : App.resourcestore.create({
					data:[        
							{ Id : 'r0', Name : 'Unassigned', Color : '#000' }
						 ]
				}),
				eventStore    : App.eventstore.create({
					fields:[],
					data:[]
				}),
				style         : 'border: 1px solid #d0d0d0;',

				showTodayLine : true,
				viewPreset   : 'hourAndDay',

    			calendarColumnClass : 'App.column.Day',
				//calendarViewPreset   : 'day',
				mode                 : 'calendar',
				eventResizeHandles   : 'end',
				eventBodyTemplate    : '{Name}',
				snapToIncrement      : true,
				highlightCurrentTime : true,
				calendarTimeAxisCfg  : {
        			height : 30
    			}
			}
			]
		}
	]
	
});
