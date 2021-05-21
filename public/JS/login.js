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

    var userName = document.getElementById('userName');
    var userPw = document.getElementById('userPw');
    var userRemember = document.getElementById("rememberMe");

    if(userName.value == storedName && userPw.value == storedPw){
        alert('You are logged in.');
        refrescarLogin();
    }else{
        alert('Error on login');
    }
}

function isLogged() {
    if (localStorage.getItem('name') == undefined) {
        return false;
    } else {
        return true;
    }
}

function logout() {
    localStorage.clear();
    refrescarLogin();
}

function ocultarAtributo(ide) {
    if (ide) {
        ide.setAttribute("hidden", true);
    }
}

function mostrarAtributo(ide) {
    if (ide) {
        ide.removeAttribute("hidden");
    }
}