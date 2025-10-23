const readline = require("readline");

// Función Romano → Arábigo
function romanoAArabe(romano) {
    const valores = {'I':1,'V':5,'X':10,'L':50,'C':100,'D':500,'M':1000};
    let total = 0, prev = 0;
    for (let i = romano.length - 1; i >= 0; i--) {
        const valor = valores[romano[i].toUpperCase()];
        if (!valor) return null;
        total += valor < prev ? -valor : valor;
        prev = valor;
    }
    return total;
}

// Función Arábigo → Romano
function arabeARomano(numero) {
    numero = parseInt(numero);
    if (isNaN(numero) || numero <= 0 || numero >= 4000) return null;
    const valores = [
        { valor: 1000, simbolo: "M" },
        { valor: 900, simbolo: "CM" },
        { valor: 500, simbolo: "D" },
        { valor: 400, simbolo: "CD" },
        { valor: 100, simbolo: "C" },
        { valor: 90, simbolo: "XC" },
        { valor: 50, simbolo: "L" },
        { valor: 40, simbolo: "XL" },
        { valor: 10, simbolo: "X" },
        { valor: 9, simbolo: "IX" },
        { valor: 5, simbolo: "V" },
        { valor: 4, simbolo: "IV" },
        { valor: 1, simbolo: "I" }
    ];
    let resultado = "";
    for (let i = 0; i < valores.length; i++) {
        while (numero >= valores[i].valor) {
            resultado += valores[i].simbolo;
            numero -= valores[i].valor;
        }
    }
    return resultado;
}

// Interfaz de lectura en terminal
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Función principal de interacción
function iniciarConversor() {
    console.log("\n=== Conversor Romano ↔ Arábigo ===");
    console.log("1: Romano → Arábigo");
    console.log("2: Arábigo → Romano");

    rl.question("Elegí la opción (1 o 2): ", function(opcion) {
        if (opcion === "1") {
            rl.question("Ingresá un número romano: ", function(romano) {
                const resultado = romanoAArabe(romano);
                console.log(`Resultado: ${resultado !== null ? resultado : "Número inválido"}`);
                preguntarContinuar();
            });
        } else if (opcion === "2") {
            rl.question("Ingresá un número arábigo: ", function(arabigo) {
                const resultado = arabeARomano(arabigo);
                console.log(`Resultado: ${resultado !== null ? resultado : "Número inválido"}`);
                preguntarContinuar();
            });
        } else {
            console.log("Opción inválida.");
            preguntarContinuar();
        }
    });
}

// Preguntar si el usuario quiere continuar
function preguntarContinuar() {
    rl.question("¿Querés hacer otra conversión? (s/n): ", function(respuesta) {
        if (respuesta.toLowerCase() === "s") {
            iniciarConversor();
        } else {
            console.log("¡Gracias por usar el conversor!");
            rl.close();
        }
    });
}

// Iniciar programa
iniciarConversor();
