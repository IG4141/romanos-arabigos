
function romanoAArabe(romano) {
    const valores = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    let total = 0;
    let prev = 0;

    for (let i = romano.length - 1; i >= 0; i--) {
        const valor = valores[romano[i].toUpperCase()];
        if (!valor) return null; 
        if (valor < prev) {
            total -= valor;
        } else {
            total += valor;
        }
        prev = valor;
    }

    return total;
}
// pruebas que hice:
console.log(romanoAArabe("III")); // 3
console.log(romanoAArabe("IX"));  // 9
console.log(romanoAArabe("LVIII")); // 58
console.log(romanoAArabe("MCMXCIV")); // 1994
