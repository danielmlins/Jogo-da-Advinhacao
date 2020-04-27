const readline = require("readline-sync");

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max-min)) + min;
}

function machineNumber() {
  let chances = 0
  const Cnumber = getRandomInt(1, 1000)
  let Hnumber = 1001
  while(chances < 20 && Hnumber != Cnumber) {
    chances++
    Hnumber = readline.question(`Use seu chute numero: ${chances}.`)
    if(Hnumber < Cnumber) {
      console.log(`Seu numero foi menor que o desejado.`)
    }else if(Hnumber > Cnumber) {
      console.log(`Seu numero foi maior que o desejado.`)
    }
  };
  if(Cnumber == Hnumber) {
    console.log(`Parabens! Seu chute de numero ${chances} foi certo.`)
  }else {
    console.log(`Voce perdeu! A resposta era ${Cnumber}.`)
  }
}

function humanNumber() {
  let chances = 1
  let cMin = 0
  let cMax = 0
  let cNumber = 500
  const hNumber = readline.question('Digite um numero de 1 a 1000: ')
  while(chances < 21 && hNumber != cNumber) {
    if(hNumber < cNumber) {
      console.log(`Seu numero foi maior que o desejado. ${cNumber}`)
      cMax = cNumber
      cNumber = parseInt((cMin+cMax)/2)
    }else{
      console.log(`Seu numero foi menor que o desejado. ${cNumber}`)
      cMin = cNumber
      if(cMax < cMin) {
        let apoio = cMax
        cMax = cMin
        cMin = apoio
      }
      cNumber = parseInt((((cMax-cMin)/2)+cNumber)+1)
      if(cNumber >1000) {cNumber = 1000}
    }
    chances++
  };
  if(cNumber == hNumber) {
    console.log(`Malditas Maquinas!! Ganharam novamente.`)
  }else {
    console.log(`Voce perdeu! A resposta era ${hNumber}.`)
  }
}

function jogo() {
  resp = readline.question('Voce quer chutar[0] ou quer que a maquina chute[1]?')
  if(resp == 1) {
    humanNumber()
    let novamente = readline.question('Quer jogar novamente? sim[1] ou nao[0]')
    if(novamente == 1) {jogo()}
  }else{
    machineNumber()
    let novamente = readline.question('Quer jogar novamente? sim[1] ou nao[0]')
    if(novamente == 1) {jogo()}
  }

}

jogo();