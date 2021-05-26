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
		inserth.insertAdjacentHTML("afterend",'<th>Cafe </th><th>' + OsasunaC + '</th><th>Bar Osasuna </th><th>' + OsasunaC + '€</th>');
	}

	if(OsasunaP > 0){
		inserth.insertAdjacentHTML("afterend",'<th>Pintxo </th><th>' + OsasunaP + '</th><th>Bar Osasuna </th><th>' + OsasunaP + '€</th>');
	}

	if(OlivoC > 0){
		inserth.insertAdjacentHTML("afterend",'<th>Cafe </th><th>' + OlivoC + '</th><th>Bar El Olivo </th><th>' + OlivoC + '€</th>');
	}

	if(OlivoP > 0){
		inserth.insertAdjacentHTML("afterend",'<th>Cafe </th><th>' + OlivoP + '</th><th>Bar El Olivo </th><th>' + OlivoP + '€</th>');
	}

	if(PresleyP > 0){
		inserth.insertAdjacentHTML("afterend",'<th>Cafe </th><th>' + PresleyC + '</th><th>Bar Presley </th><th>' + PresleyC + '€</th>');
	}

	if(PresleyC > 0){

	}

	if(BerriaC > 0){

	}

	if(BerriaP > 0){

	}

	if(tipiC > 0){

	}

	if(tipiP > 0){

	}

	if(SidreriaC > 0){

	}

	if(SidreriaP > 0){

	}

}