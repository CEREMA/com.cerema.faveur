
Calcul = {
	getAll: function(o,cb) {
		var HEADERS=[
			"A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R"
		];
		function getData(filename) {
			var fs=require('fs');

			var data=fs.readFileSync(__dirname+require('path').sep+'data'+require('path').sep+filename+'.data','utf-8').split('\n');

			var DATA={};
			var CELLS=[
				"A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"
			];

			for (var lines=0;lines<data.length;lines++) {
				var cells=data[lines].split('\t');
				var line=String(lines+1);
				for (var j=0;j<cells.length;j++) DATA[filename+'!'+CELLS[j]+line]=cells[j];
			};
			return DATA;
		};
		function decodeSI(o) {
			var str=o.cmd;
			var DATA=o.data;
			DATA['V160413!B$9']=o.cint;
			var OPERANDS=[
				"+","-","*","/"
			];
			var accumulator=[];
			var z=str.indexOf('(')+1;
			var zz=str.lastIndexOf(')')+1;
			str=str.substr(z,zz);
			var cmd=str.split(';');
			var cond=cmd[0];
			if (cond.split('=')[1]=='"'+o.nature+'"') var retour="cmd1"; else var retour="cmd2";
			var cmd1=cmd[1];
			var cmd2=cmd[2];
			cmd2=cmd2.substr(0,cmd2.lastIndexOf(')'));
			var b=0;
			
			if (retour=="cmd1") {
				cmd1=cmd1.split('+');
				var STACKS=[];
				for (var i=0;i<cmd1.length;i++) {
					var item=cmd1[i].split('*');
					var value=0;
					if (item.length==1) {
						var id=item[0].split('^')[0];
						if (item[0].indexOf('^')>-1) {
							var pow=item[0].split('^')[1];
						} else var pow=-1;
						if (DATA[id]) {
							var value=DATA[id];
							if (pow!=-1) value=Math.pow(value,pow);
						};
					} else {
						var id1=item[0].split('^')[0];
						if (item[0].indexOf('^')>-1) {
							var pow=item[0].split('^')[1];
						} else var pow=-1;			
						if (DATA[id1]) {
							var value1=DATA[id1];
							if (pow!=-1) value1=Math.pow(value1,pow);
						};
						
						var id2=item[1].split('^')[0];
						if (item[1].indexOf('^')>-1) {
							var pow=item[1].split('^')[1];
						} else var pow=-1;			
						if (DATA[id2]) {
							var value2=DATA[id2];
							if (pow!=-1) value2=Math.pow(value2,pow);
						};
						var value=value1*value2;
					};
					STACKS.push(value);
				};
				return eval(STACKS.join('+')).toFixed(1);
			};
			if (retour=="cmd2") {
				cmd2=cmd1.split('+');
				var STACKS=[];
				for (var i=0;i<cmd2.length;i++) {
					var item=cmd2[i].split('*');
					var value=0;
					if (item.length==1) {
						var id=item[0].split('^')[0];
						if (item[0].indexOf('^')>-1) {
							var pow=item[0].split('^')[1];
						} else var pow=-1;
						if (DATA[id]) {
							var value=DATA[id];
							if (pow!=-1) value=Math.pow(value,pow);
						};
					} else {
						var id1=item[0].split('^')[0];
						if (item[0].indexOf('^')>-1) {
							var pow=item[0].split('^')[1];
						} else var pow=-1;			
						if (DATA[id1]) {
							var value1=DATA[id1];
							if (pow!=-1) value1=Math.pow(value1,pow);
						};
						
						var id2=item[1].split('^')[0];
						if (item[1].indexOf('^')>-1) {
							var pow=item[1].split('^')[1];
						} else var pow=-1;			
						if (DATA[id2]) {
							var value2=DATA[id2];
							if (pow!=-1) value2=Math.pow(value2,pow);
						};
						var value=value1*value2;
					};
					STACKS.push(value);
				};
				return eval(STACKS.join('+')).toFixed(1);
			};	
		};
		var fs=require('fs');
		var data=[];
		var DATA=getData(o.coef);
        if (o.coef=="ls_coef_IdF") var grid=JSON.parse(fs.readFileSync(__dirname+require('path').sep+'data'+require('path').sep+'grid.conf','utf-8'));
        if (o.coef=="ls_coef_Montpellier") var grid=JSON.parse(fs.readFileSync(__dirname+require('path').sep+'data'+require('path').sep+'grid2.conf','utf-8'));
		for (var i=0;i<grid.length;i++) {
			var obj={};
			if (i==0) obj.title="Minimum";
			if (i==1) obj.title="Moyenne";
			if (i==2) obj.title="Médiane";
			if (i==3) obj.title="Maximum";
			if (i==4) obj.title="q25";
			if (i==5) obj.title="q75";
			for (var j=0;j<grid[i].length;j++) {
				obj[HEADERS[j]]=decodeSI({
					cmd: grid[i][j],
					data: DATA,
					cint: o.cint,
					nature: o.nature
				})
			};
			data.push(obj);
		};
        cb(data);
	}
}

module.exports = Calcul;
