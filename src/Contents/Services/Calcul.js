
Calcul = {
	getAll: function(o,cb) {
		var HEADERS=[
			"A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R"
		];
		function getData(filename) {
			var fs=require('fs');

			var data=fs.readFileSync(__dirname+require('path').sep+filename+'.data','utf-8').split('\n');

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
			for (var i=0;i<cmd1.length;i++) {
				if (OPERANDS.indexOf(cmd1[i])>-1) {
					var item=cmd1.substr(b,i-b).replace(/\'/g,'');
					accumulator.push({id:item,operator:cmd1[i]});	
					b=i+1;
				}
			};
			accumulator.push({id:cmd1.substr(b,cmd1.length),operator:""});	
			cmd1=accumulator;
			accumulator=[];
			var b=0;
			for (var i=0;i<cmd2.length;i++) {
				if (OPERANDS.indexOf(cmd2[i])>-1) {
					var item=cmd2.substr(b,i-b).replace(/\'/g,'');
					accumulator.push({id:item,operator:cmd2[i]});	
					b=i+1;
				}
			};
			accumulator.push({id:cmd2.substr(b,cmd2.length),operator:""});	
			cmd2=accumulator;

			var total="";
			
			DATA['V160413!B$9']=o.cint;
			if (retour=="cmd1") {
				for (var i=0;i<cmd1.length;i++) {
					var id=cmd1[i].id.split('^')[0];
					if (cmd1[i].id.indexOf('^')>-1) {
						var pow=cmd1[i].id.split('^')[1];
					} else var pow=-1;
					if (DATA[id]) {
						var value=DATA[id];
						if (pow!=-1) {
							value=Math.pow(value,pow);
						};
						var operator=cmd1[i].operator;
						total+=value+operator;
						//console.log(value);
					} else total+='xxx';
				};
			} else {
				var total="";
				for (var i=0;i<cmd2.length;i++) {
					var id=cmd2[i].id.split('^')[0];
					if (cmd2[i].id.indexOf('^')>-1) {
						var pow=cmd2[i].id.split('^')[1];
					} else var pow=-1;
					if (DATA[id]) {
						var value=DATA[id];
						if (pow!=-1) {
							value=Math.pow(value,pow);
						};
						var operator=cmd2[i].operator;
						total+=value+operator;
					} else total+='xxx';
				};
			};
			total=total.replace(/,/g,'.');
			
			return eval(total).toFixed(2);
		};
		var fs=require('fs');
		var data=[];
		var DATA=getData(o.coef);
		var grid=JSON.parse(fs.readFileSync(__dirname+require('path').sep+'grid.conf','utf-8'));
		for (var i=0;i<grid.length;i++) {
			var obj={};
			if (i==0) obj.title="Minimum";
			if (i==1) obj.title="Moyenne";
			if (i==2) obj.title="Médiane";
			if (i==3) obj.title="Maximum";
			if (i==4) obj.title="q25";
			if (i==4) obj.title="q75";
			for (var j=0;j<grid[i].length;j++) {
				
			};
		};
	}
}

module.exports = Calcul;
