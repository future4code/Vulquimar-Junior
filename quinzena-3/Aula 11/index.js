// console.log("Oie, eu só sirvo pra saber se as coisas funcionaram!")

// const respostaDoUsuario = prompt("Digite o número que você quer testar")
// const numero = Number(respostaDoUsuario)

// if(numero % 2 === 0) {
//   console.log("Passou no teste.")
// } else {
//   console.log("Não passou no teste.")
// }

// Explique o que o código faz. "Pega o valor number que o usuario digitar e divide com 2 e compara com 0, se igual a 0 Passou no teste se não Não passou no teste.
// Qual o teste que ele realiza? comparação
// Para que tipos de números ele imprime no console "Passou no teste"? 0
// Para que tipos de números a mensagem é "Não passou no teste"? qualquer valor que não seja 0

// let fruta = prompt("Escolha uma fruta")
// let preco
// switch (fruta) {
//   case "Laranja":
//     preco = 3.5
//     break;
//   case "Maçã":
//     preco = 2.25
//     break;
//   case "Uva":
//     preco = 0.30
//     break;
//   case "Pêra":
//     preco = 5.5
//     break; // BREAK PARA O ITEM c.
//   default:
//     preco = 5
//     break;
// }

// console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

// a. Para que serve o código acima? "Para verificar o preço das frutas."

// b. Qual será a mensagem impressa no console, se o valor de fruta for `" "Maçã"`? - "O preço da fruta ", Maçã, " é ", "R$ ", 2.25)"

// c. Considere que um usuário queira comprar uma `Pêra`, "O preço da fruta  Pêra é  R$  5"
// qual seria a mensagem impressa no console se retirássemos 
// o `break` que está logo acima do `default` 
// (o `break` indicado pelo comentário "BREAK PARA O ITEM c.")?

// const numero = Number(prompt("Digite o primeiro número."))

// if(numero > 0) {
//   console.log("Esse número passou no teste")
// 	let mensagem = "Essa mensagem é secreta!!!"
// }

// console.log(mensagem)

// a. O que a primeira linha está fazendo? "declarando uma const string ja convertendo em number"

// b. Considere um usuário digitou o número 10. Qual será a mensagem do terminal? "Esse numero passou no teste"
// E se fosse o número -10? undefined, não tem nenhum valor atribuido a ela.

// c. Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo. "undefined ou not defined por não ter nenhum valor de saída no console"

// EXERCÍCIO 5
// let idade = Number(prompt("Qual é sua idade?"))

// if (idade > 17){
//   console.log("Você pode dirigir!")
// }else{
//   console.log("Você não pode dirigir.")
// }


// EXERCÍCIO 6
// let turno = prompt("Digite o turno no qual você estuda. Ex: M (matutino) ou V (Vespertino) ou N (Noturno)")

// if(turno === "m"){
//   console.log("Matutino")
// }else if(turno=== "v"){
//   console.log("Vespertino")
// }else{
//   console.log("Noturno")
// }

// let turno = prompt("Digite o turno no qual você estuda. Ex: M (matutino) ou V (Vespertino) ou N (Noturno)")

// switch (turno){
//   case "m":
//     console.log("Matutino")
//     break;
//   case "v":
//     console.log("Vespertino")
//     break; 
//   default:
//     console.log("Noturno")
//     break;
// }

// EXERCÍCIO 7

// let filme = prompt("Qual o gênero de filme que você irá assistir?")
// let ingresso = Number(prompt("Qual é o valor do ingresso?"))
// let assistir = prompt("O gênero escolhido foi " + filme + " e o valor do ingresso é R$" + ingresso + " reais." + " Vamos assistir o filme?")

// if (filme === "fantasia" && ingresso <= 15 && assistir === "positivo"){
//   console.log("Bom filme")
// }else{
//   console.log("Escolha outro filme :(")
// }

// Desafio 1
// let filme = prompt("Qual o gênero de filme que você irá assistir?")
// let ingresso = Number(prompt("Qual é o valor do ingresso?"))
// let assistir = prompt("O gênero escolhido foi " + filme + " e o valor do ingresso é R$" + ingresso + " reais." + " Vamos assistir o filme?")

// if (filme === "fantasia" && ingresso <= 15 && assistir === "positivo"){
//   var snack = prompt("Qual combo você deseja para acompanhar o filme? \nTemos pipoca média + refrigerante (Coca Cola, fanta, sprite 600ml) e temos água 500ml + churros com creme ou chocolate de prestigio.")
//   console.log("Bom filme! " + " Seu pedido foi " + snack + ".")
// }else{
//   console.log("Escolha outro filme :(")
// }
