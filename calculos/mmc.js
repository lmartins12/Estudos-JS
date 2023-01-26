function mmc(a, b) {
    var maior = Math.max(a, b);
    var menor = Math.min(a, b);
    var mmc = maior;
    while (mmc % menor !== 0) {
        mmc += maior;
    }
    return mmc;
}

console.log(`O MMC é igual a: ${mmc(2, 5)}`) // Insira aqui os valores