//BLOQUE 1, ejercicios con Cadenas 

// contar caracteres de una frase
const prompt = require("prompt-sync")();
let frase = prompt("Ingrese una frase");
let cantidad = frase.length;
console.log(" La frase tiene " + cantidad + " caracteres ");

//Contar apariciones de una vocal en un título
const prompt = require("prompt-sync")();
let titulo = prompt("Ingrese un título: ");
let vocal = prompt("Ingrese una vocal: ");
let contador = 0;
for (let i = 0; i < titulo.length; i++) {
    if (titulo[i] == vocal) {
        contador = contador + 1;
    }
}
console.log("La vocal " + vocal + " aparece " + contador + " veces.");

//Invertir palabra
const prompt = require("prompt-sync")();
let palabra = prompt("Ingrese un nombre de producto: ");
let invertida = "";
for (let i = palabra.length - 1; i >= 0; i--) {
    invertida = invertida + palabra[i];
}
console.log("Invertido: " + invertida);

//Comparar nombres de ciudades por longitud
const prompt = require("prompt-sync")();
let c1 = prompt("Ingrese primera ciudad: ");
let c2 = prompt("Ingrese segunda ciudad: ");
if (c1.length > c2.length) {
    console.log("La palabra '" + c1 + "' tiene más letras.");
} else {
    console.log("La palabra '" + c2 + "' tiene más letras.");
}

//Obtener iniciales de un cargo profesional
const prompt = require("prompt-sync")();
let cargo = prompt("Ingrese un cargo profesional: ");
let partes = cargo.split(" ");
let iniciales = "";
for (let i = 0; i < partes.length; i++) {
    iniciales = iniciales + partes[i][0] + ".";
}
console.log("Las iniciales son: " + iniciales);


//BLOQUE 2, cadenas con arreglo

//Contar caracteres de varias frases publicitarias
const prompt = require("prompt-sync")();
let n = parseInt(prompt("¿Cuántas frases va a ingresar? "));
let frases = [];
for (let i = 0; i < n; i++) {
  let f = prompt("Ingrese la frase " + (i + 1) + ": ");
  frases.push(f);
}
for (let i = 0; i < frases.length; i++) {
  let cantidad = frases[i].length;
  console.log(frases[i] + " → " + cantidad + " caracteres");
}

//Contar caracteres de varias frases publicitarias
const prompt = require("prompt-sync")();
let n = parseInt(prompt("¿Cuántos títulos va a ingresar? "));
let titulos = [];

for (let i = 0; i < n; i++) {
  let t = prompt("Ingrese el título " + (i + 1) + ": ");
  titulos.push(t);
}

let vocal = prompt("Ingrese la vocal a buscar: ");

for (let i = 0; i < titulos.length; i++) {
  let contador = 0;
  for (let j = 0; j < titulos[i].length; j++) {
    if (titulos[i][j] == vocal) {
      contador = contador + 1;
    }
  }
  console.log(titulos[i] + " → " + contador + " veces la '" + vocal + "'");
}

//Contar apariciones de una vocal en cada título
const prompt = require("prompt-sync")();
let n = parseInt(prompt("¿Cuántos títulos va a ingresar? "));
let titulos = [];
for (let i = 0; i < n; i++) {
  let t = prompt("Ingrese el título " + (i + 1) + ": ");
  titulos.push(t);
}
let vocal = prompt("Ingrese la vocal a buscar: ");
for (let i = 0; i < titulos.length; i++) {
  let contador = 0;
  for (let j = 0; j < titulos[i].length; j++) {
    if (titulos[i][j] == vocal) {
      contador = contador + 1;
    }
  }
  console.log(titulos[i] + " → " + contador + " veces la '" + vocal + "'");
}

//Invertir los nombres de varios productos
const prompt = require("prompt-sync")();
let n = parseInt(prompt("¿Cuántos productos va a ingresar? "));
let productos = [];
for (let i = 0; i < n; i++) {
  let p = prompt("Ingrese el producto " + (i + 1) + ": ");
  productos.push(p);
}
for (let i = 0; i < productos.length; i++) {
  let invertido = "";
  for (let j = productos[i].length - 1; j >= 0; j--) {
    invertido = invertido + productos[i][j];
  }
  console.log(productos[i] + " → " + invertido);
}

//Comparar longitudes de nombres de ciudades
const prompt = require("prompt-sync")();
let n = parseInt(prompt("¿Cuántas ciudades va a ingresar? "));
let ciudades = [];
for (let i = 0; i < n; i++) {
  let c = prompt("Ingrese la ciudad " + (i + 1) + ": ");
  ciudades.push(c);
}
if (ciudades.length == 0) {
  console.log("No ingresó ciudades.");
} else {
  let mayor = ciudades[0];
  for (let i = 1; i < ciudades.length; i++) {
    if (ciudades[i].length > mayor.length) {
      mayor = ciudades[i];
    }
  }
  console.log("La ciudad con más letras es '" + mayor + "' (" + mayor.length + " letras).");
}

//Obtener iniciales de varios cargos profesionales
const prompt = require("prompt-sync")();
let n = parseInt(prompt("¿Cuántos cargos va a ingresar? "));
let cargos = [];
for (let i = 0; i < n; i++) {
  let c = prompt("Ingrese el cargo " + (i + 1) + ": ");
  cargos.push(c);
}
for (let i = 0; i < cargos.length; i++) {
  let partes = cargos[i].split(" ");
  let iniciales = "";
  for (let j = 0; j < partes.length; j++) {
    if (partes[j].length > 0) { // evitar cadenas vacías
      iniciales = iniciales + partes[j][0] + ".";
    }
  }
  console.log(cargos[i] + " → " + iniciales);
}


//BLOQUE 3, Ejercicios Individuales con Ciclos

//promedio de calificaciones mayores a 70
const prompt = require("prompt-sync")();
let n = parseInt(prompt("¿Cuántas calificaciones va a ingresar? "));
let suma = 0;
let cont = 0;
for (let i = 0; i < n; i++) {
  let nota = parseFloat(prompt("Ingrese la nota " + (i + 1) + ": "));
  if (nota >= 70) {
    suma = suma + nota;
    cont = cont + 1;
  }
}
if (cont > 0) {
  console.log("Promedio de calificaciones ≥ 70: " + (suma / cont));
} else {
  console.log("No hay calificaciones ≥ 70.");
}

//Contar cuántos números negativos se ingresan
const prompt = require("prompt-sync")();
let n = parseInt(prompt("¿Cuántos números va a ingresar? "));
let negativos = 0;
for (let i = 0; i < n; i++) {
  let num = parseFloat(prompt("Ingrese el número " + (i + 1) + ": "));
  if (num < 0) {
    negativos = negativos + 1;
  }
}
console.log("Cantidad de números negativos: " + negativos);

//Promedio de edades: mayores vs menores de edad
const prompt = require("prompt-sync")();
let n = parseInt(prompt("¿Cuántas edades va a ingresar? "));
let sumaMay = 0, contMay = 0;
let sumaMen = 0, contMen = 0;
for (let i = 0; i < n; i++) {
  let edad = parseInt(prompt("Ingrese la edad " + (i + 1) + ": "));
  if (edad >= 18) {
    sumaMay = sumaMay + edad;
    contMay = contMay + 1;
  } else {
    sumaMen = sumaMen + edad;
    contMen = contMen + 1;
  }
}
if (contMay > 0) console.log("Promedio mayores de edad: " + (sumaMay / contMay));
else console.log("No hay mayores de edad");
if (contMen > 0) console.log("Promedio menores de edad: " + (sumaMen / contMen));
else console.log("No hay menores de edad");

//Mostrar la tabla de multiplicar de un número
const prompt = require("prompt-sync")();
let num = parseInt(prompt("Ingrese un número: "));
for (let i = 1; i <= 10; i++) {
  console.log(num + " x " + i + " = " + (num * i));
}

//Promedio de números pares e impares
const prompt = require("prompt-sync")();
let n = parseInt(prompt("¿Cuántos números va a ingresar? "));
let sumaP = 0, contP = 0;
let sumaI = 0, contI = 0;
for (let i = 0; i < n; i++) {
  let num = parseInt(prompt("Ingrese el número " + (i + 1) + ": "));
  if (num % 2 == 0) {
    sumaP = sumaP + num;
    contP = contP + 1;
  } else {
    sumaI = sumaI + num;
    contI = contI + 1;
  }
}
if (contP > 0) console.log("Promedio de pares: " + (sumaP / contP));
else console.log("No hay números pares");
if (contI > 0) console.log("Promedio de impares: " + (sumaI / contI));
else console.log("No hay números impares");


//Bloque 4, versión con Arreglos (versión con arreglos del bloque 3)

//Promedio de calificaciones mayores a 70
const prompt = require("prompt-sync")();
let n = parseInt(prompt("¿Cuántas calificaciones hay? "));
let suma = 0;
let cont = 0;
for (let i = 0; i < n; i++) {
  let nota = parseFloat(prompt("Ingrese la nota " + (i + 1) + ": "));
  if (nota >= 70) {
    suma = suma + nota;
    cont = cont + 1;
  }
}
if (cont > 0) {
  console.log("Promedio de calificaciones ≥ 70: " + (suma / cont));
} else {
  console.log("No hay calificaciones ≥ 70.");
}

//Contar números negativos en una lista
const prompt = require("prompt-sync")();
let n = parseInt(prompt("¿Cuántos números va a ingresar? "));
let contador = 0;
for (let i = 0; i < n; i++) {
  let num = parseFloat(prompt("Ingrese el número " + (i + 1) + ": "));
  if (num < 0) {
    contador = contador + 1;
  }
}
console.log("Cantidad de números negativos: " + contador);

//Promedio de edades: mayores vs menores de edad
const prompt = require("prompt-sync")();
let n = parseInt(prompt("¿Cuántas edades va a ingresar? "));
let sumaMay = 0, contMay = 0;
let sumaMen = 0, contMen = 0;
for (let i = 0; i < n; i++) {
  let edad = parseInt(prompt("Ingrese la edad " + (i + 1) + ": "));
  if (edad >= 18) {
    sumaMay = sumaMay + edad;
    contMay = contMay + 1;
  } else {
    sumaMen = sumaMen + edad;
    contMen = contMen + 1;
  }
}
if (contMay > 0) {
  console.log("Promedio de mayores: " + (sumaMay / contMay));
} else {
  console.log("No hay mayores de edad ingresados.");
}
if (contMen > 0) {
  console.log("Promedio de menores: " + (sumaMen / contMen));
} else {
  console.log("No hay menores de edad ingresados.");
}

//Mostrar tablas de multiplicar de varios números
const prompt = require("prompt-sync")();
let n = parseInt(prompt("¿Cuántos números quiere para tablas? "));
let numeros = [];
for (let i = 0; i < n; i++) {
  let num = parseInt(prompt("Ingrese el número " + (i + 1) + ": "));
  numeros.push(num);
}
for (let i = 0; i < numeros.length; i++) {
  console.log("Tabla del " + numeros[i] + ":");
  for (let j = 1; j <= 10; j++) {
    console.log(numeros[i] + " x " + j + " = " + (numeros[i] * j));
  }
}

//Promedio de números pares e impares
const prompt = require("prompt-sync")();
let n = parseInt(prompt("¿Cuántos números va a ingresar? "));
let sumaP = 0, contP = 0;
let sumaI = 0, contI = 0;
for (let i = 0; i < n; i++) {
  let num = parseInt(prompt("Ingrese el número " + (i + 1) + ": "));
  if (num % 2 == 0) {
    sumaP = sumaP + num;
    contP = contP + 1;
  } else {
    sumaI = sumaI + num;
    contI = contI + 1;
  }
}
if (contP > 0) {
  console.log("Promedio de pares: " + (sumaP / contP));
} else {
  console.log("No hay números pares ingresados.");
}
if (contI > 0) {
  console.log("Promedio de impares: " + (sumaI / contI));
} else {
  console.log("No hay números impares ingresados.");
}







