/* Uma empresa fabrica painéis de LED compostos por quadrados de 1 cm de lado. 
Nos vértices de cada quadrado fica um LED, sendo que o tamanho de cada painel é 
escolhido pelo cliente conforme a sua necessidade. A imagem abaixo mostra um painel 
de 2 cm por 4 cm, composto por 15 LEDs no total.

Atualmente os funcionários desta fábrica perdem muito tempo 
(que poderia ser utilizado para inovação) com o cálculo manual desses painéis. 
A alta diretoria da fábrica decidiu então contratar você para evoluir e construir 
um cálculo automatizado, modernizando assim os sistemas deles.

Considerando um painel de n por m centímetros, desenvolva um código para calcular 
o número total de LEDs no painel.

A imagem demonstra um painel de leds que possuem 4 quadrados agrupados em cima e 
4 embaixo onde em cada ponta possuem 4 pontos vermelhos de led totalizando 15 pontos.

OBS:

Os valores da altura e da largura devem ser recebidos por meio de parâmetros */

function calculaTotalLeds(altura,largura) {
  if (altura > 0 && largura > 0){ // caso altura seja maior que zero:
    return (altura + 1) * (largura + 1) // retornar equação
  } else
    return 0 // retorna 0
}

calculaTotalLeds(2,3)
console.log(calculaTotalLeds(2,3))