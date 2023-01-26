/* Dada um texto qualquer e um lista de termos de pesquisa 
(sequencia de caracteres), retorne os primeiros K termos mais 
recorrentes na string, onde K é um parâmetro configurável.

Exemplo:

String: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
tempor incididunt ut labore et dolore magna aliqua"

Lista de termos: ["a", "em", "i", "el"]

K: 2

Resultado: ["i", "a"]

Explicação:

Ocorrências de cada termo,"i": 11, "a": 7, "em": 2, "el": 1, com K = 2, 
retornamos "i" e "a" ordenados conforme a quantidade de ocorrências de cada termo.

Obs: Quando houver termos com quantidades iguais, priorizar o retorno de 
acordo com a ordem de ocorrência do termo na string. */

function calculaTopOcorrenciasDeQueries(texto,queries,k) {
  let queriesOcorrencias = [] // armazenar contagem
  
  for (let word of queries){ // todas ocorrencias
    var g = new RegExp(word, 'g');
    contar = (texto.match(g) || []).length;
    queriesOcorrencias[word] = contar; // armazenar queria e suas respectiva contagem de ocorrecias
  }
  arrayFinal = Object.keys(queriesOcorrencias).map((key) => {
    return [key, queriesOcorrencias[key]]; // array com querias e ocorrencias em pares
  });
  arrayFinal.sort((first, second) => {
    return second[1] - first[1]; // ordenando de forma decrescente
  });
  var apenasQueries = arrayFinal.map((e) => {
    return e[0] // retirando numeros e deixando apenas queries ordenadas
   });
  var resultado = apenasQueries.slice(0, k);
  return resultado // retorna array com as K maiores ocorrencias
}


calculaTopOcorrenciasDeQueries("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",["a","em","i","el"],2)
console.log(calculaTopOcorrenciasDeQueries("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",["a","em","i","el"],2))