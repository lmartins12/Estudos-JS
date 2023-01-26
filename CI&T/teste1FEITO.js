/* Você e seu time estão desenvolvendo um sistema de indicações de postos de gasolina que ficam próximos da localização atual do veículo. No modo de direção “viagem”, a funcionalidade a ser desenvolvida é de indicar ao condutor o posto mais distante possível dentro do limite atual de combustível. E caso não exista posto de gasolina, retornar -1

A pessoa responsável por fazer a especificação do sistema informou que você terá as seguintes informações: consumo médio de combustível, quantidade de combustível restante no veículo e um array contendo distâncias dos postos de gasolinas.

Exemplo:
Combustivel (em litros): 2
Consumo médio (km/l): 8
Postos de Gasolina (km): [2, 15, 22, 10.2] */

function ultimaParada(combustivel,consumo,postosDeGasolina) {
  let autonomia = (combustivel * consumo); // calcula a autonomia
  let resultado = Math.max.apply(Math, postosDeGasolina.filter(function(x){return x <= autonomia})); // Filtro para o posto mais distante possivel
  
  if (resultado >= 0) 
    return resultado // retorna posto mais distante possivel
  else
    return -1 // retorna -1 caso não exista posto 
}

ultimaParada(2,8,[1,15,22,11])
console.log(ultimaParada(2,8,[1,15,22,11]))