function AnadirCo(){
	var unidades = parseInt(localStorage.getItem('osasunac'));
	var Anadido = parseInt(localStorage.getItem('osasunaca')) + 1;


	if(Anadido > unidades){
		alert('No se puede añadir mas por que no hay stock disponible');
	} else {
		localStorage.setItem('osasunaca', Anadido);
	}
/*
		localStorage.getItem('olivop', olivop);
		localStorage.getItem('tipic', tipic);
		localStorage.getItem('tipip', tipip);
		localStorage.getItem('sidreriac', sidreriac);
		localStorage.getItem('sidreriap', sidreriap);
		localStorage.getItem('presleyc', presleyc);
		localStorage.getItem('presleyp', presleyp);
		localStorage.getItem('berriac', berriac);
		localStorage.getItem('berriap', berriap);
*/
}

function AnadirPo(){
	var unidades = parseInt(localStorage.getItem('osasunap'));
	var Anadido = parseInt(localStorage.getItem('osasunapa')) + 1;


	if(Anadido > unidades){
		alert('No se puede añadir mas por que no hay stock disponible');
	} else {
		localStorage.setItem('osasunapa', Anadido);
	}
}

function AnadirCbo(){
	var unidades = parseInt(localStorage.getItem('olivoc'));
	var Anadido = parseInt(localStorage.getItem('olivoca')) + 1;


	if(Anadido > unidades){
		alert('No se puede añadir mas por que no hay stock disponible');
	} else {
		localStorage.setItem('osasunapa', Anadido);
	}
}