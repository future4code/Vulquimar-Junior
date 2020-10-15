//1- Declarou uma função "conversorDeMoeda" que recebeu um parametro "valorEmDolar"
//Dentro da função "conversorDeMoeda" declarou uma const cotacao que irá receber uma valor digitado pelo usuário.
//Abaixo irá retornar "R$" concatenado com o valorEmDolar multiplicado pela a cotação.
//declarou uma const meuDinheiro que o valor da função conversorDeMoeda(100)
//E por ultimo chamou o console.log pra trazer o valor da multiplicação do valor 100 e o digitado pelo usuario.

//2- Declarou uma função investeDinheiro que recebe dois parametros, tipoDeInvestimento e valor
//Na linha abaixo declarou uma variavel vazia com o nome valorAposInvestimento
//Depois chamada a condicional switch com o nome tipoDeInvestimento que irá executar os valores associados ao case.
//Apos o switch case irá retornar o valorAposInvestimento
//Declarou uma constante novoMontante que recebe a funçao investeDinheiro com a multiplicação da case "Ações" 150 * 1.1
//Na linha abaixo declarou outra constante com o nome segundoMontante que recebe a função investeDinheiro que irá tentar localizar a case "Tesouro Direto" e multiplicar o valor da case por 200
//Logo apos é chamado dois console.log para apresentar o resultado das duas consts, a novoMontante irá mostrar o valor das Ações por 165
//Já o segundo console.log que trás o resultado do segundoMontante irá trazer o alert("TIPO DE INVESTIMENTO INFORMADO INCORRETO!")

//3- Três consts declaradas como array, uma preenchida e duas vazias
//Abaixo é chamado o loop for of para percorrer esses arrays declarados
//O dentro do bloco for é declarado uma variavel com o nome numero que irá correr dentro do array numeros
//Se os valores dentro do array for par irá cair no array1 se não for irá cair no array2
//No primeiro console.log irá contar a quantidade de valores dentro do array numeros
//No segundo console.log irá contar quantos valores possui dentro do array1 (valores pares)
//No terceiro console.log irá contar quantos valores possui dentro do array2 (valores impares)

//4- Declarou uma const numeros em formato array com varios valores
//Abaixo declarou duas variaveis que recebeu dois valores uma propriedade global e outra number
//Dentro do loop irá correr no primeiro bloco if e pegar o menor valor dentro do array numeros
//Dentro do loop do segundo bloco if irá correr e pegar o maior numero do array numeros
//Depois chama dois console.log trazendo esses valores -10 e 1590

//-----------------------------------------------------------------------------------------

//Exercícios de Lógica de Programação
//1- length, forEach, splice, push
// let frutas = ["maça", "uva", "laranja"]

// frutas.forEach(function (item, indice) {
//   console.log(item, indice);
// });

// const anime = ["Naruto", "Bleach", "One Piece", "Major"]
// let add = anime.push("Black Clover")
// console.log(anime)

//2- a)False, b) True, c) True,   d)True, e)True

//Exercício 2
// O código não funciona, para funcionar deveria ficar da seguinte forma: 
// const quantidadeDeNumerosPares;
// let i = 0;
// while(i <= quantidadeDeNumerosPares) {
//   console.log(i*2);
//   i++;
// }

// Exercício 3
// function triangulo(a, b, c){
//     if(a === b === c){
//         return "Equilátero";
//     }else if(a === b || b === c){
//         return "Isósceles";
//     }else{
//         return "Escaleno";
//     }
// }

// Exercício 4
// function maior(a, b){
//     if(a > b){
//         return a;
//     }else{
//         return b;
//     }
// }
// function divisivel(a, b){
//     if (a%b === 0){
//         return a + " é divisivel por " + b;
//     }else{
//         return a + " não é divisível por " + b;
//     }
// }

// function diferenca(a, b){
//     if(a > b){
//         return a - b;
//     }else{
//         return b - a;
//     }
// }

// Aula 15 - Objetos, Strings e Arrays
// Exercícios de funções
// Exercício 1
// const arrayDeNumeros = [100,5,4,10,15];
// let valorMenor = arrayDeNumeros[0];
// let valorMaior = arrayDeNumeros[0];
// function maior(array){
//     for (let i = 0; i < array.length; i++){
//         if (array[i] > valorMaior){
//             valorMaior = array[i];
//         }
//     }
//     return valorMaior;
// }
// function menor(array){
//     for (let i = 0; i < array.length; i++){
//         if (array[i] < valorMenor){
//             valorMenor = array[i];
//         }
//     }
//     return valorMenor;
// }
// console.log(maior(arrayDeNumeros));
// console.log(menor(arrayDeNumeros));

// Exercício 2
// let hello = () => {
//     alert("Hello World!");
// }
// hello();

// Exercícios de objetos
// Exercício 01
// Podemos utilizar arrays e objetos quando queremos criar mais de um objeto com aquele mesmo "padrão" que criamos antes. Exemplo, digamos que eu queira criar alguns inputs, onde o usuário pode salvar seu input, e eu queira salvar todos eles. Eu posso criar uma array de objeto para sempre salvar num mesmo formato.
// Exercício 02
// function criaRetangulo(lado1, lado2){
//     return infos = {
//         largura: lado1,
//         altura: lado2,
//         perimetro: 2*(lado1 + lado2),
//         area: lado1*lado2
//     }
// }

// Exercício 03
// const filme = {
//     titulo: "Qualquer coisa",
//     ano: 2020,
//     diretor: "Icaro, o lindo",
//     atores: ["João", "Melissa", "Mais alguem"]
// }
// function imprimeArrayAtores(array){
//     for(const i of array){
//         if(array !== undefined){
//             return String(array);
//         }else{
//             return String(i);
//         }      
//     }
// }
// console.log("Venha assistir ao filme ", filme.titulo, " do ano ", filme.ano, " digirido por ", filme.diretor, " estrelado por", imprimeArrayAtores(filme.atores));

//Exercício 04
// let pessoa = {
//     nome: "Icaro",
//     idade: 23,
//     email: "icaro.ssantos96@gmail.com",
//     endereco: "Estrada dos Alvarenga 10.059"
// }

// function anonimizarPessoa(){
//     const pessoaAnonima = {
//         ...pessoa,
//         nome: "Anonimo"
//     }
// }

// Aula 16 - Callback e funções de array
// Exercício 01
// For, while e for of...
// Exercício 02
// a. 
// const soAdultos = pessoas.filter((pessoa, idx, array) => {
//     return pessoa.idade >= 18;
// })
// b.
// const soCriancas = pessoas.filter((pessoa, idx, array) =>{
//     return pessoa.idade < 18;
// })
// console.log(soCriancas);
// Exercício 03
// a.
// const arrayMult = array.map((num, idx, arr) => {
//     return num * 2;
// })
// b.
// const arrayTrip = array.map((num, idx, arr) => {
//     return String(num*2);
// })
// c.
// const parImpar = array.map((num, idx, arr) => {
//     if (num%2 === 0){
//         return `${num} é par`;
//     }
//     if (num%2 !== 0){
//         return `${num} é impar`;
//     }
// })
// Exercício 04
// a.
// const podemEntrar = pessoas.filter((pessoa, idx, arr) =>{
//     return pessoa.idade > 14 && pessoa.idade < 60 && pessoa.altura >= 1.5;
// })
// b.
// const naoPodemEntrar = pessoas.filter((pessoa, idx, arr) => {
//     return pessoa.idade >= 60 || pessoa.idade <= 14 || pessoa.altura < 1.5;
// })

// Exercício 05
const consultas = [
	{ nome: "João", genero: "masculino", cancelada: true, dataDaConsulta: "01/10/2019" },
    { nome: "Pedro", genero: "masculino", cancelada: false, dataDaConsulta: "02/10/2019" },
    { nome: "Icaro", genero: "masculino", cancelada: false, dataDaConsulta: "02/10/2019" },
	{ nome: "Paula", genero: "feminino", cancelada: true, dataDaConsulta: "03/11/2019" },
	{ nome: "Márcia", genero: "feminino", cancelada: false, dataDaConsulta: "04/11/2019" }
]

const naoCanceladoHomem = consultas.filter((consulta, idx, arr) => {
    return !consulta.cancelada && consulta.genero === "masculino";
})
const canceladoHomem = consultas.filter((consulta, idx, arr) => {
    return consulta.cancelada && consulta.genero === "masculino";
})

const naoCanceladoMulher = consultas.filter((consulta, idx, arr) =>{
    return !consulta.cancelada && consulta.genero === "feminino";
})

const canceladoMulher = consultas.filter((consulta, idx, arr) =>{
    return consulta.cancelada && consulta.genero === "feminino";
})

for (let i in naoCanceladoHomem){
    console.log(`Olá, Sr ${naoCanceladoHomem[i].nome}. Estamos enviando esta mensagem para lembrá-lo da sua consulta no dia ${ naoCanceladoHomem[i].dataDaConsulta }. Por favor, acuse o recebimento deste e-mail.`)
}

for (let i in canceladoHomem){
    console.log(`Olá, Sr ${canceladoHomem[i].nome}. Infelizmente, sua consulta marcada para o dia ${ canceladoHomem[i].dataDaConsulta } foi cancelada. Se quiser pode entrar em contato conosco para remarcá-la.`)
}

for (let i in naoCanceladoMulher){
    console.log(`Olá, Sra. ${naoCanceladoMulher[i].nome}. Estamos enviando esta mensagem para lembrá-lo da sua consulta no dia ${ naoCanceladoMulher[i].dataDaConsulta }. Por favor, acuse o recebimento deste e-mail.`)
}

for (let i in canceladoMulher){
    console.log(`Olá, Sra. ${canceladoMulher[i].nome}. Infelizmente, sua consulta marcada para o dia ${ canceladoMulher[i].dataDaConsulta } foi cancelada. Se quiser pode entrar em contato conosco para remarcá-la.`)
}