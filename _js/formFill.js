function init(){	
	var GET = {};

	document.location.search.replace(/\??(?:([^=]+)=([^&]*)&?)/g, function () {
		function decode(s) {
			return decodeURIComponent(s.split("+").join(" "));
		}

		GET[decode(arguments[1])] = decode(arguments[2]);
	});
	
	if(GET['choice'] == "" || GET['choice'] == null ){
		page = 1;
	}
	else{
		var setPage = GET['choice'];
		page = parseInt(setPage);
	}

	changePage(page)
}

function changePage(loadPage){
	switch(loadPage){
		case 0:
			document.getElementById("buttonA").innerHTML = "ERROR - CASE 0";
			document.getElementById("buttonB").innerHTML = "ERROR - CASE 0";
			document.getElementById("title").innerHTML = "ERROR - CASE 0";
			document.getElementById("story").innerHTML = "ERROR - CASE 0";
		break;
		
		case 1:
			document.getElementById("buttonA").innerHTML = 
				"<input type=\"radio\" name=\"choice\" value=\"2\" checked> Go 2";
			document.getElementById("buttonB").innerHTML = 
				"<input type=\"radio\" name=\"choice\" value=\"3\"> Go 3";
			document.getElementById("title").innerHTML = 
				"Chapter 1 -  The Trip";
			document.getElementById("story").innerHTML = 
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
		break;
		
		case 2:
			document.getElementById("buttonA").innerHTML = 
				"<input type=\"radio\" name=\"choice\" value=\"4\" checked> Go 4";
			document.getElementById("buttonB").innerHTML = 
				"<input type=\"radio\" name=\"choice\" value=\"3\"> Go 3";
			document.getElementById("title").innerHTML = 
				"Chapter 2 -  The Trip";
			document.getElementById("story").innerHTML = 
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
		break;
		
		case 3:
			document.getElementById("buttonA").innerHTML = 
				"<input type=\"radio\" name=\"choice\" value=\"1\" checked> Go 1";
			document.getElementById("buttonB").innerHTML = 
				"<input type=\"radio\" name=\"choice\" value=\"2\"> Go 2";
			document.getElementById("title").innerHTML = 
				"Chapter 3 -  The Trip";
			document.getElementById("story").innerHTML = 
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
		break;
		
		case 4:
			document.getElementById("buttonA").innerHTML = 
				"<input type=\"radio\" name=\"choice\" value=\"1\" checked> Go 1";
			document.getElementById("buttonB").innerHTML = 
				"<input type=\"radio\" name=\"choice\" value=\"2\"> Go 2";
			document.getElementById("title").innerHTML = 
				"Chapter 4 -  The Trip";
			document.getElementById("story").innerHTML = 
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
		break;
		
		default:
			document.getElementById("buttonA").innerHTML = "ERROR - CASE default";
			document.getElementById("buttonB").innerHTML = "ERROR - CASE default";
			document.getElementById("title").innerHTML = "ERROR - CASE default";
			document.getElementById("story").innerHTML = "ERROR - CASE default";
		break;
	}
}