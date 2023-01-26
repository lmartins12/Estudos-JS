/* Dizemos que um número natural X esconde o Y quando, ao apagar alguns algarismos
 de X, o número Y aparece. Por exemplo, o número 12345 esconde o número 235, 
 uma vez que pode ser obtido ao apagar os números 1 e 4. Por outro lado, ele não esconde o número 154.

A imagem demonstra números: 1,2,3,4,5 todos estão em azul, 
mas o número 1 e 4 estão com um risco vermelho.

Escreva um código que recebe dois números e que retorna um booleano dizendo se o 
primeiro esconde o segundo. */

function checaNumeroEscondido(numero,numeroOculto) {
  // convertendo para string e separando caracteres
  let numeroStr = numero.toString().split('');
  let numeroOcultoStr = numeroOculto.toString().split(''); 
  
  // retornando valores do numeroOculto que estão incluidos no numero
  let resultado = numeroOcultoStr.every(contem => numeroStr.includes(contem))
  
  return resultado
}

checaNumeroEscondido(12345,235)
console.log(checaNumeroEscondido(12345,235))