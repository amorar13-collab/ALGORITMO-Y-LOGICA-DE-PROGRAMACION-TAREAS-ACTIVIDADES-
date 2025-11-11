//BLOQUE 1:
// Programa que genera la serie de Fibonacci
const prompt = require("prompt-sync")();
let n = parseInt(prompt("Ingrese la cantidad de términos: "));
let a = 0;
let b = 1;

console.log("Serie de Fibonacci:");

console.log(a);
if (n > 1) {
  console.log(b);
}

for (let i = 2; i < n; i++) {
  let nuevo = a + b;
  console.log(nuevo);
  a = b;
  b = nuevo;
}


// Programa que muestra los divisores de un número
const prompt = require("prompt-sync")(); 
let n = parseInt(prompt("Ingrese un número: "));
let divisores = [];

for (let i = 1; i <= n; i++) {
  if (n % i === 0) {
    divisores.push(i);
  }
}

console.log("Los divisores son: " + divisores.join(", "));


// Programa que calcula la suma de los divisores de un número
const prompt = require("prompt-sync")();
let n = parseInt(prompt("Ingrese un número: "));
let suma = 0;

for (let i = 1; i <= n; i++) {
  if (n % i === 0) {
    suma += i;
  }
}

console.log("Suma de divisores: " + suma);


// Programa que verifica si un número es perfecto
const prompt = require("prompt-sync")();
let n = parseInt(prompt("Ingrese un número: "));
let suma = 0;
for (let i = 1; i < n; i++) {
  if (n % i === 0) {
    suma += i;
  }
}
if (suma === n) {
  console.log(n + " es un número perfecto.");
} else {
  console.log(n + " no es un número perfecto.");
}


// Programa que verifica si un número es primo
const prompt = require("prompt-sync")();
let n = parseInt(prompt("Ingrese un número: "));
let contador = 0;
for (let i = 1; i <= n; i++) {
  if (n % i == 0) {
    contador = contador + 1;
  }
}
if (contador == 2) {
  console.log(n + " es un número primo.");
} else {
  console.log(n + " no es un número primo.");
}



// Programa que invierte los dígitos de un número
const prompt = require("prompt-sync")(); 
let n = parseInt(prompt("Ingrese un número: "));
let invertido = "";
for (; n > 0; n = (n - (n % 10)) / 10) {
  let digito = n % 10;
  invertido = invertido + digito; 
}

console.log("Número invertido: " + invertido);


// Programa que cuenta cuántos dígitos tiene un número
const prompt = require("prompt-sync")(); // para leer datos del usuario
let n = parseInt(prompt("Ingrese un número: "));
let contador = 0;
for (; n > 0; n = (n - (n % 10)) / 10) {
  contador = contador + 1; 
}

console.log("Cantidad de dígitos: " + contador);


// Programa que calcula el factorial de un número
const prompt = require("prompt-sync")(); 
let n = parseInt(prompt("Ingrese un número: "));
let fact = 1;
for (let i = 1; i <= n; i = i + 1) {
  fact = fact * i;
}

console.log(n + "! = " + fact);


// Programa que realiza sumas sucesivas de un número
const prompt = require("prompt-sync")(); 
let numero = parseInt(prompt("Ingrese un número: "));
let veces = parseInt(prompt("¿Cuántas veces desea sumarlo?: "));
let resultado = 0;
for (let i = 1; i <= veces; i = i + 1) {
  resultado = resultado + numero;
}

console.log("Resultado = " + resultado);


// Programa que realiza restas sucesivas
const prompt = require("prompt-sync")(); 
let numero = parseInt(prompt("Ingrese un número: "));
let valor = parseInt(prompt("Ingrese el valor a restar: "));
for (; numero > 0; numero = numero - valor) {
}

console.log("Resultado final: " + numero);


//BLOQUE2:
// Programa que genera series de Fibonacci para varios valores
const prompt = require("prompt-sync")(); 
let cantidad = parseInt(prompt("¿Cuántos valores desea ingresar?: "));
let valores = [];
for (let i = 0; i < cantidad; i = i + 1) {
  let n = parseInt(prompt("Ingrese el valor " + (i + 1) + ": "));
  valores.push(n);
}

console.log("");
for (let i = 0; i < valores.length; i = i + 1) {
  let n = valores[i];
  let a = 0;
  let b = 1;
  let serie = [a, b];
  for (let j = 2; j < n; j = j + 1) {
    let nuevo = a + b;
    serie.push(nuevo);
    a = b;
    b = nuevo;
  }

  console.log("Fibonacci(" + n + "): " + serie.join(", "));
}


// Programa que muestra los divisores de varios números
const prompt = require("prompt-sync")(); 
let cantidad = parseInt(prompt("¿Cuántos números desea ingresar?: "));
let numeros = [];
for (let i = 0; i < cantidad; i = i + 1) {
  let n = parseInt(prompt("Ingrese el número " + (i + 1) + ": "));
  numeros.push(n);
}

console.log("");
for (let i = 0; i < numeros.length; i = i + 1) {
  let n = numeros[i];
  let divisores = [];

  for (let j = 1; j <= n; j = j + 1) {
    if (n % j == 0) {
      divisores.push(j);
    }
  }
  console.log(n + " = " + divisores.join(", "));
}


// Programa que calcula la suma de los divisores de varios números
const prompt = require("prompt-sync")(); 
let cantidad = parseInt(prompt("¿Cuántos números desea ingresar?: "));
let numeros = [];
for (let i = 0; i < cantidad; i = i + 1) {
  let n = parseInt(prompt("Ingrese el número " + (i + 1) + ": "));
  numeros.push(n);
}

console.log("");
for (let i = 0; i < numeros.length; i = i + 1) {
  let n = numeros[i];
  let suma = 0;
  for (let j = 1; j <= n; j = j + 1) {
    if (n % j == 0) {
      suma = suma + j;
    }
  }
  console.log(n + " = " + suma);
}


// Programa que muestra los números perfectos de una lista
const prompt = require("prompt-sync")(); 
let cantidad = parseInt(prompt("¿Cuántos números desea ingresar?: "));
let numeros = [];
for (let i = 0; i < cantidad; i = i + 1) {
  let n = parseInt(prompt("Ingrese el número " + (i + 1) + ": "));
  numeros.push(n);
}

console.log("");

let perfectos = [];
for (let i = 0; i < numeros.length; i = i + 1) {
  let n = numeros[i];
  let suma = 0;
  for (let j = 1; j < n; j = j + 1) {
    if (n % j == 0) {
      suma = suma + j;
    }
  }

  if (suma == n) {
    perfectos.push(n);
  }
}

console.log("Números perfectos: " + perfectos.join(", "));


// Programa que muestra los números primos de una lista
const prompt = require("prompt-sync")();
let cantidad = parseInt(prompt("¿Cuántos números desea ingresar?: "));
let numeros = [];
for (let i = 0; i < cantidad; i = i + 1) {
  let n = parseInt(prompt("Ingrese el número " + (i + 1) + ": "));
  numeros.push(n);
}

console.log(""); 

let primos = [];
for (let i = 0; i < numeros.length; i = i + 1) {
  let n = numeros[i];
  let divisores = 0;
  for (let j = 1; j <= n; j = j + 1) {
    if (n % j == 0) {
      divisores = divisores + 1;
    }
  }

  if (divisores == 2) {
    primos.push(n);
  }
}

console.log("Primos: " + primos.join(", "));


// Programa que invierte varios números
const prompt = require("prompt-sync")();
let cantidad = parseInt(prompt("¿Cuántos números desea ingresar?: "));
let numeros = [];
for (let i = 0; i < cantidad; i = i + 1) {
  let n = parseInt(prompt("Ingrese el número " + (i + 1) + ": "));
  numeros.push(n);
}

console.log(""); 

for (let i = 0; i < numeros.length; i = i + 1) {
  let n = numeros[i];
  let invertido = "";
  for (; n > 0; n = (n - (n % 10)) / 10) {
    let digito = n % 10;
    invertido = invertido + digito;
  }

  console.log(numeros[i] + " = " + parseInt(invertido));
}


// Programa que cuenta los dígitos de varios números
const prompt = require("prompt-sync")(); 
let cantidad = parseInt(prompt("¿Cuántos números desea ingresar?: "));
let numeros = [];
for (let i = 0; i < cantidad; i = i + 1) {
  let n = parseInt(prompt("Ingrese el número " + (i + 1) + ": "));
  numeros.push(n);
}

console.log("");

for (let i = 0; i < numeros.length; i = i + 1) {
  let n = numeros[i];
  let contar = 0;
  for (; n > 0; n = (n - (n % 10)) / 10) {
    contar = contar + 1;
  }

  console.log(numeros[i] + " = " + contar + " dígitos");
}


// Programa que calcula el factorial de varios números
const prompt = require("prompt-sync")(); 
let cantidad = parseInt(prompt("¿Cuántos números desea ingresar?: "));
let numeros = [];
for (let i = 0; i < cantidad; i = i + 1) {
  let n = parseInt(prompt("Ingrese el número " + (i + 1) + ": "));
  numeros.push(n);
}

console.log("");
for (let i = 0; i < numeros.length; i = i + 1) {
  let n = numeros[i];
  let fact = 1;
  for (let j = 1; j <= n; j = j + 1) {
    fact = fact * j;
  }

  console.log(n + "! = " + fact);
}


// Programa que realiza sumas sucesivas de varios números
const prompt = require("prompt-sync")();
let cantidad = parseInt(prompt("¿Cuántos números desea ingresar?: "));
let numeros = [];
for (let i = 0; i < cantidad; i = i + 1) {
  let n = parseInt(prompt("Ingrese el número " + (i + 1) + ": "));
  numeros.push(n);
}

let veces = parseInt(prompt("¿Cuántas veces desea sumar cada número?: "));

console.log("");

for (let i = 0; i < numeros.length; i = i + 1) {
  let n = numeros[i];
  let suma = 0;
  for (let j = 0; j < veces; j = j + 1) {
    suma = suma + n;
  }

  console.log(n + " x " + veces + " = " + suma);
}


// Programa que realiza restas sucesivas de varios números (solo con for)
const prompt = require("prompt-sync")(); 
let cantidad = parseInt(prompt("¿Cuántos números desea ingresar?: "));
let numeros = [];

for (let i = 0; i < cantidad; i = i + 1) {
  let n = parseInt(prompt("Ingrese el número " + (i + 1) + ": "));
  numeros.push(n);
}

let valor_resta = parseInt(prompt("Ingrese el valor a restar: "));
console.log(""); 
for (let i = 0; i < numeros.length; i = i + 1) {
  let n = numeros[i];
  for (; n >= valor_resta; n = n - valor_resta) {
  }

  console.log(numeros[i] + " = " + n);
}
