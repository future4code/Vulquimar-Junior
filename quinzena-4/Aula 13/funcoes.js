// **Exercícios de interpretação de código**

// ** EXERCÍCIO 1

// Leia o código abaixo:

// function minhaFuncao(variavel) {
// 	return variavel * 5
// }

// console.log(minhaFuncao(2))
// console.log(minhaFuncao(10))


// a. O que vai ser impresso no console?
// 10
// 50

// b. O que aconteceria se retirasse os dois `console.log` e simplesmente invocasse a função `minhaFuncao(2)` e `minhaFuncao(10)`? O que apareceria no console?
// Se executar direto no editor não voltará nada no console porque não tem uma referencia de console.log, porém se digitar direto no console ou node terminal irá voltar o mesmo valor da resposta "a" que é 10 e 50.
// 10
// 50

// **  EXERCÍCIO 2

// Leia o código abaixo:

// let arrayDeNomes = ["Darvas", "Goli", "João", "Paulinha", "Soter"];

// const outraFuncao = function(array) {
// 	for (let i = 0; i < 2; i++) {
// 		console.log(array[i])
// 	}
// }

// outraFuncao(arrayDeNomes)

// a. Explicite quais são as saídas impressas no console
// O array percorre até o numero 2, sendo assim irá mostrar no array os dois primeiros que nesse caso é "Darvas", "Goli".
// b. Se `arrayDeNomes` mudasse de valor para `["Amanda", "Caio"]`, o que vai ser impresso no console?
// Será impresso "Amanda", "Caio".

// ** EXERCÍCIO 3

// O código abaixo mostra uma função que recebe um array e devolve outro array. Explique em poucas palavras o que ela faz e sugira um nome melhor para ela!

// 	const metodo = (array) => {
//   let arrayFinal = [];

//   for (let x of array) {
// 		if (x % 2 === 0) {
// 	    arrayFinal.push(x * x)
// 		}
//   }

//   return arrayFinal;
// }

//R: Foi declarado uma constante de nome metodo que recebe uma função com nome array. Dentro dessa função recebe um array vazio.
//dentro da função é feito um loop em for of que percorre o array e dentro do if na variavel x é pego o restante de 2 igual 0, se for igual a 0 o array final irá pegar esse valor do resto e multiplicar por ele mesmo. E depois o return mostra o resultado do arrayFinal.
//acho que eu chamaria restoDoArrayFinal, sei lá. kkk

//** EXERCÍCIO 4

// Escreva as funções explicadas abaixo:

// a. A função não deve receber nenhum parâmetro e deve imprimir uma mensagem falando algumas informações sobre você, como: 
// const informacoes = () => {
//   console.log("Eu sou Vulquimar, tenho 34 anos, moro em Uberlândia e sou estudante.")
// }
// informacoes()

// "Eu sou Caio, tenho 23 anos, moro em São Paulo e sou estudante."


// Troque o nome, idade, cidade e se é estudante ou não por informações sobre você. Lembrando que a função não possui entradas, apenas imprimir essa mensagem.

// b.  Agora escreva uma função que receba 4 parâmetros que correspondem às informações de uma pessoa: o nome (`string`), a idade (`number`), a cidade (`string`) e um `boolean` que representa se é estudante ou não. Ela deve retornar uma `string` que unifique todas as informações da pessoa em uma só mensagem com o template:

// const infoPessoais = (nome, idade, cidade, estudante) => {
// nome = "Vulquimar"
// idade = 34
// cidade = "Uberlândia"
// estudante = true

// if(estudante === true){
//   estudante = "sou"
//  }else{
//    estudante = "não sou"
//  }
//  console.log("Eu sou "+ nome +", tenho " + idade + " anos, moro em " + cidade + " e " + estudante + " estudante.")
// }
// infoPessoais()

// Eu sou [NOME], tenho [IDADE] anos, moro em [ENDEREÇO] e [SOU/NÃO SOU] estudante.

//** EXERCÍCIO 5

// Escreva as funções explicadas abaixo:

// a. Escreva uma função que receba 2 números como parâmetros, e, dentro da função, faça a soma das duas entradas e retorne o resultado. Invoque a função e imprima no console o resultado.
// function somando(a, b){
//   return soma = a + b
// }
// console.log(somando(50, 20))
// b. Faça uma função que recebe 2 números e retorne um booleano que informa se o primeiro número é **maior ou igual** ao segundo.
// function somando(a, b){
//   a = 20
//   b = 10
//   if(a >= b){
//     console.log(a + " é maior que " + b)
//   }
// }
// somando()
// c. Faça uma função que recebe uma mensagem (`string`) como parâmetro e imprima essa mensagem 10 vezes. (não é permitido escrever 10 `console.log` dentro da função, use outra estrutura de código para isso)

// const amoSorvete = (sorvete) =>{
//   for(let i = 0; i < 10; i++){
//   console.log(sorvete)
//  }
// }

// amoSorvete("Eu amo sorvete!!!")

//** EXERCÍCIO 6

// Para os itens a seguir, considere o seguinte array para os seus testes:


// const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]


// a. Escreva uma função que receba um array de números e devolva a quantidade de elementos nele
// const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]

// const quantidadeArray = (array) =>{
//   return `Esse array possui ${array.length} elementos.`
// }
// console.log(quantidadeArray(array))

// b. Escreva uma função que receba um número e devolva um booleano indicando se ele é par ou não
// const parEImpar = (numeros) => {
//   if(numeros % 2 === 0) {
//       return `Esse numero é par`
//   } else {
//       return `Esse numero é impar`
//   }
// }
// console.log(parEImpar(2))
// c. Escreva uma função que receba um array de números e devolva a quantidade de números pares dentro dele
// const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]

// const numerosParesNoArray = (array) => {
//   var pares = 0
//   for(let i = 0; i < array.length; i++) {
//       if(array[i] % 2 === 0) {
//         pares += 1
//       }
//   }
//   return "Possui "+ pares + " numeros pares"
// }
// console.log(numerosParesNoArray(array))

// d. Reescreva seu código anterior (do item c) de tal forma que ele utilize a função do item b para verificar se o número é par
