let valorTercero = document.getElementById('pantalla3');

let suma = () =>{
    let valorPrimero = parseInt (document.getElementById('pantalla').value);
    let valorSegundo = parseInt ( document.getElementById('pantalla2').value);
    let sum = valorPrimero + valorSegundo;
    return document.getElementById("pantalla3").value = sum;
}
function resta() {
    let valorPrimero = parseInt (document.getElementById('pantalla').value);
    let valorSegundo = parseInt ( document.getElementById('pantalla2').value);
    let rest = valorPrimero - valorSegundo;
    document.getElementById("pantalla3").value = rest;
}
function multiplicacion() {
    let valorPrimero = parseInt (document.getElementById('pantalla').value);
    let valorSegundo = parseInt ( document.getElementById('pantalla2').value);
    let mult = valorPrimero * valorSegundo;
    document.getElementById("pantalla3").value = mult;
}
function division() {
    let valorPrimero = parseInt (document.getElementById('pantalla').value);
    let valorSegundo = parseInt ( document.getElementById('pantalla2').value);
    let divi = valorPrimero / valorSegundo;
    document.getElementById("pantalla3").value = divi;
}


