/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
//Linha 18 "valor" e Linha 31 "texto", arquivo naoMexer

console.log("Bem vindo ao jogo de Blackjack!")
alert("Bem vindo ao jogo de Blackjack!")

const carta = comprarCarta();

var cartasComputador = comprarCarta();
var cartasComputador2 = comprarCarta();
var cartasUsuario1 = comprarCarta();
var cartasUsuario2 = comprarCarta();

var computadorPontos = cartasComputador.valor + cartasComputador2.valor;
var userPontos = cartasUsuario1.valor + cartasUsuario2.valor;

if (confirm("Quer iniciar uma nova rodada?")) {

  console.log("Computador - cartas:", cartasComputador.texto, cartasComputador2.texto, "- pontuação",
  cartasComputador.valor + cartasComputador2.valor);
  
  console.log("Usuário - cartas:", cartasUsuario1.texto, cartasUsuario2.texto, "- Pontuação", cartasUsuario1.valor +
    cartasUsuario2.valor);

  if (userPontos === computadorPontos) {
    console.log("Empate!");
  } else if (userPontos > computadorPontos) {
    console.log("O usuário ganhou!");
  } else if (userPontos < computadorPontos) {
    console.log("O computador ganhou!");
  }
} else {
  console.log("O jogo acabou!");
}
