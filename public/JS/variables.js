function contador(){
	var contador = parseInt(localStorage.getItem('contador')) + 1;
	localStorage.setItem('contador', contador);
}

function CargarVariables(){
	var contador = localStorage.getItem('contador');

	if(contador == 1 || isNaN(contador)){
		contador = 1;
		localStorage.setItem('contador', contador);
		var osasunac = 100;
		var osasunap = 100;
		var olivoc = 100;
		var olivop = 100;
		var tipic = 100;
		var tipip = 100;
		var sidreriac = 100;
		var sidreriap = 100;
		var presleyc = 100;
		var presleyp = 100;
		var berriac = 100;
		var berriap = 100;

		var osasunaca = 0;
		var osasunapa = 0;
		var olivoca = 0;
		var olivopa = 0;
		var tipica = 0;
		var tipipa = 0;
		var sidreriaca = 0;
		var sidreriapa = 0;
		var presleyca = 0;
		var presleypa = 0;
		var berriaca = 0;
		var berriapa = 0;

		var name = "";
		var pw = "";
		var login = 1;

		localStorage.setItem('name', name);
		localStorage.setItem('pw', pw);

		localStorage.setItem('osasunac', osasunac);
		localStorage.setItem('osasunap', osasunap);
		localStorage.setItem('olivoc', olivoc);
		localStorage.setItem('olivop', olivop);
		localStorage.setItem('tipic', tipic);
		localStorage.setItem('tipip', tipip);
		localStorage.setItem('sidreriac', sidreriac);
		localStorage.setItem('sidreriap', sidreriap);
		localStorage.setItem('presleyc', presleyc);
		localStorage.setItem('presleyp', presleyp);
		localStorage.setItem('berriac', berriac);
		localStorage.setItem('berriap', berriap);
		localStorage.setItem('login', login);

		localStorage.setItem('osasunaca', osasunaca);
		localStorage.setItem('osasunapa', osasunapa);
		localStorage.setItem('olivoca', olivoca);
		localStorage.setItem('olivopa', olivopa);
		localStorage.setItem('tipica', tipica);
		localStorage.setItem('tipipa', tipipa);
		localStorage.setItem('sidreriaca', sidreriaca);
		localStorage.setItem('sidreriapa', sidreriapa);
		localStorage.setItem('presleyca', presleyca);
		localStorage.setItem('presleypa', presleypa);
		localStorage.setItem('berriaca', berriaca);
		localStorage.setItem('berriapa', berriapa);
	}
}

function ValidarLogin() {
	var name = localStorage.getItem('name');
	var pw = localStorage.getItem('pw');
	var login = localStorage.getItem('login');

	if(login == 0 || isNaN(login)){
		alert('Primero debes loguearte');
	} else {
		window.location.href = 'carrito.html';
	}
}

