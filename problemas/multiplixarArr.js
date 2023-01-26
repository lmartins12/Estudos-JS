// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

function grow(x){
    let arrOrdenado = x.sort((a, b) => a - b);
    let multi = 1
    for (let i = 0; i < arrOrdenado.length; i++){
      multi *= arrOrdenado[i]
    }
    return multi
  }
