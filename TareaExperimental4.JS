// 1. CONTAR PALABRAS
function contarPalabras(texto) {
    let palabras = 0;
    let dentro = false;
    for (let i = 0; i < texto.length; i++) {
        let c = texto[i];

        if (c !== " " && c !== "\n" && c != ",") {
            if (!dentro) {
                palabras++;
                dentro = true;
            }
        } else {
            dentro = false;
        }
    }
    return palabras;
}
let texto = prompt("Ingrese el texto:");
let total = contarPalabras(texto);
console.log("Número de palabras: " + total);

// 2. CONTAR SIGNOS DE PUNTUACION
function contarSignos(texto) {
    let signos = [".", ",", ";", ":", "!", "?", "¿", "¡", "\""];
    let total = 0;

    for (let i = 0; i < texto.length; i++) {
        for (let j = 0; j < signos.length; j++) {
            if (texto[i] === signos[j]) total++;
        }
    }
    return total;
}
let texto = prompt("Ingrese texto");
let total = contarSignos(texto)
console.log(" Se encontro:" + total + " signos de puntuacion.");

// 3. CONTAR VOCALES
function contarVocales(texto) {
    let vocales = ["a","e","i","o","u","A","E","I","O","U"];
    let total = 0;

    for (let i = 0; i < texto.length; i++) {
        for (let j = 0; j < vocales.length; j++) {
            if (texto[i] === vocales[j]) total++;
        }
    }
    return total;
}
let texto = prompt(" Ingrese el texto");
let total = contarVocales(texto);
console.log(" Se encontro" + total + " vocales.");

// 4. CONTAR CONSONANTES
function contarConsonantes(texto) {
    let total = 0;

    for (let i = 0; i < texto.length; i++) {
        let c = texto[i];

        // ¿Es letra?
        if ((c >= "A" && c <= "Z") || (c >= "a" && c <= "z")) {

            // ¿No es vocal?
            let esVocal = false;
            let vocales = ["a","e","i","o","u","A","E","I","O","U"];
            for (let j = 0; j < vocales.length; j++) {
                if (c === vocales[j]) esVocal = true;
            }

            if (!esVocal) total++;
        }
    }
    return total;
}
let texto = prompt(" Ingrese el texto");
let total = contarConsonantes(texto);
console.log(" Se encontro" + total + " consonantes.");

// 5. CONTAR DIGITOS
function contarDigitos(texto) {
    let total = 0;

    for (let i = 0; i < texto.length; i++) {
        if (texto[i] >= "0" && texto[i] <= "9") total++;
    }
    return total;
}
let texto = prompt("Ingrese digitos");
let total = contarDigitos(texto);
console.log(" Se encontraron: " + total + " digitos");

// 6. PALABRAS QUE EMPIEZAN CON MAYÚSCULA
function palabrasMayuscula(texto) {
    let total = 0;
    let nuevaPalabra = true;

    for (let i = 0; i < texto.length; i++) {
        let c = texto[i];

        if (c !== " " && c !== "\n") {
            if (nuevaPalabra && (c >= "A" && c <= "Z")) total++;
            nuevaPalabra = false;
        } else {
            nuevaPalabra = true;
        }
    }
    return total;
}
let texto = prompt("Ingrese las palabras");
let total = palabrasMayuscula(texto);
console.log(" Se encontro" + total + "palabras que empiezan con mayuscula.");



// 7. PALABRAS QUE EMPIEZAN CON MINÚSCULA
function palabrasMinuscula(texto) {
    let total = 0;
    let nuevaPalabra = true;

    for (let i = 0; i < texto.length; i++) {
        let c = texto[i];

        if (c !== " " && c !== "\n") {
            if (nuevaPalabra && (c >= "a" && c <= "z")) total++;
            nuevaPalabra = false;
        } else {
            nuevaPalabra = true;
        }
    }
    return total;
}
let texto = prompt("Ingrese las palabras");
let total = palabrasMinuscula(texto);
console.log(" Se encontro" + total + "palabras que empiezan con minuscula.");

// 8. CONTAR PÁRRAFOS
function contarParrafos(texto) {
    let total = 1; 

    for (let i = 0; i < texto.length; i++) {
        if (texto[i] === "\n") total++;
    }
    return total;
}
let texto = prompt("Ingrese los parrafos");
let total = contarParrafos(texto);
console.log(" Se encontro" + total + "parrafos.");

// 9. INVERTIR TEXTO
function invertirTexto(texto) {
    let nuevo = "";

    for (let i = texto.length - 1; i >= 0; i--) {
        nuevo += texto[i];
    }
    return nuevo;
}
let texto = prompt("Ingrese el texto");
let nuevo = invertirTexto(texto);
console.log(" Texto invertido:" + nuevo);

// 10. CONTAR TODOS LOS CARACTERES
function contarCaracteres(texto) {
    return texto.length;
}
let texto = prompt(" Ingrese el texto");
let total = contarCaracteres(texto);
console.log(" El texto tiene:" + total + " caracteres");

// 11. BUSCAR PALABRA EN EL TEXTO
function buscarPalabra(texto, palabra) {
    let match = 0;

    for (let i = 0; i < texto.length; i++) {
        if (texto[i] === palabra[match]) {
            match++;
            if (match === palabra.length) return true;
        } else {
            match = 0;
        }
    }
    return false;
}
let texto = prompt("Ingrese el texto");
let total = buscarPalabra(texto);
console.log(" Se encontro" + total + "palabras.");

// 12. CONTAR UN CARÁCTER EN EL TEXTO
function contarCaracter(texto, c) {
    let total = 0;
    for (let i = 0; i < texto.length; i++) {
        if (texto[i] === c) total++;
    }
    return total;
}
let texto = prompt("Ingrese el texto");
let total = contarCaracter(texto);
console.log(" Se encontro" + total + "caracteres.");


// 13. CARACTERES EN POSICIONES PARES
function posicionesPares(texto) {
    let total = 0;
    for (let i = 0; i < texto.length; i += 2) {
        total++;
    }
    return total;
}
let texto = prompt("Ingrese el texto");
let total = posicionesPares(texto);
console.log(" Se encontro" + total + " caracteres");

// 14. CARACTERES EN POSICIONES IMPARES
function posicionesImpares(texto) {
    let total = 0;
    for (let i = 1; i < texto.length; i += 2) {
        total++;
    }
    return total;
}
let texto = prompt("Ingrese el texto");
let total = posicionesImpares(texto);
console.log(" Se encontro" + total + " caracteres");

// 15. AÑADIR TEXTO AL INICIO Y FINAL
function agregarTexto(texto, fragmento) {

    let inicio = fragmento + " " + texto;

    let final = texto + " " + fragmento;

    return { inicio, final };
}
let texto = prompt("Ingrese el texto");
let fragmento = prompt( "Ingrese el fragmento");
let total = agregarTexto(texto, fragmento);
console.log(total);
