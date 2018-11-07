var suma = "";
var vysledek = 0;
var process = "";
function myFunction(e) {
  suma += e;
  console.log(suma);
  //document.getElementById("data").innerHTML = suma;
  document.getElementById("data").innerHTML = suma;
}
function deleter() {
  vysledek = 0;
  suma = "";
  document.getElementById("data").innerHTML = 0;
}
function getnum(value) {
  vysledek = Number(suma);
  suma = "";
  process = value;
}
function equals() {
  if (process == "+") {
    vysledek = parseInt(vysledek) + parseInt(suma);
    document.getElementById("data").innerHTML = vysledek;
    console.log(vysledek);
  } else if (process == "-") {
    vysledek = parseInt(vysledek) - parseInt(suma);
    document.getElementById("data").innerHTML = vysledek;
    console.log(vysledek);
  } else if (process == "/") {
    vysledek = parseInt(vysledek) / parseInt(suma);
    document.getElementById("data").innerHTML = vysledek;
    console.log(vysledek);
  } else if ((process = "*")) {
    vysledek = parseInt(vysledek) * parseInt(suma);
    document.getElementById("data").innerHTML = vysledek;
    console.log(vysledek);
  }
  suma = vysledek;
  vysledek = 0;
}
