(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.module = f()}})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const tarjeta = document.querySelector('#tarjeta'),
	  btnAbrirFormulario = document.querySelector('#btn-abrir-formulario'),
	  formulario = document.querySelector('#formulario-tarjeta'),
	  numeroTarjeta = document.querySelector('#tarjeta .numero'),
	  nombreTarjeta = document.querySelector('#tarjeta .nombre'),
	  logoMarca = document.querySelector('#logo-marca'),
	  firma = document.querySelector('#tarjeta .firma p'),
	  mesExpiracion = document.querySelector('#tarjeta .mes'),
	  yearExpiracion = document.querySelector('#tarjeta .year');
	  ccv = document.querySelector('#tarjeta .ccv');

// * Volteamos la tarjeta para mostrar el frente.
const mostrarFrente = () => {
	if(tarjeta.classList.contains('active')){
		tarjeta.classList.remove('active');
	}
}

// * Rotacion de la tarjeta
tarjeta.addEventListener('click', () => {
	tarjeta.classList.toggle('active');
});

// * Boton de abrir formulario
btnAbrirFormulario.addEventListener('click', () => {
	btnAbrirFormulario.classList.toggle('active');
	formulario.classList.toggle('active');
});

// * Select del mes generado dinamicamente.
for(let i = 1; i <= 12; i++){
	let opcion = document.createElement('option');
	opcion.value = i;
	opcion.innerText = i;
	formulario.selectMes.appendChild(opcion);
}

// * Select del año generado dinamicamente.
const yearActual = new Date().getFullYear();
for(let i = yearActual; i <= yearActual + 8; i++){
	let opcion = document.createElement('option');
	opcion.value = i;
	opcion.innerText = i;
	formulario.selectYear.appendChild(opcion);
}

// * Input numero de tarjeta
formulario.inputNumero.addEventListener('keyup', (e) => {
	let valorInput = e.target.value;

	formulario.inputNumero.value = valorInput
	// Eliminamos espacios en blanco
	.replace(/\s/g, '')
	// Eliminar las letras
	.replace(/\D/g, '')
	// Ponemos espacio cada cuatro numeros
	.replace(/([0-9]{4})/g, '$1 ')
	// Elimina el ultimo espaciado
	.trim();

	numeroTarjeta.textContent = valorInput;

	if(valorInput == ''){
		numeroTarjeta.textContent = '#### #### #### ####';

		logoMarca.innerHTML = '';
	}

	if(valorInput[0] == 4){
		logoMarca.innerHTML = '';
		const imagen = document.createElement('img');
		imagen.src = 'img/logos/visa.png';
		logoMarca.appendChild(imagen);
	} else if(valorInput[0] == 5){
		logoMarca.innerHTML = '';
		const imagen = document.createElement('img');
		imagen.src = 'img/logos/mastercard.png';
		logoMarca.appendChild(imagen);
	}

	// Volteamos la tarjeta para que el usuario vea el frente.
	mostrarFrente();
});

// * Input nombre de tarjeta
formulario.inputNombre.addEventListener('keyup', (e) => {
	let valorInput = e.target.value;

	formulario.inputNombre.value = valorInput.replace(/[0-9]/g, '');
	nombreTarjeta.textContent = valorInput;
	firma.textContent = valorInput;

	if(valorInput == ''){
		nombreTarjeta.textContent = 'Jhon Doe';
	}

	mostrarFrente();
});

// * Select mes
formulario.selectMes.addEventListener('change', (e) => {
	mesExpiracion.textContent = e.target.value;
	mostrarFrente();
});

// * Select Año
formulario.selectYear.addEventListener('change', (e) => {
	yearExpiracion.textContent = e.target.value.slice(2);
	mostrarFrente();
});

// * CCV
formulario.inputCCV.addEventListener('keyup', () => {
	if(!tarjeta.classList.contains('active')){
		tarjeta.classList.toggle('active');
	}

	formulario.inputCCV.value = formulario.inputCCV.value
	// Eliminar los espacios
	.replace(/\s/g, '')
	// Eliminar las letras
	.replace(/\D/g, '');

	ccv.textContent = formulario.inputCCV.value;
});
},{}],2:[function(require,module,exports){
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
	var unidades = parseInt(localStorage.getItem('sidreriap'));
	var Anadido = parseInt(localStorage.getItem('sidreriapa')) + 1;


	if(Anadido > unidades){
		alert('No se puede añadir mas por que no hay stock disponible');
	} else {
		localStorage.setItem('sidreriapa', Anadido);
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
	var unidades = parseInt(localStorage.getItem('presleyp'));
	var Anadido = parseInt(localStorage.getItem('presleypa')) + 1;


	if(Anadido > unidades){
		alert('No se puede añadir mas por que no hay stock disponible');
	} else {
		localStorage.setItem('presleypa', Anadido);
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
	var unidades = parseInt(localStorage.getItem('berriap'));
	var Anadido = parseInt(localStorage.getItem('berriapa')) + 1;


	if(Anadido > unidades){
		alert('No se puede añadir mas por que no hay stock disponible');
	} else {
		localStorage.setItem('berriapa', Anadido);
	}
}
},{}],3:[function(require,module,exports){
function store(){

    var name = document.getElementById('name');
    var pw = document.getElementById('pw');
    var lowerCaseLetters = /[a-z]/g;
    var upperCaseLetters = /[A-Z]/g;
    var numbers = /[0-9]/g;

    if(name.value.length == 0){
        alert('Introduce un email');

    }else if(pw.value.length == 0){
        alert('Introduce una contraseña');

    }else if(name.value.length == 0 && pw.value.length == 0){
        alert('Introduce un email y una contraseña');

    }else if(pw.value.length > 8){
        alert('La contraseña debe tener una longitud maxima de 8');

    }else if(!pw.value.match(numbers)){
        alert('Añade un numero a la contraseña');

    }else if(!pw.value.match(upperCaseLetters)){
        alert('Añade una letra mayuscula a la contraseña.');

    }else if(!pw.value.match(lowerCaseLetters)){
        alert('Añade una letra minuscula a la contraseña.');

    }else{
        localStorage.setItem('name', name.value);
        localStorage.setItem('pw', pw.value);
        alert('Tu cuenta ha sido creada.');
    }
}

//checking
function check(){
    var storedName = localStorage.getItem('name');
    var storedPw = localStorage.getItem('pw');
    var login = parseInt(localStorage.getItem('login'));
    var userName = document.getElementById('userName');
    var userPw = document.getElementById('userPw');
    var userRemember = document.getElementById("rememberMe");

    if(userName.value == storedName && userPw.value == storedPw){
        alert('Ya estas logueado');
        login = 1;
        localStorage.setItem('login',login);
    }else{
        alert('Error on login');
    }
    return false;
}

function lougout(){
    var login = parseInt(localStorage.getItem('login'));
    if(login == 1){
        login = 0;
        localStorage.setItem('login',login);
        alert('Te has deslogueado');

    } else {
        window.location.href = 'Login.html';
    }
}
},{}],4:[function(require,module,exports){
function Realizado(){
	alert('Pago realizado');
	
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

	var OsasunaC = parseInt(localStorage.getItem('osasunac')) - OsasunaCa;
	var OsasunaP = parseInt(localStorage.getItem('osasunap')) - OsasunaPa;
	var OlivoC = parseInt(localStorage.getItem('olivoc')) - OlivoCa;
	var OlivoP = parseInt(localStorage.getItem('olivop')) - OlivoPa;
	var PresleyP = parseInt(localStorage.getItem('presleyp')) - PresleyPa;
	var PresleyC = parseInt(localStorage.getItem('presleyc')) - PresleyCa;
	var BerriaC = parseInt(localStorage.getItem('berriac')) - BerriaCa;
	var BerriaP = parseInt(localStorage.getItem('berriap')) - BerriaPa;
	var tipiC = parseInt(localStorage.getItem('tipic')) - tipiCa;
	var tipiP = parseInt(localStorage.getItem('tipip')) - tipiPa;
	var SidreriaC = parseInt(localStorage.getItem('sidreriac')) - SidreriaCa;
	var SidreriaP = parseInt(localStorage.getItem('sidreriap')) - SidreriaPa;

	localStorage.setItem('osasunac', OsasunaC);
	localStorage.setItem('osasunap', OsasunaP);
	localStorage.setItem('olivoc', OlivoC);
	localStorage.setItem('olivop', OlivoP);
	localStorage.setItem('presleyp', PresleyP);
	localStorage.setItem('presleyc', PresleyC);
	localStorage.setItem('berriac', BerriaC);
	localStorage.setItem('berriap', BerriaP);
	localStorage.setItem('tipic', tipiC);
	localStorage.setItem('tipip', tipiP);
	localStorage.setItem('sidreriac', SidreriaC);
	localStorage.setItem('sidreriap', SidreriaP);


	 OsasunaCa = 0;
	 OsasunaPa = 0;
	 OlivoCa = 0;
	 OlivoPa = 0;
	 PresleyPa = 0;
	 PresleyCa = 0;
	 BerriaCa = 0;
	 BerriaPa = 0;
	 tipiCa = 0;
	 tipiPa = 0;
	 SidreriaCa = 0;
	 SidreriaPa = 0;

	 localStorage.setItem('osasunaca', OsasunaCa);
	localStorage.setItem('osasunapa', OsasunaPa);
	localStorage.setItem('olivoca', OlivoCa);
	localStorage.setItem('olivopa', OlivoPa);
	localStorage.setItem('presleypa', PresleyPa);
	localStorage.setItem('presleyca', PresleyCa);
	localStorage.setItem('berriaca', BerriaCa);
	localStorage.setItem('berriapa', BerriaPa);
	localStorage.setItem('tipica', tipiCa);
	localStorage.setItem('tipipa', tipiPa);
	localStorage.setItem('sidreriaca', SidreriaCa);
	localStorage.setItem('sidreriapa', SidreriaPa);

	window.open('INICIO.html');
	window.close('Pago.html');
}
},{}],5:[function(require,module,exports){
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
	
	var total = OsasunaC + OsasunaP + OlivoC + OlivoP + PresleyP + PresleyC + BerriaC + BerriaP + tipiC + tipiP + SidreriaC + SidreriaP;

	if(total > 0) {
		inserth.insertAdjacentHTML("afterend",'<th></th><th></th><th></th><th><input type="button" value="Pagar" onclick="Pago()"></th>');
		inserth.insertAdjacentHTML("afterend",'<th><input type="button" value="Regresar al inicio" onclick="Regreso()"></th><th></th><th>Total(iva incl.)</th><th>' + total + '€</th>');

	}

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

	if(OsasunaC == 0 && OsasunaP == 0 && OlivoC == 0 && OlivoP == 0 && PresleyP == 0 && PresleyC == 0 && BerriaC == 0 && BerriaP == 0 && tipiC == 0 && tipiP == 0 && SidreriaC == 0 && SidreriaP == 0){
		inserth.insertAdjacentHTML("afterend",'<th>No hay productos añadidos</th><br><input type="button" value="Regresar a la pagina" onclick="Regreso()">');
	}

	
}

function Pago(){
	window.location.href = 'Pago.html';
}

function Regreso(){
	window.location.href = 'INICIO.html';
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
},{}],6:[function(require,module,exports){
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

		var login = 0;


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


},{}]},{},[2,3,1,4,5,6])(6)
});
