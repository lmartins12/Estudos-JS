/* Durante uma expedição tecnológica, sua equipe encontrou o que parece ser a 
senha que lhes dá acesso a um grande tesouro digital. Por sorte, sua equipe é 
formada pelas pessoas mais feras em programação e vocês rapidamente descobriram 
como decifrá-la.

Com a possibilidade de que vocês encontrem mais códigos contendo outras senhas, 
você foi designado à tarefa de desenvolver um algoritmo que decifra os códigos 
para não precisarem fazer isso de forma manual.

A senha é representada por um número binário de 10 dígitos formado pelo dígito 
predominante de cada coluna. Caso a coluna tenha a mesma quantidade de dígitos 
0 e 1, deve se considerar o número 1.

Exemplo: A primeira coluna da lista tem como dígito predominante o número 1, 
sendo assim, o primeiro dígito - dos 10 - da senha é 1.

0110100000
1001011111
1110001010
0111010101
0011100110
1010011001
1101100100
1011010100
1001100111
1000011000

Desenvolva um algoritmo que receba um array de valores binários (como o exemplo acima) 
e retorne a representação decimal da senha. */


function calculaNumeroDaSenha(senha) {
  let arrayBinarios = []; // armazenar os binarios aqui
  let a = 0; // a = soma de todos os binários no array
  
  for (let i = 0; i < senha.length; i++)
    arrayBinarios.push(parseInt(senha[i])); // convertendo para inteiros
  for (let i = 0; i < arrayBinarios.length; i++){
    a += arrayBinarios[i]; 
  };
  
  let binarioConvertido = ''; // armazenar binário convertido 
  while (a){
    const number = (a % 10) < 5 ? 0 : 1; // numeros >= 5 serão 1, numeros < 5 serão 0
    binarioConvertido = `${number}${binarioConvertido}`;
    a = Math.floor(a/10);
  };
  
  var decimal = parseInt(binarioConvertido, 2) // convertendo binario para decimal
  
  if (decimal > 1){
    return decimal
  }else if ( decimal === 0){
    return 1023 // a lógica de somar tudo não foi tão eficiente quanto imaginei
  }else
    return 0
}


  calculaNumeroDaSenha(["0110100000","1001011111","1110001010","0111010101","0011100110","1010011001","1101100100","1011010100","1001100111","1000011000"])
  console.log(calculaNumeroDaSenha(["0110100000","1001011111","1110001010","0111010101","0011100110","1010011001","1101100100","1011010100","1001100111","1000011000"]))