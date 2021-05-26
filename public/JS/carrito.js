function AnadirCo(){
	var unidades = parseInt(localStorage.getItem('osasunac'));
	var Anadido = parseInt(localStorage.getItem('osasunaca')) + 1;


	if(Anadido > unidades){
		alert('No se puede añadir mas por que no hay stock disponible');
	} else {
		localStorage.setItem('osasunaca', Anadido);
	}
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
		localStorage.setItem('olivoca', Anadido);
	}
}

function AnadirPbo(){
	var unidades = parseInt(localStorage.getItem('olivop'));
	var Anadido = parseInt(localStorage.getItem('olivopa')) + 1;


	if(Anadido > unidades){
		alert('No se puede añadir mas por que no hay stock disponible');
	} else {
		localStorage.setItem('olivopa', Anadido);
	}
}

function AnadirCt(){
	var unidades = parseInt(localStorage.getItem('tipic'));
	var Anadido = parseInt(localStorage.getItem('tipica')) + 1;


	if(Anadido > unidades){
		alert('No se puede añadir mas por que no hay stock disponible');
	} else {
		localStorage.setItem('tipica', Anadido);
	}
}

function AnadirPt(){
	var unidades = parseInt(localStorage.getItem('tipip'));
	var Anadido = parseInt(localStorage.getItem('tipipa')) + 1;


	if(Anadido > unidades){
		alert('No se puede añadir mas por que no hay stock disponible');
	} else {
		localStorage.setItem('tipipa', Anadido);
	}
}