function readRoute(e){
	var file = e.target.files[0];
	if(!file){
		return;
	}
	var reader = new FileReader();
	reader.onload = function(e){
		var content = e.target.result;
		var str = content.split(/[,\n]/);
		for(let i = 0; i<str.length; i++){
			var obj = {};
			obj["point1"] = (str[i]).replace(/[' '\\r]/g, "");
			obj["point2"] = (str[i+1]).replace(/[' '\\r]/g, "");
			obj["cost"] = (str[i+2]).replace(/[' '\\r]/g, "");
 			obj["flightTime"] = (str[i+3]).replace(/[' '\r]/g, "");
			i += 3;
			var json = JSON.stringify(obj);
			console.log(json);
			httpPostS(insertRuta, json, function(response){
				var result = JSON.parse(response);
				if(result.result == ""){
					toastr.error("Error,Codigo repetido en algún catedratico");
				}
			});	
		}
		ShowContent2(content);
	};
	reader.readAsText(file, 'iso-8859-1');
}

function ShowContent2(content){
	var element = document.getElementById('content-ruta');
	element.innerHTML = eliminarDiacriticos(content);
}

document.getElementById('file_ruta').addEventListener('change', readRoute, false);