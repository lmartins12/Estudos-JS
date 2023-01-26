/* Ao se comparar se uma string é maior que outra, considera-se a ordem alfabética
ou lexicográfica. No caso, “abcd” < “adbc” < “bacd”.

Escreva uma função que receba uma string A e retorne uma string B, 
sendo que B é composta pelos mesmos caracteres que A reordenados.

B deve obedecer às seguintes condições:

Ser maior que A
Ser a menor string possível que cumpra as condições acima
Caso não seja possível encontrar uma string que cumpra as condições, 
retorne a string “sem reposta”.
Por exemplo:

A = “ab”
Logo, o resultado será “ba”

A = “abcde”
Logo, o resultado será “abced”

A = “ba”
Nesse caso, o resultado será “sem resposta" */

function menorStringMaior(name) {
    // Organizando string 
    let nameSplit = name.split('')
    let n = nameSplit.length - 1
  
    while (n > 0 && nameSplit[n - 1] >= nameSplit[n]) n--;
    if (n <= 0) // resultado caso não seja possível encontrar uma string que cumpra as condições
      return 'sem resposta'
  
    let m = nameSplit.length - 1;
    while (nameSplit[m] <= nameSplit[n - 1]) m--;
    const o = nameSplit[n - 1];
      nameSplit[n - 1]= nameSplit[m];
      nameSplit[m] = o;
      m = nameSplit.length - 1; // encontra caractere a ser movido
    
    while (n < m){
      const o = nameSplit[n];
      nameSplit[n] = nameSplit[m];
      nameSplit[m] = o; n++; m--;
    };
    let resultado = nameSplit.join(''); // Unir caracteres novamente
      return resultado
  }

  menorStringMaior("abcde")
  console.log(menorStringMaior("abcde"))

