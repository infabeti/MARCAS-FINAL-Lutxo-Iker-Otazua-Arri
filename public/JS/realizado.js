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