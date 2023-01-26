function mdc(a, b) {
    if (b === 0) {
      return a
    }
    return mdc(b, a % b)
}

console.log(`O MDC é igual a: ${mdc(15, 3)}`) // Insira aqui os valores