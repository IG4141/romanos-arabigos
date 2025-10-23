// Conversión de Romano a Arábigo
function romanoAArabe(romano) {
    if (typeof romano !== "string" || romano.trim() === "") return null;

    const valores = {
        'I': 1, 'V': 5, 'X': 10,
        'L': 50, 'C': 100, 'D': 500, 'M': 1000
    };

    let total = 0;
    let prev = 0;

    for (let i = romano.length - 1; i >= 0; i--) {
        const valor = valores[romano[i].toUpperCase()];
        if (!valor) return null;
        if (valor < prev) total -= valor;
        else total += valor;
        prev = valor;
    }

    return total;
}

// Conversión de Arábigo a Romano
function arabeARomano(numero) {
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

// Pruebas en terminal (Node.js)
console.log("=== Pruebas Romano → Arábigo ===");
console.log("III  →", romanoAArabe("III"));
console.log("IX   →", romanoAArabe("IX"));
console.log("LVIII→", romanoAArabe("LVIII"));
console.log("MCMXCIV →", romanoAArabe("MCMXCIV"));

console.log("\n=== Pruebas Arábigo → Romano ===");
console.log("3    →", arabeARomano(3));
console.log("9    →", arabeARomano(9));
console.log("58   →", arabeARomano(58));
console.log("1994 →", arabeARomano(1994));

// Exportar funciones para el HTML
if (typeof module !== "undefined") {
    module.exports = { romanoAArabe, arabeARomano };
}
