function httpPost(url,obj,callback){
	var xmxlHttp = new XMLHttpRequest();
	xmxlHttp.open("POST",url,true);
	xmxlHttp.setRequestHeader('Content-Type','application/json; charset=utf-8');
	xmxlHttp.onreadystatechange = function(){
		if(xmxlHttp.readyState == 4 && xmxlHttp.status == 200){
			callback(xmxlHttp.responseText);
		}
	}
	//var sendObj = JSON.stringify(obj);
	xmxlHttp.send(obj);
}

function httpGet(url, callback){
	var xmxlHttp = new XMLHttpRequest();
	xmxlHttp.open("GET",url,true);
	xmxlHttp.setRequestHeader('Content-Type','application/json; charset=utf-8');
	xmxlHttp.onreadystatechange = function(){
		if(xmxlHttp.readyState == 4 && xmxlHttp.status == 200){
			callback(xmxlHttp.responseText);
		}
	}
	xmxlHttp.send();
}

//Sincrona
function httpPostS(url,obj,callback){
	var xmxlHttp = new XMLHttpRequest();
	xmxlHttp.open("POST",url,false);
	xmxlHttp.setRequestHeader('Content-Type','application/json; charset=utf-8');
	xmxlHttp.onreadystatechange = function(){
		if(xmxlHttp.readyState == 4 && xmxlHttp.status == 200){
			callback(xmxlHttp.responseText);
		}
	}
	//var sendObj = JSON.stringify(obj);
	xmxlHttp.send(obj);
}

//Sincrona
function httpGetS(url, callback){
	var xmxlHttp = new XMLHttpRequest();
	xmxlHttp.open("GET",url,false);
	xmxlHttp.setRequestHeader('Content-Type','application/json; charset=utf-8');
	xmxlHttp.onreadystatechange = function(){
		if(xmxlHttp.readyState == 4 && xmxlHttp.status == 200){
			callback(xmxlHttp.responseText);
		}
	}
	xmxlHttp.send();
}