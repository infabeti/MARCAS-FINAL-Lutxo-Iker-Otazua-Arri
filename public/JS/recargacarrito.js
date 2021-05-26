function CarritoRecarga(){
	var inserth = document.getElementById('ProductosAnadidos');
	var OsasunaC = parseInt(localStorage.getItem('osasunaca'));
	var OsasunaP = parseInt(localStorage.getItem('osasunapa'));
	var OlivoC = parseInt(localStorage.getItem('olivoca'));
	var OlivoP = parseInt(localStorage.getItem('olivopa'));
	var PresleyP = parseInt(localStorage.getItem('presleypa'));
	var PresleyC = parseInt(localStorage.getItem('presleyca'));
	var BerriaC = parseInt(localStorage.getItem('berriaca'));
	var BerriaP = parseInt(localStorage.getItem('berriapa'));
	var tipiC = parseInt(localStorage.getItem('tipica'));
	var tipiP = parseInt(localStorage.getItem('tipipa'));
	var SidreriaC = parseInt(localStorage.getItem('sidreriaca'));
	var SidreriaP = parseInt(localStorage.getItem('sidreriapa'));

	if(OsasunaC > 0){
		inserth.insertAdjacentHTML("afterend",'<th>Cafe </th><th>' + OsasunaC + ' &nbsp;<input type="button" value="-" onclick="restaOC()"> <input type="button" value="+" onclick="sumaOC()"></th><th>Bar Osasuna </th><th>' + OsasunaC + '€</th>');
	}

	if(OsasunaP > 0){
		inserth.insertAdjacentHTML("afterend",'<th>Pintxos </th><th>' + OsasunaP + ' &nbsp;<input type="button" value="-" onclick="restaOP()"> <input type="button" value="+" onclick="sumaOP()"></th><th>Bar Osasuna </th><th>' + OsasunaP + '€</th>');
	}

	if(OlivoC > 0){
		inserth.insertAdjacentHTML("afterend",'<th>Cafe </th><th>' + OlivoC + ' &nbsp;<input type="button" value="-" onclick="restaOLC()"> <input type="button" value="+" onclick="sumaOLC()"></th><th>Bar El Olivo </th><th>' + OlivoC + '€</th>');
	}

	if(OlivoP > 0){
		inserth.insertAdjacentHTML("afterend",'<th>Pintxos </th><th>' + OlivoP + ' &nbsp;<input type="button" value="-" onclick="restaOLP()"> <input type="button" value="+" onclick="sumaOLP()"></th><th>Bar El Olivo </th><th>' + OlivoP + '€</th>');
	}

	if(PresleyP > 0){
		inserth.insertAdjacentHTML("afterend",'<th>Pintxos </th><th>' + PresleyP + ' &nbsp;<input type="button" value="-" onclick="restaPP()"> <input type="button" value="+" onclick="sumaPP()"></th><th>Bar Presley </th><th>' + PresleyP + '€</th>');
	}

	if(PresleyC > 0){
		inserth.insertAdjacentHTML("afterend",'<th>Cafes </th><th>' + PresleyC + ' &nbsp;<input type="button" value="-" onclick="restaPC()"> <input type="button" value="+" onclick="sumaPC()"></th><th>Bar Presley </th><th>' + PresleyC + '€</th>');
	}

	if(BerriaC > 0){
		inserth.insertAdjacentHTML("afterend",'<th>Cafe </th><th>' + BerriaC + ' &nbsp;<input type="button" value="-" onclick="restaBC()"> <input type="button" value="+" onclick="sumaBC()"></th><th>Gazteleku Berria </th><th>' + BerriaC + '€</th>');
	}

	if(BerriaP > 0){
		inserth.insertAdjacentHTML("afterend",'<th>Pintxos </th><th>' + BerriaP + ' &nbsp;<input type="button" value="-" onclick="restaBP()"> <input type="button" value="+" onclick="sumaBP()"></th><th>Gazteleku Berria </th><th>' + BerriaP + '€</th>');
	}

	if(tipiC > 0){
		inserth.insertAdjacentHTML("afterend",'<th>Cafe </th><th>' + tipiC + ' &nbsp;<input type="button" value="-" onclick="restaTC()"> <input type="button" value="+" onclick="sumaTC()"></th><th>Ttipi Ttapa </th><th>' + tipiC + '€</th>');
	}

	if(tipiP > 0){
		inserth.insertAdjacentHTML("afterend",'<th>Pintxos </th><th>' + tipiP + ' &nbsp;<input type="button" value="-" onclick="restaTP()"> <input type="button" value="+" onclick="sumaTP()"></th><th>Ttipi Ttapa </th><th>' + tipiP + '€</th>');
	}	

	if(SidreriaC > 0){
		inserth.insertAdjacentHTML("afterend",'<th>Cafe </th><th>' + SidreriaC + ' &nbsp;<input type="button" value="-" onclick="restaSC()"> <input type="button" value="+" onclick="sumaSC()"></th><th>Sidreria Ander </th><th>' + SidreriaC + '€</th>');
	}

	if(SidreriaP > 0){
		inserth.insertAdjacentHTML("afterend",'<th>Cafe </th><th>' + SidreriaP + ' &nbsp;<input type="button" value="-" onclick="restaSP()"> <input type="button" value="+" onclick="sumaSP()"></th><th>Sidreria Ander </th><th>' + SidreriaP + '€</th>');
	}

}

function restaOC(){
	var variable = parseInt(localStorage.getItem('osasunaca'));
	variable = variable - 1;

	localStorage.setItem('osasunaca', variable);
	location.reload();
}

function sumaOC(){
	var unidades = parseInt(localStorage.getItem('osasunac'));
	var variable = parseInt(localStorage.getItem('osasunaca'));

	variable = variable + 1;

	if(variable > unidades){
		alert('No puedes añadir mas por que no hay stock');
	} else {
		localStorage.setItem('osasunaca', variable);
		location.reload();
	}
}

function restaOP(){
	var variable = parseInt(localStorage.getItem('osasunapa'));

	variable = variable - 1;

	localStorage.setItem('osasunaca', variable);
	location.reload();
}

function sumaOP(){
	var unidades = parseInt(localStorage.getItem('osasunap'));
	var variable = parseInt(localStorage.getItem('osasunapa'));

	variable = variable + 1;

	if(variable > unidades){
		alert('No puedes añadir mas por que no hay stock');
	} else {
		localStorage.setItem('osasunaca', variable);
		location.reload();
	}

	
}

function restaOLC(){
	var variable = parseInt(localStorage.getItem('olivoca'));

	variable = variable - 1;

	localStorage.setItem('olivoca', variable);
	location.reload();
}

function sumaOLC(){
	var unidades = parseInt(localStorage.getItem('olivoc'));
	var variable = parseInt(localStorage.getItem('olivoca'));

	variable = variable + 1;

	if(variable > unidades){
		alert('No puedes añadir mas por que no hay stock');
	} else {
		localStorage.setItem('olivoca', variable);
		location.reload();
	}

	
}

function restaOLP(){
	var variable = parseInt(localStorage.getItem('olivopa'));

	variable = variable - 1;

	localStorage.setItem('olivopa', variable);
	location.reload();
}

function sumaOLP(){
	var unidades = parseInt(localStorage.getItem('olivop'));
	var variable = parseInt(localStorage.getItem('olivopa'));

	variable = variable + 1;

	if(variable > unidades){
		alert('No puedes añadir mas por que no hay stock');
	} else {
		localStorage.setItem('olivopa', variable);
		location.reload();
	}

	
}

function restaPP(){
	var variable = parseInt(localStorage.getItem('presleypa'));

	variable = variable - 1;

	localStorage.setItem('presleypa', variable);
	location.reload();
}

function sumaPP(){
	var unidades = parseInt(localStorage.getItem('presleyp'));
	var variable = parseInt(localStorage.getItem('presleypa'));

	variable = variable + 1;

	if(variable > unidades){
		alert('No puedes añadir mas por que no hay stock');
	} else {
		localStorage.setItem('presleypa', variable);
		location.reload();
	}

	
}

function restaPC(){
	var variable = parseInt(localStorage.getItem('presleyca'));

	variable = variable - 1;

	localStorage.setItem('presleyca', variable);
	location.reload();
}

function sumaPC(){
	var unidades = parseInt(localStorage.getItem('presleyc'));
	var variable = parseInt(localStorage.getItem('presleyca'));

	variable = variable + 1;

	if(variable > unidades){
		alert('No puedes añadir mas por que no hay stock');
	} else {
		localStorage.setItem('presleyca', variable);
		location.reload();	
	}

	
}
/*BERRI*/
function restaBC(){
	var variable = parseInt(localStorage.getItem('berriaca'));

	variable = variable - 1;

	localStorage.setItem('berriaca', variable);
	location.reload();
}

function sumaBC(){
	var unidades = parseInt(localStorage.getItem('berriac'));
	var variable = parseInt(localStorage.getItem('berriaca'));

	variable = variable + 1;

	if(variable > unidades){
		alert('No puedes añadir mas por que no hay stock');
	} else {
		localStorage.setItem('berriaca', variable);
		location.reload();
	}


}

function restaBP(){
	var variable = parseInt(localStorage.getItem('berriapa'));

	variable = variable - 1;

	localStorage.setItem('berriapa', variable);
	location.reload();
}

function sumaBP(){
	var unidades = parseInt(localStorage.getItem('berriap'));
	var variable = parseInt(localStorage.getItem('berriapa'));

	variable = variable + 1;

	if(variable > unidades){
		alert('No puedes añadir mas por que no hay stock');
	} else {
		localStorage.setItem('berriapa', variable);
		location.reload();
	}	
}

function restaTC(){
	var variable = parseInt(localStorage.getItem('tipica'));

	variable = variable - 1;

	localStorage.setItem('tipica', variable);
	location.reload();
}

function sumaTC(){
	var unidades = parseInt(localStorage.getItem('tipic'));
	var variable = parseInt(localStorage.getItem('tipica'));

	variable = variable + 1;

	if(variable > unidades){
		alert('No puedes añadir mas por que no hay stock');
	} else {
		localStorage.setItem('tipica', variable);
		location.reload();
	}

	
}

function restaTP(){
	var variable = parseInt(localStorage.getItem('tipipa'));

	variable = variable - 1;

	localStorage.setItem('tipipa', variable);
	location.reload();
}

function sumaTP(){
	var unidades = parseInt(localStorage.getItem('tipip'));
	var variable = parseInt(localStorage.getItem('tipipa'));

	variable = variable + 1;

	if(variable > unidades){
		alert('No puedes añadir mas por que no hay stock');
	} else {
		localStorage.setItem('tipipa', variable);
		location.reload();
	}
}

function restaSC(){
	var variable = parseInt(localStorage.getItem('sidreriaca'));

	variable = variable - 1;

	localStorage.setItem('sidreriaca', variable);
	location.reload();
}

function sumaSC(){
	var unidades = parseInt(localStorage.getItem('sidreriac'));
	var variable = parseInt(localStorage.getItem('sidreriaca'));

	variable = variable + 1;

	if(variable > unidades){
		alert('No puedes añadir mas por que no hay stock');
	} else {
		localStorage.setItem('sidreriaca', variable);
		location.reload();
	}


}

function restaSP(){
	var variable = parseInt(localStorage.getItem('sidreriapa'));

	variable = variable - 1;

	localStorage.setItem('sidreriapa', variable);
	location.reload();
}

function sumaSP(){
	var unidades = parseInt(localStorage.getItem('sidreriap'));
	var variable = parseInt(localStorage.getItem('sidreriapa'));

	variable = variable + 1;

	if(variable > unidades){
		alert('No puedes añadir mas por que no hay stock');
	} else {
		localStorage.setItem('sidreriapa', variable);
		location.reload();	
	}
}