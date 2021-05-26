function AnadirCs(){
	var unidades = parseInt(localStorage.getItem('sidreriac'));
	var Anadido = parseInt(localStorage.getItem('sidreriaca')) + 1;


	if(Anadido > unidades){
		alert('No se puede añadir mas por que no hay stock disponible');
	} else {
		localStorage.setItem('sidreriaca', Anadido);
	}
}

function AnadirPs(){
	var unidades = parseInt(localStorage.getItem('sidreriac'));
	var Anadido = parseInt(localStorage.getItem('sidreriaca')) + 1;


	if(Anadido > unidades){
		alert('No se puede añadir mas por que no hay stock disponible');
	} else {
		localStorage.setItem('sidreriaca', Anadido);
	}
}

function AnadirCp(){
	var unidades = parseInt(localStorage.getItem('presleyc'));
	var Anadido = parseInt(localStorage.getItem('presleyca')) + 1;


	if(Anadido > unidades){
		alert('No se puede añadir mas por que no hay stock disponible');
	} else {
		localStorage.setItem('presleyca', Anadido);
	}
}

function AnadirPp(){
	var unidades = parseInt(localStorage.getItem('presleyc'));
	var Anadido = parseInt(localStorage.getItem('presleyca')) + 1;


	if(Anadido > unidades){
		alert('No se puede añadir mas por que no hay stock disponible');
	} else {
		localStorage.setItem('presleyca', Anadido);
	}
}

function AnadirCb(){
	var unidades = parseInt(localStorage.getItem('berriac'));
	var Anadido = parseInt(localStorage.getItem('berriaca')) + 1;


	if(Anadido > unidades){
		alert('No se puede añadir mas por que no hay stock disponible');
	} else {
		localStorage.setItem('berriaca', Anadido);
	}
}

function AnadirPb(){
	var unidades = parseInt(localStorage.getItem('berriac'));
	var Anadido = parseInt(localStorage.getItem('berriaca')) + 1;


	if(Anadido > unidades){
		alert('No se puede añadir mas por que no hay stock disponible');
	} else {
		localStorage.setItem('berriaca', Anadido);
	}
}

