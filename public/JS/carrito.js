function AnadirCo(){
	var unidades = parseInt(localStorage.getItem('osasunac'));
	var Anadido = parseInt(localStorage.getItem('osasunaca')) + 1;


	if(Anadido > unidades){
		alert('No se puede añadir mas por que no hay stock disponible');
	} else {
		localStorage.setItem('osasunaca', Anadido);
		CarritoCount();
	}
}

function AnadirPo(){
	var unidades = parseInt(localStorage.getItem('osasunap'));
	var Anadido = parseInt(localStorage.getItem('osasunapa')) + 1;


	if(Anadido > unidades){
		alert('No se puede añadir mas por que no hay stock disponible');
	} else {
		localStorage.setItem('osasunapa', Anadido);
		CarritoCount();
	}
}

function AnadirCbo(){
	var unidades = parseInt(localStorage.getItem('olivoc'));
	var Anadido = parseInt(localStorage.getItem('olivoca')) + 1;


	if(Anadido > unidades){
		alert('No se puede añadir mas por que no hay stock disponible');
	} else {
		localStorage.setItem('olivoca', Anadido);
		CarritoCount();
	}
}

function AnadirPbo(){
	var unidades = parseInt(localStorage.getItem('olivop'));
	var Anadido = parseInt(localStorage.getItem('olivopa')) + 1;


	if(Anadido > unidades){
		alert('No se puede añadir mas por que no hay stock disponible');
	} else {
		localStorage.setItem('olivopa', Anadido);
		CarritoCount();
	}
}

function AnadirCt(){
	var unidades = parseInt(localStorage.getItem('tipic'));
	var Anadido = parseInt(localStorage.getItem('tipica')) + 1;


	if(Anadido > unidades){
		alert('No se puede añadir mas por que no hay stock disponible');
	} else {
		localStorage.setItem('tipica', Anadido);
		CarritoCount();
	}
}

function AnadirPt(){
	var unidades = parseInt(localStorage.getItem('tipip'));
	var Anadido = parseInt(localStorage.getItem('tipipa')) + 1;


	if(Anadido > unidades){
		alert('No se puede añadir mas por que no hay stock disponible');
	} else {
		localStorage.setItem('tipipa', Anadido);
		CarritoCount();
	}
}

function AnadirCs(){
	var unidades = parseInt(localStorage.getItem('sidreriac'));
	var Anadido = parseInt(localStorage.getItem('sidreriaca')) + 1;


	if(Anadido > unidades){
		alert('No se puede añadir mas por que no hay stock disponible');
	} else {
		localStorage.setItem('sidreriaca', Anadido);
		CarritoCount();
	}
}

function AnadirPs(){
	var unidades = parseInt(localStorage.getItem('sidreriap'));
	var Anadido = parseInt(localStorage.getItem('sidreriapa')) + 1;


	if(Anadido > unidades){
		alert('No se puede añadir mas por que no hay stock disponible');
	} else {
		localStorage.setItem('sidreriapa', Anadido);
		CarritoCount();
	}
}

function AnadirCp(){
	var unidades = parseInt(localStorage.getItem('presleyc'));
	var Anadido = parseInt(localStorage.getItem('presleyca')) + 1;


	if(Anadido > unidades){
		alert('No se puede añadir mas por que no hay stock disponible');
	} else {
		localStorage.setItem('presleyca', Anadido);
		CarritoCount();
	}
}

function AnadirPp(){
	var unidades = parseInt(localStorage.getItem('presleyp'));
	var Anadido = parseInt(localStorage.getItem('presleypa')) + 1;


	if(Anadido > unidades){
		alert('No se puede añadir mas por que no hay stock disponible');
	} else {
		localStorage.setItem('presleypa', Anadido);
		CarritoCount();
	}
}

function AnadirCb(){
	var unidades = parseInt(localStorage.getItem('berriac'));
	var Anadido = parseInt(localStorage.getItem('berriaca')) + 1;


	if(Anadido > unidades){
		alert('No se puede añadir mas por que no hay stock disponible');
	} else {
		localStorage.setItem('berriaca', Anadido);
		CarritoCount();
	}
}

function AnadirPb(){
	var unidades = parseInt(localStorage.getItem('berriap'));
	var Anadido = parseInt(localStorage.getItem('berriapa')) + 1;


	if(Anadido > unidades){
		alert('No se puede añadir mas por que no hay stock disponible');
	} else {
		localStorage.setItem('berriapa', Anadido);
		CarritoCount();
	}
}

function CarritoCount(){
	var OsasunaCa = parseInt(localStorage.getItem('osasunaca'));
	var OsasunaPa = parseInt(localStorage.getItem('osasunapa'));
	var OlivoCa = parseInt(localStorage.getItem('olivoca'));
	var OlivoPa = parseInt(localStorage.getItem('olivopa'));
	var PresleyPa = parseInt(localStorage.getItem('presleypa'));
	var PresleyCa = parseInt(localStorage.getItem('presleyca'));
	var BerriaCa = parseInt(localStorage.getItem('berriaca'));
	var BerriaPa = parseInt(localStorage.getItem('berriapa'));
	var tipiCa = parseInt(localStorage.getItem('tipica'));
	var tipiPa = parseInt(localStorage.getItem('tipipa'));
	var SidreriaCa = parseInt(localStorage.getItem('sidreriaca'));
	var SidreriaPa = parseInt(localStorage.getItem('sidreriapa'));

	var total = OsasunaCa + OsasunaPa + OlivoCa + OlivoPa + PresleyPa + PresleyCa + BerriaCa + BerriaPa + tipiCa + tipiPa + SidreriaCa + SidreriaPa;

	document.getElementById('countcart').innerHTML = total;
}