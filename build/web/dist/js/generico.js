function toJSONString(form){
	var obj = {};
	var elements = form.querySelectorAll("input");
	for( var i = 0; i < elements.length; ++i ){
		var element = elements[i];
		var name = element.name;
		var value = element.value;
		if(name){
			obj[name] = value;
		}
	}
	return JSON.stringify(obj);
}

function getValueForm(id_form){
	var form = document.getElementById(id_form);
	var json = toJSONString(form);
	console.log(json);
	return json;
}

function getValueFormUpdateUser(id_form){
	var form = document.getElementById(id_form);
	var lbl = document.getElementById("lblidUser");
	var obj = {};
	obj["id"] = lbl.value;
	var json = toJSONStringSelect(form, obj);
	console.log(json);
	return json;
}


function toJSONStringSelect(form, obj){
	var elements = form.querySelectorAll("input");
	for( var i = 0; i < elements.length; ++i ){
		var element = elements[i];
		var name = element.name;
		var value = element.value;
		if(name){
			obj[name] = value;
		}
	}
	return JSON.stringify(obj);
}

function getValueFormSelect(id_form){
	var form = document.getElementById(id_form);
	var obj = {};
	var select1 = document.getElementById("point1S");
	var select2 = document.getElementById("point2S");
	var option1 = select1.options[select1.selectedIndex].value;
	var option2 = select2.options[select2.selectedIndex].value;
	obj["point1"] = option1;
	obj["point2"] = option2;
	var json = toJSONStringSelect(form, obj);
	console.log(json);
	return json;
}