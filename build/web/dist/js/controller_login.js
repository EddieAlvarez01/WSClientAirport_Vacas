function ini_session(){

	httpPost(ep_user,getValueForm("loginform"),function(response){
		var result = JSON.parse(response);
		//console.log(result);
		if(result.result == 'true'){
			window.location.href="http://192.168.167.10:9090/html/ltr/dashboard.html";
		}else if(result.result == 'false'){
			toastr.error("Credenciales incorrectas","Error al inicio de sesión");
		}
	});

	//var out = getValueForm("loginform");
	//console.log(out)
}

function getRoute(){
	httpGet(getRutas, function(response){
		var result = JSON.parse(response);
		var table = document.getElementById("tbRuta");
		for(let i = 0; i<result.length; i++){
			var row = table.insertRow();
			var routeCell = row.insertCell(0);
			var costCell = row.insertCell(1);
			var timeCell = row.insertCell(2);
			var operationCell = row.insertCell(3);
			routeCell.innerHTML = result[i].name1 + " - " + result[i].name2;
			costCell.innerHTML = "$" + result[i].cost;
			timeCell.innerHTML = result[i].flightTime + " min";
			operationCell.innerHTML = "<a href=\"#\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Visualizar Mapa\">" + 
										'<button type="button" onclick="" value="' + result[i].point1 + ";" + result[i].point2 + '" class="btn btn-primary">Visualizar Mapa</button>' + 
										"</a>";
		}
	});
}

function InsertDestination(){
	httpPost(insertDestino, getValueForm("destinoForm"), function(response){
		var result = JSON.parse(response);
		if(result.result == "true"){
			window.location.href="http://192.168.167.10:9090/html/ltr/nuevo_destino.html";
		}else{
			toastr.error("Credenciales incorrectas","Error al inicio de sesión");
		}
	});
}

function getDestino(){
	httpGet(getDestinos, function(response){
		var result = JSON.parse(response);
		var select1 = document.getElementsByName("1S")[0];
		var select2 = document.getElementsByName("2S")[0];
		for(let i=0; i<result.length; i++){
			var option = document.createElement("option");
			var option2 = document.createElement("option");
			option.text = result[i].name;
			option2.text = result[i].name;
			option.value = result[i].code;
			option2.value = result[i].code;
			select1.add(option);
			select2.add(option2);
		}
	});
}

function InsertRoute(){
	httpPost(insertRuta, getValueFormSelect("routeForm"), function(response){
		var result = JSON.parse(response);
		if(result.result == "true"){
			window.location.href="http://192.168.167.10:9090/html/ltr/nueva_ruta.html";
		}else{
			toastr.error("Credenciales incorrectas","Error al inicio de sesión");
		}
	});
}

function InsertUser(){
	httpPost(insertUsuario, getValueFormUpdateUser("registerForm"), function(response){
		var result = JSON.parse(response);
		if(result.result == "true"){
			var table = document.getElementById("tbUsuarios");
			for(let i=1; i<table.rows.length; i++){
				table.deleteRow(i);
				i--;
			}
			getUser();
		}else{
			toastr.error("Credenciales incorrectas","Error al inicio de sesión");
		}
		document.getElementById("lblidUser").value = "";
	});	
}

function getUser(){
	httpGet(getUsuarios, function(response){
		var result = JSON.parse(response);
		var table = document.getElementById("tbUsuarios");
		for(let i = 0; i<result.length; i++){
			var row = table.insertRow();
			var nameCell = row.insertCell(0);
			var operationCell = row.insertCell(1);
			nameCell.innerHTML = result[i].name;
			operationCell.innerHTML = "<a href=\"#\"  href=\"javascript:void(0)\" data-toggle=\"modal\" data-target=\"#add-new-event\" data-placement=\"top\" title=\"Update\">" + 
										'<button type="button" onclick="updateUser(this)" value="' + result[i].id + '" class="btn btn-primary">Editar</button>' + 
										"</a>" + 
										"<a href=\"#\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Visualizar Mapa\">" + 
										'<button type="button" onclick="" value="' + result[i].point1 + ";" + result[i].point2 + '" class="btn btn-primary">Eliminar</button>' + 
										"</a>";

		}
	});
}

//leer archivos a travaes de input file y con ayuda de select
function readFile(e){
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
			obj["code"] = (str[i]).replace(/[' '\\r]/g, "");
			obj["name"] = str[i+1];
			i = i + 1;
			var json = JSON.stringify(obj);
			console.log(json);
			httpPostS(insertDestino, json, function(response){
				var result = JSON.parse(response);
				if(result.result == ""){
					toastr.error("Error,Codigo repetido en algún catedratico");
				}
			});	
		}
		ShowContent(content);
	};
	reader.readAsText(file, 'iso-8859-1');
}

function ShowContent(content){
	var element = document.getElementById('content-file');
	element.innerHTML = eliminarDiacriticos(content);
}

document.getElementById('file-input').addEventListener('change', readFile, false);

//elimina tildes dieresis, ñ , etc, cuando mete a las variables para el post del archivo leido.
function eliminarDiacriticos(texto) {
    return texto.normalize('NFD').replace(/[\u0300-\u036f]/g,"");
}

function getImagenes(){
	var div = document.getElementById("divImages");
	var str = "";
	httpGet(getImages, function(response){
		var result = JSON.parse(response);
		for(let i=0; i<result.length; i++){
			if(result[i].encodedfile != ""){
				var uriL = result[i].encodedfile;
				str += ' <div class="col-lg-3 col-md-6"> '
                         + '<div class="card">' 
                         +   '<div class="el-card-item">'
                         +      ' <div class="el-card-avatar el-overlay-1"> <img src="data:image/png;base64,' + result[i].encodedfile + '"/>'
                          +         ' <div class="el-overlay">'
                            +            '<ul class="list-style-none el-info">'
                                 +          '<button type="button" onclick="debugBase64("'+ uriL +'")" class="btn btn-primary">Ver</button>'
                                  +      '</ul>'
                                 +   '</div>'
                               + '</div>'
                               + '<div class="el-card-content">'
                                +    '<h4 class="m-b-0">' + result[i].name + '</h4>'
                             +   '</div>'
                            + '</div>'
                       + '</div>'
                   + '</div>';
			}
		}
		div.innerHTML = str;
	});
}

function updateUser(btn){
	var lbl = document.getElementById("lblidUser");
	lbl.value = btn.value;
	var uri = "http://localhost:8080/EDDProyect2/rest/app/getUserSearch/" + lbl.value;	
	httpGet(uri, function(response){
		var result = JSON.parse(response);
		var txtName = document.getElementById("txtName");
		var txtPassword = document.getElementById("txtPassword");
		txtName.value = result.name;
		txtPassword.value = result.password;
	});
}

function updateRoute(){
	var lbl1 = document.getElementById("lblPoint1");
	var lbl2 = document.getElementById("lblPoint2");
	var select1 = document.getElementById("point1S");
	var select2 = document.getElementById("point2S");
	var option1 = select1.options[select1.selectedIndex].value;
	var option2 = select2.options[select2.selectedIndex].value;
	lbl1.value = option1;
	lbl2.value = option2;
	var uri = "http://localhost:8080/EDDProyect2/rest/app/getRouteSearch/" + lbl1.value + "/" + lbl2.value;	
	httpGet(uri, function(response){
		var result = JSON.parse(response);
		var txtCost = document.getElementById("txtCost");
		var txtTime = document.getElementById("txtTime");
		txtCost.value = result.cost;
		txtTime.value = result.flightTime;
	});
}

function insertUpdateRoute(){
	var lbl1 = document.getElementById("lblPoint1");
	var lbl2 = document.getElementById("lblPoint2");
	var form = document.getElementById("updateRouteForm");
	var obj = {};
	obj["point1"] = lbl1.value;
	obj["point2"] = lbl2.value;
	var json = toJSONStringSelect(form, obj);
	console.log(json);
	httpPost(updateRuta, json ,function(response){
		var result = JSON.parse(response);
		lbl1.vale = "";
		lbl2.value = "";
		if(result.result == "true"){
			window.location.href="http://192.168.167.10:9090/html/ltr/modificar_ruta.html";
		}
	});
}

function getReservation(){
	httpGet(getReservaciones, function(response){
		var result = JSON.parse(response);
		var table = document.getElementById("tbReservations");
		for(let i = 0; i<result.length; i++){
			var row = table.insertRow();
			var numberReservationCell = row.insertCell(0);
			var NameCustomerCell = row.insertCell(1);
			var TimeCell = row.insertCell(2);
			var CostCell = row.insertCell(3);
			var PlanCell = row.insertCell(4);
			var stateCell = row.insertCell(5);
			var operationCell = row.insertCell(6);
			numberReservationCell.innerHTML = result[i].numberReservation;
			NameCustomerCell.innerHTML = result[i].customerName;
			TimeCell.innerHTML = result[i].flightTime + " min";
			CostCell.innerHTML = "$" + result[i].cost;
			var arrayPlan = result[i].listPlain;
			var toggle = "";
			for(let x=0; x<arrayPlan.length; x++){
				toggle += arrayPlan[x].name;
				if(x != 1){
					toggle += " - ";
				}
			}
			PlanCell.innerHTML = toggle;
			if(result[i].state == 0){
				stateCell.innerHTML = "Cancelada";
				operationCell.innerHTML = "<a href=\"#\"  href=\"javascript:void(0)\" data-toggle=\"modal\" data-target=\"#add-new-event\" data-placement=\"top\" title=\"Update\">" + 
										'<button type="button" onclick="" disabled="true" value="' + result[i].numberReservation + '" class="btn btn-primary">Cancelar</button>' + 
										"</a>" + 
										"<a href=\"#\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Visualizar Mapa\">" + 
										'<button type="button" onclick="" value="' + result[i].numberReservation +'" class="btn btn-primary">Visualizar Mapa</button>' + 
										"</a>";
			}else if(result[i].state == 1){
				stateCell.innerHTML = "No pagada";
				operationCell.innerHTML = "<a href=\"#\"  href=\"javascript:void(0)\" data-toggle=\"modal\" data-target=\"#add-new-event\" data-placement=\"top\" title=\"Update\">" + 
										'<button type="button" onclick="ChangeStateR(this)" value="' + result[i].numberReservation + '" class="btn btn-primary">Cancelar</button>' + 
										"</a>" + 
										"<a href=\"#\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Visualizar Mapa\">" + 
										'<button type="button" onclick="" value="' + result[i].numberReservation +'" class="btn btn-primary">Visualizar Mapa</button>' + 
										"</a>";
			}else{
				stateCell.innerHTML = "Pagada";
				operationCell.innerHTML = "<a href=\"#\"  href=\"javascript:void(0)\" data-toggle=\"modal\" data-target=\"#add-new-event\" data-placement=\"top\" title=\"Update\">" + 
										'<button type="button" onclick="" disabled="true" value="' + result[i].numberReservation + '" class="btn btn-primary">Cancelar</button>' + 
										"</a>" + 
										"<a href=\"#\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Visualizar Mapa\">" + 
										'<button type="button" onclick="" value="' + result[i].numberReservation +'" class="btn btn-primary">Visualizar Mapa</button>' + 
										"</a>";
			}
		}
	});
}

function debugBase64(uri){
	var win = window.open();
	win.document.body.innerHTML = '<img src="' + uri +'" width="100px" height="100px">';
}

function ChangeStateR(btn){
	btn.disabled = true;
	var uri = "http://localhost:8080/EDDProyect2/rest/app/ChangeState/" + btn.value;
	httpGet(uri, function(response){
		var table = document.getElementById("tbReservations");
		for(let i=1; i<table.rows.length; i++){
				table.deleteRow(i);
				i--;
			}
			getReservation();
	});
}