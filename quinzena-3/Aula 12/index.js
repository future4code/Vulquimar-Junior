//console.log("Oie, eu só sirvo pra saber se as coisas funcionaram!")

//Exercícios de interpretação de código


// **EXERCÍCIO 1
// O que o código abaixo está fazendo? Qual o resultado impresso no console?

// let valor = 0
// for(let i = 0; i < 5; i++) {
//   valor += i
// }
// console.log(valor)

// R: Enquanto a variavel valor não obter o valor 5 o laço irá continuar.


// **EXERCÍCIO 2
// Leia o código abaixo:

// const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
// for (let numero of lista) {
//   if (numero > 9) {
// 		console.log(numero)
// 	}
// }

// a. O que vai ser impresso no console?
// 19 21 23 25 27 30
// b. Se eu quisesse acessar o **índice** de cada elemento dessa lista, o `for...of...` é suficiente? Se sim, o que poderia ser usado para fazer isso?
// Não entendi muito bem a pergunta (acessar o **índice** de cada elemento dessa lista), mas creio que só alterando essa parte aqui (numero > 9) você consegue acessar todo o array.


// **DESAFIO 1
// Qual seria o resultado impresso no console, se o usuário digitasse o número `4` ? 


// const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
// let quantidadeAtual = 0
// while(quantidadeAtual < quantidadeTotal){
//   let linha = ""
//   for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
//     linha += "0"
//   }
//   console.log(linha)
//   quantidadeAtual++
// }

//R: Por causa desse trecho aqui (linha += "0") ele irá adicionar 0 em quantidade correspondete ao numero passado no laço.

// **Exercícios de escrita de código

// **EXERCÍCIO 3

// Nas perguntas abaixo, considere que você tenha acesso a um `array`  (chamado de 'array original') que seja composto somente de números. Após o enunciado, há um exemplo de qual deve ser a resposta final de cada programa individualmente.

// a. Escreva um programa que:

// - **Imprima** cada um dos valores do array original.

// b. Escreva um programa que:

// - **Imprima** cada um dos valores do array original divididos por 10

// c. Escreva um programa que:

// - **Crie** um novo array contendo, somente, os números pares do array original.
// - **Imprima** esse novo array

// d. Escreva um programa que:

// - **Crie** um novo array contendo strings, da seguinte forma: "O elemento do índex `i` é: `numero`"
// - **Imprima** este novo array

// e. Escreva um programa que imprima no console o maior e o menor números contidos no array original

// - Dica

// Exemplos do que o código tem que fazer em cada item:


// Este array será usado para exemplificar as respostas de todos os itens
// const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

// Resposta item a.
// 80
// 30
// 130
// 40
// 60
// 21
// 70
// 120
// 90
// 103
// 110
// 55

// Resposta item b.
// 8
// 3 
// 13
// 4
// 6
// 2.1
// 7 
// 12
// 9
// 10.3
// 11 
// 5.5

// Resposta item c.
// [80, 30, 130, 40, 60, 70, 120, 90, 110] 

// Resposta item d.
// [ 'O elemento do índex 0 é 80',
//   'O elemento do índex 1 é 30',
//   'O elemento do índex 2 é 130',
//   'O elemento do índex 3 é 40',
//   'O elemento do índex 4 é 60',
//   'O elemento do índex 5 é 21',
//   'O elemento do índex 6 é 70',
//   'O elemento do índex 7 é 120',
//   'O elemento do índex 8 é 90',
//   'O elemento do índex 9 é 103',
//   'O elemento do índex 10 é 110',
//   'O elemento do índex 11 é 55' ]

// Resposta e.
// "O maior número é 130 e o menor é 21"
